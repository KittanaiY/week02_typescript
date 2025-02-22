import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createEvents() {
    const events = [
        {
            category: "Music",
            title: "Concert",
            description: "A live concert",
            location: "London",
            date: "2021-07-01",
            time: "19:00",
            petsAllowed: false,
        },
        {
            category: "Art",
            title: "Art Exhibition",
            description: "An exhibition of modern art",
            location: "New York",
            date: "2021-08-15",
            time: "10:00",
            petsAllowed: true,
        },
        {
            category: "Technology",
            title: "Tech Conference",
            description: "A conference on the latest in tech",
            location: "San Francisco",
            date: "2021-09-10",
            time: "09:00",
            petsAllowed: false,
        },
        {
            category: "Food",
            title: "Food Festival",
            description: "A festival with food from around the world",
            location: "Paris",
            date: "2021-10-05",
            time: "12:00",
            petsAllowed: true,
        },
        {
            category: "Sports",
            title: "Marathon",
            description: "A city-wide marathon",
            location: "Boston",
            date: "2021-11-20",
            time: "07:00",
            petsAllowed: false,
        },
        {
            category: "Education",
            title: "Science Fair",
            description: "A fair showcasing science projects",
            location: "Chicago",
            date: "2021-12-01",
            time: "10:00",
            petsAllowed: true,
        },
        {
            category: "Literature",
            title: "Book Reading",
            description: "A reading of a new book by the author",
            location: "Seattle",
            date: "2022-01-15",
            time: "14:00",
            petsAllowed: false,
        }
    ];
 
    for (const event of events) {
        await prisma.event.create({
            data: {
                category: event.category,
                title: event.title,
                description: event.description,
                location: event.location,
                date: event.date,
                time: event.time,
                petsAllowed: event.petsAllowed,
            }
        });
    }

    const chiangMaiOrg = await prisma.organizer.create({
        data: {
            name: 'Chiang Mai'
        }
    })

    const cmuOrg = await prisma.organizer.create({
        data: {
            name: 'Chiang Mai University'
        }
    })

    const camtOrg = await prisma.organizer.create({
        data: {
            name: 'CAMT'
        }
    })

    const responseEvents = await prisma.event.findMany();

    await prisma.event.update({
        where: { id: responseEvents[0].id },
        data: {
            organizer: {
                connect: {
                    id: chiangMaiOrg.id
                }
            }
        }
    })

    addOrganizer(responseEvents[1].id, chiangMaiOrg.id);
    addOrganizer(responseEvents[2].id, cmuOrg.id);
    addOrganizer(responseEvents[3].id, chiangMaiOrg.id);
    addOrganizer(responseEvents[4].id, cmuOrg.id);
    addOrganizer(responseEvents[5].id,camtOrg.id);

    console.log("Database has been initialized with events.")
}

async function addOrganizer(eventId: number, organizerId: number){
    await prisma.event.update({
        where: { id: eventId },
        data: {
            organizer: {
                connect: {
                    id: organizerId
                }
            }
        }
    })
}