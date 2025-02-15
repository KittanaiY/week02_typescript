import express, {Request, Response} from 'express';
import {Event, getAllEvents, getEventByCategory, getEventById, addEvent } from "./services/EventService";


const app = express(); // recieve port 3000
const port = 3000;

app.use(express.json());


app.get('/test', (req: Request, res:Response) => {
    const id = req.query.id;
    const output = `id: ${id}`;
    res.send(output);
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

app.get("/events", (req,res) => {
    if (req.query.category) {
        const category = req.query.category;
        const filteredEvents = getEventByCategory(category as string);
        res.json(filteredEvents);
    } else {
        res.json(getAllEvents);
    }
});

app.get("/events/:id", (req,res) => {
    const id = parseInt(req.params.id); //conv id from req into int
    const event = getEventById(id);
    if (event) {
        res.json(event);
    } else{
        res.status(404).send("Event not found");
    }
})

app.post("/events", (req,res) => {
    const newEvent: Event = req.body;
    addEvent(newEvent);
    res.json(newEvent);
});




