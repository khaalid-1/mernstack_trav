import express from "express";
import colors from "colors";
import { config } from "./config/config.js";
import { connectDB } from "./config/db.js";
import goalRouter from "./router/goalRouter.js";
import userRouter from "./router/userRouter.js";
import { errorHandler } from "./middleware/errorHandler.js";
const app = express();
// middlewares


app.use(express.json())
app.use(express.urlencoded({extended : false}))
connectDB();



app.use("/api/v1/goals",goalRouter)
app.use("/api/v1/users",userRouter)

app.use(errorHandler)
app.listen(config.port, () => {
  console.log(`Server is running 🚀🚀🚀 on port ${config.port}`.cyan);
});
