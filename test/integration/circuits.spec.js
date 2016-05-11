const Assert = require('chai').assert;
const Parameters = require('../../config/parameters');
const Server = require('../../config/server');
const Superagent = require('superagent');

const _serverPath = 'http://localhost:' + Parameters.server.port;

describe('circuits controller', () => {

    before((done) => {
        // User.findOne({email: _facticeUser.email}, (err, user) => {
        //     if (err) {
        //         throw err;
        //     }
        //     if (user) {
        //         user.remove((err) => {
        //             if (err) {
        //                 throw err;
        //             }
        //             return done();
        //         })
        //     } else {
        //         return done();
        //     }
        // });
        done();
    });

    beforeEach((done) => {
        Server.start((err) => {
            return done(err);
        });
    });

    afterEach((done) => {
        Server.stop((err) => {
            return done(err);
        });
   });

   after((done) => {
        //    User.findOne({email: _facticeUser.email}, (err, user) => {
        //        if (err) {
        //            throw err;
        //        }
        //        if (user) {
        //            user.remove((err) => {
        //                if (err) {
        //                    throw err;
        //                }
        //                return done();
        //            })
        //        } else {
        //            return done();
        //        }
        //    });
        done();
   });

    xdescribe('GET /', () => {
        it('should get all', (done) => {
            Superagent.get(_serverPath + '/api/circuits')
            .end((err, res) => {
                if (err) {
                    throw err;
                }
                Assert.equal(res.status, 200);
                return done();
            });
        });
    });

    describe('POST /', () => {
        it('should create', (done) => {

            const circuit = {
                title: 'Circuit of  death',
                description: 'Heavy AF',
                moves: [
                    {
                        title: 'Bench press',
                        description: 'Lie on a bench and kill',
                        circuitMoveDescription: 'Do 8 reps'
                    },
                    {
                        title: 'Jump squats',
                        description: 'Squats and jump',
                        circuitMoveDescription: 'Do 20 reps'
                    }
                ]
            }

            Superagent.post(_serverPath + '/api/circuits')
            .send(circuit)
            .end((err, res) => {
                if (err) {
                    throw err;
                }
                Assert.equal(res.status, 200);
                return done();
            });
        });
    });
});
