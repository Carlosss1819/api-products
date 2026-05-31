import dotenv from 'dotenv';
dotenv.config();
console.log("MONGODB_URI:", process.env.MONGODB_URI);

import app from "./app.js";
import "./database.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});