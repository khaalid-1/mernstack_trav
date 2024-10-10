import mongoose from "mongoose";

import {config} from "./config.js"


export const connectDB = async()=>{

    try {
        const conn = await mongoose.connect(config.mongURL);
        console.log(`Db connection success ${conn.connection.host}`.yellow)
    } catch (error) {
        console.error("connection error ".error);
        process.exit(1);
    }
}