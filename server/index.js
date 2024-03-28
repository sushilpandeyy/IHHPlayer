import express from "express";
import { getMusic, getsample } from "./Apis/getapis.js";
import { adduser, checkuser } from "./Apis/postapis.js";
import fs from 'fs'
import https from 'https';
import cors from 'cors';

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/api.contactsushil.me/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/api.contactsushil.me/fullchain.pem')
};

async function startServer() {
    try {
        const app = express();
        app.use(cors({
            origin: 'https://ihh.contactsushil.me',
            origin: 'https://ihh.vercel.app'
            }));
        app.use(express.json());
        app.get('/Music', getMusic);
        app.post('/login', checkuser);
        app.post('/add', adduser);
        app.get('/', getsample);
        const server = https.createServer(options, app);
        server.listen(443, () => {
            console.log('Server is running on port 443');
        });
    } catch (error) {
        console.error("Failed to start server:", error);
    }
}

startServer();
