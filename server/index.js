import express from "express";
import { MongoClient, ServerApiVersion } from 'mongodb';
import { artist } from "./data/newalb.js";
import helmet from "helmet";
import cors from "cors";
import { getMusic, getsample } from "./Apis/getapis.js";
import {adduser, checkuser} from "./Apis/postapis.js"

//const client = new MongoClient(uri,  {
//    serverApi: {
//        version: ServerApiVersion.v1,
//        strict: true,
//        deprecationErrors: true,
//    }
//}
//);

async function startServer() {
    try {
        const app = express();
        app.use(express.json());
        app.use(helmet());
        app.use(cors());
        app.get('/Music', getMusic);
        app.post('/login', checkuser);
        app.post('/add', adduser);
        app.get('/', getsample);
        app.listen(443, () => {
            console.log('Server is running on port 443');
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}

startServer();
