const GET_BASE = `SELECT c.id AS c_id, c.title AS c_title, c.description AS c_description,
m.title as m_title, m.description as m_description, cm.description as cm_description
FROM circuits c
JOIN circuit_move cm ON cm.circuit_id = c.id
JOIN moves m ON m.id = cm.move_id;
`;

const INSERT = 'INSERT INTO circuits (title, description) VALUES ($1, $2) RETURNING id';
const GET_BY_TITLE = 'SELECT id FROM circuits WHERE title = $1';
const INSERT_CIRCUIT_MOVE = 'INSERT INTO circuit_move (circuit_id, move_id, description) VALUES ($1, $2, $3)';
const GET_ALL = GET_BASE;
const GET_BY_ID = `${GET_BASE} WHERE c.id = $1`;
const GET_STRIPPED_BY_ID = 'SELECT * FROM circuits WHERE id = $1';


module.exports = {
    INSERT,
    GET_BY_TITLE,
    GET_BY_ID,
    GET_ALL,
    INSERT_CIRCUIT_MOVE,
    GET_STRIPPED_BY_ID
};
