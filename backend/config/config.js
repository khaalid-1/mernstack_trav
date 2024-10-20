import dotenv from "dotenv";

dotenv.config();

export const config = {
    port : process.env.PORT || 5000,
    mongURL: process.env.MONG_URL,
    secretToken: process.env.JWB_SECRET
}