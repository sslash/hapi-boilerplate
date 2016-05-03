'use strict';
const Bcrypt = require('bcrypt');
const Moment = require('moment');
const Promise = require('bluebird');
const logger = require('../helpers/logger').createLogger(__filename);

function createPasswordSalt (password) {

    return new Promise((resolve, reject) => {
        Bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                logger.error('Failed to generate salt', err);
                return reject(err);
            }

            Bcrypt.hash(password, salt, (hErr, hash) => {
                if (hErr) {
                    logger.error('Failed to create password hash', hErr);
                    return reject(hErr);
                } else {
                    resolve(hash);
                }
            });
        });
    });
}

module.exports = createPasswordSalt;
