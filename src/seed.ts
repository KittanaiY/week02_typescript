import { createEvents } from './db/createEvents';
import { createParticipants } from './db/createParticipants';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
    await createEvents();
    await createParticipants();
}

main()