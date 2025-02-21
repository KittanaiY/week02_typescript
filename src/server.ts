import express, {Request, Response} from 'express';
import { getAllEvents, getEventByCategory, getEventById, addEvent } from "./services/EventService";
import type { Event } from './models/Event';
import multer from 'multer';
import { uploadFile } from './services/UploadFileService';

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

app.get("/events", async(req,res) => {
    if (req.query.category) {
        const category = req.query.category;
        const filteredEvents =await getEventByCategory(category as string);
        res.json(filteredEvents);
    } else {
        res.json(await getAllEvents());
    }
});

app.get("/events/:id", async(req,res) => {
    const id = parseInt(req.params.id); //conv id from req into int
    const event =await getEventById(id);
    if (event) {
        res.json(event);
    } else{
        res.status(404).send("Event not found");
    }
})

app.post("/events", async(req,res) => {
    const newEvent: Event = req.body;
    await addEvent(newEvent);
    res.json(newEvent);
});

const upload = multer({ storage: multer.memoryStorage() });

app.post('/upload', upload.single('file'), async (req: any, res: any) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).send('No file uploaded.');
        }

        const bucket = 'images';
        const filePath = `uploads`;

        const ouputUrl = await uploadFile(bucket, filePath, file);
        res.status(200).send(ouputUrl);
    } catch (error) {
        res.status(500).send('Error uploading file.');
    }
});
