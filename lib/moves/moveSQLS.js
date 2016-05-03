const INSERT = 'INSERT INTO moves (title, description) VALUES ($1, $2) RETURNING id';
const GET_BY_TITLE = 'SELECT id FROM moves WHERE title = $1';
const GET_BY_ID = 'SELECT * FROM moves WHERE id = $1';
const GET_ALL = 'SELECT * FROM moves';


module.exports = {
    INSERT,
    GET_BY_TITLE,
    GET_BY_ID,
    GET_ALL
};
