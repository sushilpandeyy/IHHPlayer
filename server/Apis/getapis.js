import Music from "../models/Music.js";
import { MongoClient } from 'mongodb';
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.Mongo_url;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export const getMusic = async (req, res) => {
    try {
        await client.connect();
        const database = client.db("IHHPlayer");
        const coll = database.collection("Music");
        const Musicresp = await coll.find().toArray(); 
        console.log(Musicresp);
        res.status(200).json(Musicresp);
    } catch (error) {
        console.log(error.message);
        res.status(404).json({ message: error.message });
    } finally {
        // Close the MongoDB connection after fetching data
        await client.close();
    }
}

export const getArtist = async (req, res) => {
    try {
        await client.connect();
        const database = client.db("IHHPlayer");
        const coll = database.collection("Artist");
        const Musicresp = await coll.find().toArray(); 
        console.log(Musicresp);
        res.status(200).json(Musicresp);
    } catch (error) {
        console.log(error.message);
        res.status(404).json({ message: error.message });
    } finally {
        // Close the MongoDB connection after fetching data
        await client.close();
    }
}

export const getAlbum = async (req, res) => {
    try {
        await client.connect();
        const database = client.db("IHHPlayer");
        const coll = database.collection("Album");
        const Musicresp = await coll.find().toArray(); 
        console.log(Musicresp);
        res.status(200).json(Musicresp);
    } catch (error) {
        console.log(error.message);
        res.status(404).json({ message: error.message });
    } finally {
        // Close the MongoDB connection after fetching data
        await client.close();
    }
}

export const getsample = async (req, res) => {
    try {
        res.status(200).message("Working");
    } catch (error) {
        console.log(error.message);
        res.status(404).json({ message: error.message });
    } finally {
        // Close the MongoDB connection after fetching data
        await client.close();
    }
}