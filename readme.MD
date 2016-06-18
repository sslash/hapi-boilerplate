### Circuits - A Hapi.js boilerplate
The name is totally random.
This boilerplate has:
* Hapi.js
* Postgres (pg-postgres, migrations)
* HAL
* A somewhat oppinnionated structure
* ES6 (requires Node 5)

### Get started
* Install postgres
* Install Node.js
* `npm install`
* `cat db/init.sql | psql`
* `npm run db:migrate:up`

### Postgres
* create migration: (assuming you have `npm install db-migrate -g`) `db-migrate --env test --migrations-dir=./db/.migrations --config db/database.json create <name>`


### Dev
`npm run dev` to start Hapi application server
`npm run webpack` in another terminal session to start webpack dev server with hot module reloading


### prod
`npm run build` to generate config files and webpack assets. This means we don't need to run webpack dev server in production.
`npm start` to start up node
Visit http://localhost:2000 (note the port is different from dev)