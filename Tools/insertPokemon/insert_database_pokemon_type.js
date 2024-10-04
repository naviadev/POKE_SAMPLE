const { Client } = require("pg");
const fs = require('fs');
const jsonData = require('./type_insert.json')

const client = new Client({
  user: 'naviadev',
  host: 'localhost',
  database: 'pokesample',
  password: '1020',
  port: 5432,
})

const insertPokemonType = async () => {
  try {
    await client.connect();

    for (const record of jsonData) {
      const pokedex = record.pokedex;
      for (let i = 0; i < record.types.length; i++) {
        const query = `insert into pokemon_types (pokedex, type_id) values ($1, $2)`
        const values = [pokedex, record.types[i]];
        await client.query(query, values);
        console.log('123')
      }
    }

  } catch {

  }
};

insertPokemonType();