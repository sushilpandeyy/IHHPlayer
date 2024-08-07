import express from "express";
import { 
    getArtist, 
    getSample, 
    getlatest, 
    gethits,
    getlatestten,
    getprivateplaylist,
    getgenre, 
    getartistlim, 
    getall, 
    getartistmusic, 
    getgenrall, 
    getallwlike,
    searchMusicAndArtists,
    getallwlikelimit } from "./Apis/getapis.js";
import { addartist, adduser, checkuser, addmusic, addlikedmusic, removelikedmusic, requestformusic, Streamscounter} from "./Apis/postapis.js";
import fs from 'fs'
import https from 'https';
import cors from 'cors';

//const options = {
//    key: fs.readFileSync('/etc/letsencrypt/live/api.contactsushil.me/privkey.pem'),
//    cert: fs.readFileSync('/etc/letsencrypt/live/api.contactsushil.me/fullchain.pem')
//};

async function startServer() {
    try {
        const app = express();
        app.use(cors({
            origin: ['https://ihh.contactsushil.me', 
            'https://ihh-player.vercel.app/', 
            'https://ihh-player-git-testing-sushilpandeyys-projects.vercel.app/']
       }));
    //app.use(cors({ origin: 'http://localhost:5173' }));
        
        app.use(express.json());
        app.get('/artist', getArtist);
        app.get('/hits', gethits);
        app.get('/recentlyadded', getlatestten);
        app.get('/allmusic', getall);
        app.get('/latest', getlatest);
        app.get('/artistlimit', getartistlim);
        app.get('/getgenre/:genre', getgenre);
        app.get('/artist/:artistkey', getartistmusic);
        app.get('/getgenreall/:genre', getgenrall);
        app.get('/allmusic/:user', getallwlike);
        app.get('/allmusiclim/:user', getallwlikelimit);
        app.get('/privplay', getprivateplaylist);
        app.post('/addmusic', addmusic);
        app.post('/likemusic', addlikedmusic);
        app.post('/removelike', removelikedmusic);
        app.post('/login', checkuser);
        app.post('/addartist', addartist);
        app.post('/add', adduser);
        app.get('/',getSample);
        app.post('/search',searchMusicAndArtists);
        app.post('/requestviayoutube', requestformusic);
        app.post('/streamcounter', Streamscounter);
        


      //const server = https.createServer(options, app);
      // server.listen(443, () => {
      //     console.log('Server is running on port 443');
        //});
        app.listen(80, ()=> {
            console.log("Running at 80");
        })
    } catch (error) {
        console.error("Failed to start server:", error);
    }
}

startServer();
