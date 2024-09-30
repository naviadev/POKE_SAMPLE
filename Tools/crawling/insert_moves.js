const { Client } = require('pg');
const fs = require('fs');

const client = new Client({
  user: 'naviadev',
  host: 'localhost',
  database: 'pokesample',
  password: '1020',
  port: 5432,
});

(async () => {
  try {
    await client.connect();
    const data = await fs.promises.readFile('./pokemon_moves.json', 'utf-8');
    const movesData = JSON.parse(data);

    for (const move of movesData) {
      const { name_ko, name_en, type, category, power, pp, accuracy } = move;

      // 중복 여부를 체크하는 쿼리
      const checkQuery = `
        SELECT 1 FROM moves WHERE name_ko = $1 AND name_en = $2;
      `;
      const checkValues = [name_ko, name_en];

      const checkResult = await client.query(checkQuery, checkValues);

      if (checkResult.rows.length === 0) {
        // 중복이 없을 경우 INSERT
        const insertQuery = `
          INSERT INTO moves (name_ko, name_en, type, category, power, pp, accuracy)
          VALUES ($1, $2, $3, $4, $5, $6, $7);
        `;
        const insertValues = [name_ko, name_en, type, category, power, pp, accuracy];
        await client.query(insertQuery, insertValues);
        console.log(`Inserted move: ${name_ko} (${name_en})`);
      } else {
        console.log(`Move already exists: ${name_ko} (${name_en}) - Skipped`);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.end();
  }
})();
