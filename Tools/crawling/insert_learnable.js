const { Client } = require('pg');
const fs = require('fs');

// PostgreSQL 데이터베이스 연결 설정
const client = new Client({
  user: 'naviadev',
  host: 'localhost',
  database: 'pokesample',
  password: 'your_password',
  port: 5432,
});

(async () => {
  try {
    await client.connect();
    const data = await fs.promises.readFile('./moves_data.json', 'utf-8');
    const movesData = JSON.parse(data);

    await client.query(`
      CREATE TABLE IF NOT EXISTS pokemon_moves (
        id SERIAL PRIMARY KEY,
        pokedex INT REFERENCES pokemon(pokedex),
        moves_id INT REFERENCES moves(id)
      );
    `);


    let count = 1;
    for (const move of movesData) {
      for (const pokedex of move.learnable_pokemon) {
        const pokedexInt = parseInt(pokedex, 10);
        if (!isNaN(pokedexInt) && pokedexInt > 0) {
          // 데이터 삽입
          await client.query(`
    INSERT INTO pokemon_moves (pokedex, moves_id)
    VALUES ($1, $2)
  `, [pokedexInt, count]);
        } else {
          console.log(`잘못된 pokedex 값: ${pokedex}, 현재 기술 아이디 : ${count}`);
        }
      }
      count++;
    }

    console.log('관계 테이블이 성공적으로 생성되고 데이터가 삽입되었습니다.');
  } catch (error) {
    console.error(error);
  } finally {
    await client.end(); // 연결 종료
  }
})();
