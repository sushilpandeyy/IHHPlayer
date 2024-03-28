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

export const adduser = async (req, res) => {
  try {
    let { name, email, phone_number, password } = req.body;

    const hashedPassword = await hash(password, 10); 
    const result = await pool.query(
      'INSERT INTO Users (name, email, phone_number, password) VALUES ($1, $2, $3, $4)',
      [name, email, phone_number, hashedPassword]
    );

    res.status(200).send('User inserted successfully');
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