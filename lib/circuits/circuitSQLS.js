const INSERT = 'INSERT INTO circuits (title, description) VALUES ($1, $2) RETURNING id';
const GET_BY_TITLE = 'SELECT id FROM circuits WHERE title = $1';
const GET_BY_ID = 'SELECT * FROM circuits WHERE id = $1';
const GET_ALL = 'SELECT * FROM circuits';


module.exports = {
    INSERT,
    GET_BY_TITLE,
    GET_BY_ID,
    GET_ALL
};
