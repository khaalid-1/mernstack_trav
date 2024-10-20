
import jwt from "jsonwebtoken";
import asycnHandler from "express-async-handler";
import { config } from "../config/config.js";
import User from "../model/userModel.js";



export const protectRoute = asycnHandler(async (req, res, next) => {
    // Get token from the Authorization header
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token)
    if (!token) {
        res.status(401);  // Unauthorized
        throw new Error("No token, no authorization");
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, config.secretToken);

        // Find the user based on the decoded token payload (assuming 'id' is stored in the token)
        req.user = await User.findById(decoded.id);

        if (!req.user) {
            res.status(404);  // Not Found
            throw new Error("User not found");
        }

        // Proceed to the next middleware
        next();

    } catch (error) {
        res.status(401);  // Unauthorized
        throw new Error("Token is not valid or has expired");
    }
});