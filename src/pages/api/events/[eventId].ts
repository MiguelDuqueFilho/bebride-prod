import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { PrismaClient } from '@prisma/client';
import uploadS3 from '../../../middlewares/uploadS3';
import deleteS3 from '../../../middlewares/deleteS3';

interface ExtendNextApiRequest extends NextApiRequest {
  body: {
    title: string;
    content: string;
    status: string;
    initialDate?: string;
    eventDate?: string;
    finishDate?: string;
  };
  file?: {
    originalname: string;
    key: string;
    location: string;
  };
}

const handler = nextConnect<NextApiRequest, NextApiResponse>()
  .use(uploadS3.single('file'))
  .get(async (req: ExtendNextApiRequest, res: NextApiResponse) => {
    const { eventId } = req.query;
    try {
      const prisma = new PrismaClient({
        errorFormat: 'minimal'
      });

      const getEvent = await prisma.event.findUnique({
        where: {
          id: Number(eventId)
        },
        select: {
          title: true,
          content: true,
          status: true,
          fileLocation: true,
          initialDate: true,
          eventDate: true,
          finishDate: true
        }
      });

      const data = {
        title: getEvent.title,
        content: getEvent.content,
        status: getEvent.status,
        image: getEvent.fileLocation,
        initialDate: getEvent.initialDate,
        eventDate: getEvent.eventDate,
        finishDate: getEvent.finishDate
      };

      return res.status(200).json({ event: data });
    } catch (error) {
      return res.status(400).json({ message: { error: error.message } });
    }
  })
  .put(async (req: ExtendNextApiRequest, res: NextApiResponse) => {
    const { eventId } = req.query;

    try {
      const prisma = new PrismaClient({
        errorFormat: 'minimal'
      });

      const {
        title,
        content,
        status,
        initialDate = null,
        eventDate = null,
        finishDate = null
      } = req.body;

      if (typeof req.file !== 'undefined') {
        const getEvent = await prisma.event.findUnique({
          where: {
            id: Number(eventId)
          },
          select: {
            fileKey: true
          }
        });

        if (getEvent.fileKey !== null) {
          await deleteS3(getEvent.fileKey);
        }
      }

      const updtEvent = await prisma.event.update({
        where: {
          id: Number(eventId)
        },
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
        title: updtEvent.title,
        content: updtEvent.content,
        status: updtEvent.status,
        initialDate: updtEvent.initialDate,
        eventDate: updtEvent.eventDate,
        finishDate: updtEvent.finishDate,
        image: updtEvent.fileLocation
      };

      return res.status(200).json({
        event: data,
        message: { information: 'Evento alterado!' }
      });
    } catch (error) {
      return res.status(400).json({ message: { information: error.message } });
    }
  })
  .delete(async (req: ExtendNextApiRequest, res: NextApiResponse) => {
    const { eventId } = req.query;
    try {
      const prisma = new PrismaClient({
        errorFormat: 'minimal'
      });

      const delEvent = await prisma.event.delete({
        where: {
          id: Number(eventId)
        }
      });

      await deleteS3(delEvent.fileKey);

      return res
        .status(200)
        .json({ message: { information: 'Evento excluido!' } });
    } catch (error) {
      return res.status(400).json({ message: { error: error.message } });
    }
  })
  .patch(async (req, res) => {
    throw new Error(
      'Não acredito que aconteceu! O erro pode ser detectado e tratado.'
    );
    // res.status(405).end(); //Method Not Allowed
  });

export const config = {
  api: {
    bodyParser: false
  }
};

export default handler;
