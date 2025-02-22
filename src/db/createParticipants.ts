import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createParticipants() {
    const participants = [
        {
            name: 'John Doe',
            email: 'john.doe@example.com'
        },
        {
            name: 'Jane Doe',
            email: 'jane.doe@example.com'
        },
        {
            name: 'Alice Smith',
            email: 'alice.smith@example.com'
        },
        {
            name: 'Bob Smith',
            email: 'bob.smith@example.com'
        },
        {
            name: 'Charlie Brown',
            email: 'charlie.brown@example.com'
        },
    ];

    for (const participant of participants) {
        await prisma.participant.create({
            data:participant,
        });
    }

    const responseParticipants = await prisma.participant.findMany();
    const responseEvents = await prisma.event.findMany();

    addEvent(responseParticipants[0].id, responseEvents[0].id);
    addEvent(responseParticipants[0].id, responseEvents[1].id);
    addEvent(responseParticipants[0].id, responseEvents[2].id);
    addEvent(responseParticipants[1].id, responseEvents[3].id);
    addEvent(responseParticipants[1].id, responseEvents[4].id);
    addEvent(responseParticipants[1].id, responseEvents[5].id);
    addEvent(responseParticipants[2].id, responseEvents[0].id);
    addEvent(responseParticipants[2].id, responseEvents[1].id);
    addEvent(responseParticipants[3].id, responseEvents[2].id);
    addEvent(responseParticipants[4].id, responseEvents[3].id);
    addEvent(responseParticipants[4].id, responseEvents[4].id);
    addEvent(responseParticipants[1].id, responseEvents[2].id);

    const responseParticipants2 = await prisma.participant.findMany({
        include: {
            events: true
        }
    })

    const responseEventsWithParticipants = await prisma.event.findMany({
        include: {
            participants: true
        }
    })

    console.log(responseParticipants2)

    console.log(responseEventsWithParticipants)
}

async function addEvent(participantId: number, eventId: number) {
    await prisma.participant.update({
        where: { id: participantId },
        data: {
            events:{
                connect: {
                    id: eventId,
                },
            },
        },
    });
}