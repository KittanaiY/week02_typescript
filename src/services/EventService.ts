export function getEventByCategory(category:string): Event[] {
    const filteredEvents = events.filter((event)=> event.category === category);
    return filteredEvents;
}

export function getAllEvents() : Event[] {
    return events;
}

export function getEventById(id: number): Event | undefined {
    return events.find((event) => event.id === id);
}

export function addEvent(newEvent: Event) : Event {
    newEvent.id = events.length + 1;
    events.push(newEvent);
    return newEvent;
}

export interface Event{
    id: number;
    category: string;
    title: string;
    description: string;
    location: string;
    date: string;
    time: string;
    petsAllowed: boolean;
    organizer: string;
}

const events: Event[] = [
    {
        id: 1,
        category: "Music",
        title: "Concert",
        description: "A live concert",
        location: "London",
        date: "2021-07-01",
        time: "19:00",
        petsAllowed: false,
        organizer: "Live Nation",
    },
    {
        id: 2,
        category: "Art",
        title: "Art Exhibition",
        description: "An exhibition of modern art",
        location: "New York",
        date: "2021-08-15",
        time: "10:00",
        petsAllowed: true,
        organizer: "Art Gallery",
    },
    {
        id: 3,
        category: "Technology",
        title: "Tech Conference",
        description: "A conference on the latest in tech",
        location: "San Francisco",
        date: "2021-09-10",
        time: "09:00",
        petsAllowed: false,
        organizer: "Tech World",
    },
    {
        id: 4,
        category: "Food",
        title: "Food Festival",
        description: "A festival with food from around the world",
        location: "Paris",
        date: "2021-10-05",
        time: "12:00",
        petsAllowed: true,
        organizer: "Foodies United",
    },
    {
        id: 5,
        category: "Sports",
        title: "Marathon",
        description: "A city-wide marathon",
        location: "Boston",
        date: "2021-11-20",
        time: "07:00",
        petsAllowed: false,
        organizer: "Marathon Inc.",
    },
    {
        id: 6,
        category: "Education",
        title: "Science Fair",
        description: "A fair showcasing science projects",
        location: "Chicago",
        date: "2021-12-01",
        time: "10:00",
        petsAllowed: true,
        organizer: "Science Club",
    },
    {
        id: 7,
        category: "Literature",
        title: "Book Reading",
        description: "A reading of a new book by the author",
        location: "Seattle",
        date: "2022-01-15",
        time: "14:00",
        petsAllowed: false,
        organizer: "Book Lovers",
    }
];