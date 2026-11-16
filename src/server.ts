import express, {Request, Response} from "express";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req:Request, res:Response) => {
    res.status(200).json({ movie: "The Hunger Games"});
});   

app.listen(port, () => {
    console.log(`🔥Server is running on port http://localhost:${port}`);
});