import express from "express";
import { getMusic, getsample } from "./Apis/getapis.js";
import { adduser, checkuser } from "./Apis/postapis.js";

async function startServer() {
    try {
        const app = express();
        app.use(express.json());
        app.get('/Music', getMusic);
        app.post('/login', checkuser);
        app.post('/add', adduser);
        app.get('/', getsample);
        app.listen(80, () => {
            console.log('Server is running on port 80');
        });
    } catch (error) {
        console.error("Failed to start server:", error);
    }
}

startServer();
