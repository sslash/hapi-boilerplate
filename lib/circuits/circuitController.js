'use strict';
const Joi = require('joi');
const CircuitService = require('./CircuitService');
const Boom = require('boom');
const logger = require('../helpers/logger').createLogger(__filename);
const Paging = require('../helpers/paging');


module.exports = function (opts) {
    const circuitService = new CircuitService();

    return {
        post: {
            description: 'Circuit registration',
            validate: {
                payload: {
                    title: Joi.string().required(),
                    moves: Joi.array(),
                    description: Joi.string().required()
                }
            },
            handler: (request, reply) => {
                let title = request.payload.title;
                let description = request.payload.description;
                let moves = request.payload.moves;


                circuitService.create(title, description, moves)
                .then((circuit) => {
                    reply(circuit);
                })
                .catch((err) => {
                    logger.debug('Failed to create circuit ', err);
                    return reply(Boom.forbidden());
                });
            },
            plugins: {
                hal: {
                    embedded: {
                        'circuit': {
                            path: 'items',
                            href: '../{item.id}'
                        }
                    }
                }
            },
            state: {
                parse: false, // parse and store in request.state
                failAction: 'ignore' // may also be 'ignore' or 'log'
            }
        },

        get: {
            description: 'Circuit index',
            handler: (request, reply) => {

                let start = Number(request.query.start) || 0;
                let limit = Number(request.query.limit) || 50;
                let query = request.query.q;

                // TODO: filter in data layer
                circuitService.getAll(start, limit, query)
                .then((circuits) => {
                    let items = circuits.slice(start, start+limit);
                    reply(new Paging(items, start, circuits.length));
                })
                .catch((err) => {
                    return reply(Boom.badImplementation(err));
                });
            },
            plugins: {
                hal: {
                    api: 'cc:circuits',
                    query: '{?start,limit,q}',
                    embedded: {
                        'cc:circuit': {
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
        },

        // FIXME Not a proper REST/HAL resource.
        getTags: {
            description: 'List all searchable tags',
            handler: (request, reply) => {

                // TODO: filter in data layer
                circuitService.getTags()
                .then((tags) => {
                    reply(tags);
                })
                .catch((err) => {
                    return reply(Boom.badImplementation(err));
                });
            },
            state: {
                parse: false, // parse and store in request.state
                failAction: 'ignore' // may also be 'ignore' or 'log'
            }
        },
    }
};
