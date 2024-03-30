import express from "express";
import { getMusic, getsample } from "./Apis/getapis.js";
import { addartist, adduser, checkuser } from "./Apis/postapis.js";
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
            origin: ['https://ihh.contactsushil.me', 'https://ihh-player.vercel.app/']
        }));
        
        app.use(express.json());
        app.get('/Music', getMusic);
        app.post('/login', checkuser);
        app.post('/addartist', addartist);
        app.post('/add', adduser);
        app.get('/', getsample);
        const server = https.createServer(options, app);
        server.listen(443, () => {
            console.log('Server is running on port 443');
        });
       // app.listen(3000, ()=> {
       //     console.log("Running at 3000");
       // })
    } catch (error) {
        console.error("Failed to start server:", error);
    }
}

startServer();
