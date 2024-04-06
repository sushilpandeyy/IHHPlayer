import pkg from 'pg';
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
    user: process.env.POST_USER,
    host: process.env.POST_HOST,
    database: process.env.POST_DATA,
    password: process.env.POST_PASSWORD,
    port: process.env.POST_PORT, 
    ssl: {
      rejectUnauthorized: false
    }
});

export const getArtist = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM artist');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching artist data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getlatest = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM music LIMIT 10')
        req.status(200).json(result.rows);
    }
    catch(error){
        console.log('Error in getting latest: ',error);
        res.status(500).json({error: 'Internal Server Error'});
    }
}

export const getSample = async (req, res) => {
    try {
        res.status(200).send("Working");
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
