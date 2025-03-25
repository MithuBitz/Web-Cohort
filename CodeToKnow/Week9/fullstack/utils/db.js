import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect = () =>
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(console.log("Connected to DB"))
    .catch((e) => {
      console.log("Error connection to DB");
    });

export { dbConnect };
