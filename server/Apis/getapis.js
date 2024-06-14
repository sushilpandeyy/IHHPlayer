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

export const getall = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM music')
        res.status(200).json(result.rows);
    }
    catch(error){
        console.log('Error in getting latest: ',error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getlatestten = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM music ORDER BY date_added desc LIMIT 10;")
        res.status(200).json(result.rows);
    }
    catch(error){
        console.log('Error in getting latest: ',error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const gethits = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM music ORDER BY streams desc LIMIT 10;")
        res.status(200).json(result.rows);
    }
    catch(error){
        console.log('Error in getting latest: ',error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


export const getallwlike = async (req, res) => {
    const user = req.params.user;
    try {
        const result = await pool.query(`
    SELECT
        m.*,
        CASE
            WHEN lm.songid IS NOT NULL THEN TRUE
            ELSE FALSE
        END AS is_liked
    FROM
        Music m
    LEFT JOIN
        LikedMusic lm ON m.key = lm.songid AND lm.userid = $1;
`, [user]);
        res.status(200).json(result.rows);
    }
    catch(error){
        console.log('Error in getting latest: ',error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


export const getallwlikelimit = async (req, res) => {
    const user = req.params.user;
    try {
        const result = await pool.query(`
    SELECT
        m.*,
        CASE
            WHEN lm.songid IS NOT NULL THEN TRUE
            ELSE FALSE
        END AS is_liked
    FROM
        Music m
    LEFT JOIN
        LikedMusic lm ON m.key = lm.songid AND lm.userid = $1
        LIMIT 10;
`, [user]);
        res.status(200).json(result.rows);
    }
    catch(error){
        console.log('Error in getting latest: ',error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getlatest = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM music LIMIT 10')
        res.status(200).json(result.rows);
    }
    catch(error){
        console.log('Error in getting latest: ',error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getartistlim = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM artist LIMIT 10');
        res.status(200).json(result.rows);
    }
    catch(error){
        console.log('Error in getting latest: ',error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const searchMusicAndArtists = async (req, res) => {
    const { searchQuery } = req.body;  
    try {
        const musicResult = await pool.query(`
            SELECT *
            FROM music
            WHERE title ILIKE $1
            LIMIT 10
        `, [`%${searchQuery}%`]);  
        
        const artistResult = await pool.query(`
            SELECT *
            FROM artist
            WHERE name ILIKE $1
            LIMIT 10
        `, [`%${searchQuery}%`]);  
        
        res.status(200).json({ music: musicResult.rows, artists: artistResult.rows });
    } catch (error) {
        console.error('Error in searching music and artists: ', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getgenre = async (req, res) => {
    try {
        const genre = req.params.genre;
        const result = await pool.query('SELECT * FROM music WHERE genre @> ARRAY[$1]::varchar[] LIMIT 10;', [genre])
        res.status(200).json(result.rows);
    }
    catch(error){
        console.log('Error in getting latest: ',error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getgenrall = async (req, res) => {
    try {
        const genre = req.params.genre;
        const result = await pool.query('SELECT * FROM music WHERE genre @> ARRAY[$1]::varchar[]', [genre])
        res.status(200).json(result.rows);
    }
    catch(error){
        console.log('Error in getting latest: ',error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getartistmusic = async (req, res) => {
    try {
        const artistkey = req.params.artistkey;
        const result = await pool.query('SELECT * FROM music WHERE artistkey @> ARRAY[$1]::varchar[]', [artistkey])
        res.status(200).json(result.rows);
    }
    catch(error){
        console.log('Error in getting latest: ',error);
        res.status(500).json({ error: 'Internal Server Error' });
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

export const getprivateplaylist = async (req, res) => {
    try{
        const {userid} = req.body;
        const result = await pool.query("SELECT * FROM playlists WHERE userid = $1 AND visbility='private'", [userid]);
        res.status(200).json(result.rows);
    }
    catch (error){
        console.log('Error:',error);
        res.status(500).json({error: 'Internal Server Error'})
    }
} 