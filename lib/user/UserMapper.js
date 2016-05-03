'use strict';
const _ = require('lodash');

class UserMapper {

    static rowMapper (user) {
        return _.omit(user, ['hash', 'updated', 'created']);
    }

    static multiMapper (users) {
        return users.map(UserMapper.rowMapper);
    }
}

module.exports = UserMapper;
