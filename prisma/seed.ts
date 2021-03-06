import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import Admin from '../src/pages/admin/index';

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  if (params.model === 'User' && params.action === 'create') {
    params.args.data.password;
    params.args.data.password = await bcrypt.hash(
      `${params.args.data.password.trim()}-${params.args.data.email.trim()}`,
      10
    );
  }
  return next(params);
});

async function main() {
  const admin = await prisma.user.create({
    data: {
      email: 'miguel.duque@globo.com',
      name: 'Miguel Duque Filho',
      password: '123123123',
      role: 'Admin',
      provider: 'credentials'
    }
  });
  console.log({ admin });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
