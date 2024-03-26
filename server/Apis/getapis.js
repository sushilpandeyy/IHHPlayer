import { MongoClient } from 'mongodb';
import dotenv from "dotenv";

dotenv.config();
const mongoUrl = process.env.Mongo_url;

export const getMusic = async (req, res) => {
    const client = new MongoClient(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    try {
        await client.connect();
        const database = client.db("IHHPlayer");
        const coll = database.collection("Music");
        const musicResp = await coll.find().limit(10).toArray(); 
        res.status(200).json(musicResp);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    } finally {
        await client.close();
    }
}

export const getsample = async (req, res) => {
    try {
        res.status(200).send("Working");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}
