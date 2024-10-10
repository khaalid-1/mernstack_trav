import express from "express";
import colors from "colors";
import { config } from "./config/config.js";
import { connectDB } from "./config/db.js";
import router from "./router/goalRouter.js";
const app = express();
// middlewares


app.use(express.json())
app.use(express.urlencoded({extended : false}))
connectDB();



app.use("/api/v1/goals",router)


app.listen(config.port, () => {
  console.log(`Server is running 🚀🚀🚀 on port ${config.port}`.cyan);
});
