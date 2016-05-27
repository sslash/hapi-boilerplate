'use strict';
const hoek = require('hoek');
const halacious = require('halacious');
const URI = require('urijs');

function Paging(items, start, total) {
    this.items = items || [];
    this.start = start || 0;
    this.count = this.items.length;
    this.total = total || this.items.count;
}

Paging.prototype.toHal = function(rep, done) {
    let limit = Number(rep.request.query.limit) || 10;
    let uri = new URI(rep.self);
    let prev = Math.max(0, this.start - limit);
    let next = Math.min(this.total, this.start + limit);

    let query = uri.search(true);

    if (this.start > 0) {
        rep.link('prev', uri.search(hoek.applyToDefaults(query, { start: prev, limit: limit })).toString());
    }
    if (this.start + this.count < this.total) {
        rep.link('next', uri.search(hoek.applyToDefaults(query, { start: next, limit: limit })).toString());
    }
    done();
};

module.exports = Paging;
