const { Client } = require('pg');
const pokemon = require('pokemon');
const client = new Client({
  user: 'naviadev',
  host: 'localhost',
  database: 'pokesample',
  password: '1020',
  port: 5432,
});
client.connect()
  .then(() => {
    const insertPromises = [];
    for (let i = 1; i <= 1025; i++) {
      const pokedex = i;
      const name = pokemon.getName(i, 'ko');
      const query = 'INSERT INTO pokemon (pokedex, name) VALUES ($1, $2) ON CONFLICT (pokedex) DO NOTHING;';
      const values = [pokedex, name];
      insertPromises.push(client.query(query, values));
    }
    return Promise.all(insertPromises);
  })
  .then(() => {
    return client.end();
  })
  .catch((err) => {
    client.end();
  });

