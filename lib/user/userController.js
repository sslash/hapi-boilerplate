'use strict';
const Joi = require('joi');
const UserService = require('./UserService');
const Boom = require('boom');
const logger = require('../helpers/logger').createLogger(__filename);
const Paging = require('../helpers/Paging');


module.exports = function (opts) {
    const userService = new UserService();

    return {
        post: {
            description: 'User registration',
            validate: {
                payload: {
                    email: Joi.string().email().required(),
                    password: Joi.string().required()
                }
            },
            handler: (request, reply) => {
                let email = request.payload.email;
                let password = request.payload.password;

                userService.create(email, password)
                .then((user) => {
                    reply(user);
                })
                .catch((err) => {
                    logger.debug('Failed to create user ', err);
                    return reply(Boom.forbidden());
                });
            },
            plugins: {
                hal: {
                    embedded: {
                        'user': {
                            path: 'user',
                            href: '../{item.id}'
                        }
                    }
                }
            }
        },


        get: {
            description: 'User index',
            handler: (request, reply) => {

                let start = Number(request.query.start) || 0;
                let limit = Number(request.query.limit) || 10;

                // TODO: filter in data layer
                userService.getAll(start, limit)
                .then((users) => {
                    let items = users.slice(start, start+limit);
                    reply(new Paging(items, start, users.length));
                })
                .catch((err) => {
                    return reply(Boom.badImplementation(err));
                });
            },
            plugins: {
                hal: {
                    api: 'cc:users',
                    query: '{?start,limit,q}',
                    embedded: {
                        'cc:user': {
                            path: 'items',
                            href: './{item.id}'
                        }
                    }
                }
            }
        }
    }
};
