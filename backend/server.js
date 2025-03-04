import express from 'express'
import cors from 'cors'
import "dotenv/config";

import connectDB from './config/mongodb.js';
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 4000;

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(PORT, () => {
    console.log("Server listening on PORT: " + PORT);
});