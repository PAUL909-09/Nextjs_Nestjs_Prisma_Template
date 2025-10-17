import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      email: 'admin@sfet.org',
      password: 'hashed_password', // In production, hash this!
      name: 'Admin User',
      role: 'ADMIN',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'member@sfet.org',
      password: 'hashed_password',
      name: 'Member User',
      role: 'MEMBER',
    },
  });

  const member1 = await prisma.member.create({
    data: {
      userId: user1.id,
      studentId: 'STU001',
      orgId: 1,
    },
  });

  const event1 = await prisma.event.create({
    data: {
      name: 'Annual Fundraiser',
      description: 'Yearly student org fundraiser',
      date: new Date(),
    },
  });

  await prisma.payment.create({
    data: {
      userId: user2.id,
      amount: 50.0,
      description: 'Membership fee',
      eventId: event1.id,
    },
  });

  await prisma.expense.create({
    data: {
      userId: user1.id,
      amount: 30.0,
      description: 'Event supplies',
      eventId: event1.id,
    },
  });

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });