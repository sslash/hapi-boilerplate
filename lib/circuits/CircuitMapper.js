'use strict';

class CircuitMapper {

    static rowMapper (user) {
        return user;
    }

    static multiMapper (users) {
        return users.map(CircuitMapper.rowMapper);
    }
}

module.exports = CircuitMapper;
