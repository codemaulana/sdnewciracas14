import { PrismaClient } from '@prisma/client'
import bcrypt from "bcryptjs";

const prisma = new PrismaClient()

async function main() {
  // Hash password agar aman (password: password123)
  const hashedPassword = await bcrypt.hash('password123', 10)

  console.log('Sedang memasukkan data dummy...')

  await prisma.user.upsert({
    where: { email: 'admin@sdnciracas.sch.id' },
    update: {},
    create: {
      email: 'admin@sdnciracas.sch.id',
      name: 'Admin Maulana',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  await prisma.user.upsert({
    where: { email: 'guru@sdnciracas.sch.id' },
    update: {},
    create: {
      email: 'guru@sdnciracas.sch.id',
      name: 'Budi Santoso',
      password: hashedPassword,
      role: 'USER',
    },
  })

  console.log('Seed data berhasil dimasukkan!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })