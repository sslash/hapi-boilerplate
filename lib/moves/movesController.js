'use strict';
const Joi = require('joi');
const MoveService = require('./MoveService');
const Boom = require('boom');
const logger = require('../helpers/logger').createLogger(__filename);
const Paging = require('../helpers/paging');
const _ = require('lodash');


module.exports = function (opts) {
    const moveService = new MoveService();

    return {

        get: {
            description: 'Moves index',
            handler: (request, reply) => {

                // TODO: filter in data layer
                moveService.getAll()
                .then((moves) => {
                    reply(moves);
                })
                .catch((err) => {
                    return reply(Boom.badImplementation(err));
                });
            },
            plugins: {
                hal: {
                    api: 'cc:moves',
                    embedded: {
                        'cc:move': {
                            path: 'items',
                            href: './{item.id}'
                        }
                    }
                }
            },
            state: {
                parse: false, // parse and store in request.state
                failAction: 'ignore' // may also be 'ignore' or 'log'
            }
        }
    }
};
