const INSERT = 'INSERT INTO users (email, hash) VALUES ($1, $2) RETURNING id';
const GET_BY_EMAIL = 'SELECT id FROM users WHERE email = $1';
const GET_BY_ID = 'SELECT * FROM users WHERE id = $1';
const GET_ALL = 'SELECT * FROM users';


module.exports = {
    INSERT,
    GET_BY_EMAIL,
    GET_BY_ID,
    GET_ALL
};
