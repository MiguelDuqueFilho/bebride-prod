import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { PrismaClient } from '@prisma/client';
import uploadS3 from '../../../middlewares/uploadS3';
import authorization from '../../../middlewares/authorization';
import { pageSize } from '../../../utils/constants';

interface ExtendNextApiRequest extends NextApiRequest {
  body: {
    title: string;
    content: string;
    status: string;
    initialDate: string;
    eventDate: string;
    finishDate: string;
  };
  file?: {
    originalname: string;
    key: string;
    location: string;
  };
}

const handler = nextConnect<NextApiRequest, NextApiResponse>()
  .use(authorization)
  .use(uploadS3.single('file'))
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    const { page = 1 } = req.query;

    try {
      const prisma = new PrismaClient({
        errorFormat: 'minimal'
      });

      const totalItems = await prisma.event.count();
      const totalPages = Math.round(Number(totalItems / pageSize));
      const currentPage = Number(
        page <= 1 ? 1 : page >= totalPages ? totalPages : page
      );

      const findEvents = await prisma.event.findMany({
        skip: currentPage * pageSize - pageSize,
        take: pageSize,
        select: {
          id: true,
          title: true,
          content: true,
          status: true,
          fileLocation: true,
          initialDate: true,
          eventDate: true,
          finishDate: true,
          fileKey: true
        }
      });

      return res
        .status(200)
        .json({ events: findEvents, totalItems, totalPages, currentPage });
    } catch (error) {
      return res.status(400).json({ message: { error: error.message } });
    }
  })
  .post(async (req: ExtendNextApiRequest, res: NextApiResponse) => {
    const {
      title,
      content,
      status,
      initialDate = null,
      eventDate = null,
      finishDate = null
    } = req.body;

    try {
      const prisma = new PrismaClient({
        errorFormat: 'minimal'
      });

      const createEvent = await prisma.event.create({
        data: {
          title,
          content,
          status,
          initialDate: new Date(initialDate),
          eventDate: new Date(eventDate),
          finishDate: new Date(finishDate),
          fileKey: req.file?.key,
          fileLocation: req.file?.location,
          fileOriginalName: req.file?.originalname
        }
      });

      const data = {
        title: createEvent.title,
        content: createEvent.content,
        status: createEvent.status,
        image: createEvent.fileLocation,
        initialDate: createEvent.initialDate,
        eventDate: createEvent.eventDate,
        finishDate: createEvent.finishDate
      };

      return res.status(201).json({ event: data, message: 'Evento criado!' });
    } catch (error) {
      return res.status(400).json({ message: { error: error.message } });
    }
  })
  .patch(async (req, res) => {
    throw new Error(
      'Não acredito que aconteceu! O erro pode ser detectado e tratado.'
    );
  });

export const config = {
  api: {
    bodyParser: false
  }
};

export default handler;
