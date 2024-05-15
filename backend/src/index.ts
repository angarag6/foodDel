import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDatabase } from "./utils/db";
import { auth } from "./routers/user";
import { order } from "./routers/order";
import { food } from "./routers/food";
import { category } from "./routers/category";

dotenv.config();
const PORT = process.env.PORT || 8000;

const start = () => {
    connectDatabase();
    const app = express();
    const PORT = 8000;
    app.use(express.json());
    app.use(cors());
    app.use("/", auth)
    app.use('/order',order);
    app.use('/food',food);
    app.use('/category',category);

    app.get("/", (req, res) => {
        res.status(200).send({ success: true, msg: "Working" });
    });

    app.listen(PORT, () => {
        console.log("Server is running");
    });
};
start();