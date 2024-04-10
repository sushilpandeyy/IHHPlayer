import express from "express";
import { 
    getArtist, 
    getSample, 
    getlatest, 
    getgenre, 
    getartistlim, 
    getall, 
    getartistmusic, 
    getgenrall, 
    getallwlike,
    getallwlikelimit } from "./Apis/getapis.js";
import { addartist, adduser, checkuser, addmusic, addlikedmusic, removelikedmusic} from "./Apis/postapis.js";
import fs from 'fs'
import https from 'https';
import cors from 'cors';

async function startServer() {
    try {
        const app = express();
        app.use(cors({ origin: 'http://localhost:5173' }));
        
        app.use(express.json());
        app.get('/artist', getArtist);
        app.get('/allmusic', getall);
        app.get('/allmusic/:user', getallwlike);
        app.get('/latest', getlatest);
        app.get('/artistlimit', getartistlim);
        app.get('/getgenre/:genre', getgenre);
        app.get('/getgenreall/:genre', getgenrall);
        app.get('/artist/:artistkey', getartistmusic);
        app.post('/likemusic', addlikedmusic);
        app.post('/removelike', removelikedmusic);
        app.get('/allmusiclim/:user', getallwlikelimit);
        app.post('/addmusic', addmusic);
        app.post('/login', checkuser);
        app.post('/addartist', addartist);
        app.post('/add', adduser);
        app.get('/',getSample);
      
      app.listen(3000, ()=> {
          console.log("Running at 3000");
      })
    } catch (error) {
        console.error("Failed to start server:", error);
    }
}

startServer();
