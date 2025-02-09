import express, {Request, Response} from 'express';
const app = express();
const port = 3000;

app.get('/test', (req: Request, res:Response) => {
    const id = req.query.id;
    const output = `id: ${id}`;
    res.send(output);
})

app.listen(port, () => {
    console.log('App listening at http://localhost:${port}')
})
