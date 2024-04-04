import axios from 'axios';
import pkg from 'pg';
import { hash, compare } from 'bcrypt'; 
const { Pool } = pkg;
import dotenv from "dotenv";

dotenv.config();

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

export const addmusic = async (req, res) => {
  try {
    let { artist, artistKey, genre, img, key, src, title, album } = req.body;
    const result = await pool.query(
        'INSERT INTO music (artist, artistkey, genre, img, key, src, title, album) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
        [artist, [artistKey], [genre], img, key, src, title, album]
    );
    const artistupdate = await pool.query(
      'UPDATE music SET artistkey = $1 WHERE key = $2',
      [[artistKey], key]
    );    
    res.status(200).send("Music Inserted");
} catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send(error);
}
};


export const adduser = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    const hashedPassword = await hash(password, 10); 
    const result = await pool.query(
      'INSERT INTO Users (name, email, password) VALUES ($1, $2, $3)', 
      [name, email, hashedPassword]
    );
    const result2 = await pool.query(
      'SELECT * FROM Users WHERE email = $1',
     [email]
     ); 
    res.status(200).send(result2.rows[0]);
  } catch (error) {
    console.error('Error inserting user:', error);
    res.status(500).send('Error inserting user');
  }
}

export const checkuser = async (req, res) => {
    try{
        let {email, password} = req.body;

        const result = await pool.query(
            'SELECT * FROM Users WHERE email = $1',
      [email]
        );

        if(result.rows.length == 0){
            return res.status(404).send('User not found');
        }
        const user = result.rows[0];
        const passwordm = await compare(password, user.password);
        if (!passwordm) {
            return res.status(401).send('Incorrect password');
          }
         res.status(200).send(user);
        } catch (error) {
          console.error('Error logging in:', error);
          res.status(500).send('Error logging in');
        }
      };

export const addartist = async (req, res) => {
  try{
    let {Artistkey, img, name} = req.body;
    const result = await pool.query(
      'INSERT INTO Artist (Artistkey, img, name) VALUES ($1, $2, $3)', 
      [Artistkey, img, name]
    );
    res.status(200).send("Artist Inserted");
  }
  catch (error){
    console.error('Error logging in:', error);
    res.status(500).send(error);
  }
};