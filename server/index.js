import express from "express";
import { MongoClient, ServerApiVersion } from 'mongodb';
import { artist } from "./data/newalb.js";
import helmet from "helmet";
import cors from "cors";
import { getMusic, getAlbum, getArtist, getsample } from "./Apis/getapis.js";


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
        //const database = client.db('IHHPlayer');
        //const Music = database.collection("Artist");
        //const response = await Music.insertMany(artist);
        //console.log(response);
        //console.log("Pinged your deployment. You successfully connected to MongoDB!");
        const app = express();
        app.use(express.json());
        app.use(helmet());
        app.use(cors());
        app.get('/Music', getMusic);
        app.get('/Album', getAlbum);
        app.get('/Artist', getArtist);
        app.get('/', getsample);
        app.listen(80, () => {
            console.log('Server is running on port 3000');
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}

startServer();
