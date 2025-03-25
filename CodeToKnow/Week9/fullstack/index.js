import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { dbConnect } from "./utils/db.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

//Set up a middleware for cors
app.use(
  cors({
    origin: "http://localhost:4000",
    methods: ["GET", "POST", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Connect with the db
dbConnect();

app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Cohort!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
