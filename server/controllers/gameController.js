import pool from '../config/database.js'
import '../config/dotenv.js'

// GET /games - get all games
async function getGames (req, res) {
    try {
        const query = `
        SELECT
            g.*,
            COUNT(i.item_id)::int AS item_count
        FROM games g
        LEFT JOIN items i ON i.game_id = g.game_id
        GROUP BY g.game_id
        ORDER BY g.date_added DESC;
        `
        const result = await pool.query(query)
        return res.status(200).json(result.rows)
    }
    catch (error) {
        return res.status(500).json({ error: `Failed to fetch games: ${error}` })
    }
}

export {
    getGames
}