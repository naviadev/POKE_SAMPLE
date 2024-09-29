const { Client } = require('pg');
const fs = require('fs').promises; // 파일 시스템 모듈을 사용하여 비동기로 파일을 읽어옴

// PostgreSQL 클라이언트 설정
const client = new Client({
  user: 'naviadev',
  host: 'localhost',
  database: 'pokesample',
  password: '1020',
  port: 5432,
});

// json 파일을 불러와 데이터 삽입 작업 수행
(async () => {
  try {
    // PostgreSQL 연결
    await client.connect();

    // pokemon_moves.json 파일 읽기
    const data = await fs.readFile('./pokemon_moves.json', 'utf-8');

    // JSON 파싱
    const movesData = JSON.parse(data);

    // 데이터 순회하며 INSERT
    for (const move of movesData) {
      const { name_ko, name_en, type, category, power, pp, accuracy } = move;

      // 기존 레코드 확인
      const checkQuery = `
        SELECT 1 FROM Moves WHERE name_ko = $1 AND name_en = $2;
      `;
      const checkValues = [name_ko, name_en];
      const res = await client.query(checkQuery, checkValues);

      // 데이터가 없으면 삽입
      if (res.rows.length === 0) {
        const insertQuery = `
          INSERT INTO Moves (name_ko, name_en, type, category, power, pp, accuracy)
          VALUES ($1, $2, $3, $4, $5, $6, $7);
        `;
        const insertValues = [name_ko, name_en, type, category, power, pp, accuracy];

        await client.query(insertQuery, insertValues);
        console.log(`Inserted move: ${name_ko} (${name_en})`);
      } else {
        console.log(`Move already exists: ${name_ko} (${name_en})`);
      }
    }
  } catch (err) {
    console.error('Error inserting data', err.stack);
  } finally {
    // PostgreSQL 연결 종료
    await client.end();
  }
})();
