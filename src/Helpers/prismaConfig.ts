import { PrismaClient } from '@prisma/client';

export async function prismaConnection() {
  const prismaConnection = new PrismaClient()
  const prisma = await prismaConnection.$connect()

  return prisma
}
