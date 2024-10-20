export interface Moves {
  id: number; 
  name_ko: string;
  type: string;                // 'type'은 기술의 타입을 나타내며 string 타입
  category: string;            // 'category'는 기술의 카테고리를 나타내며 string 타입
  power?: number;              // 'power'는 기술의 힘을 나타내며 optional number 타입
  pp: number;                  // 'pp'는 필수 필드로 integer 타입
  accuracy?: number;           // 'accuracy'는 기술의 명중률을 나타내며 optional number 타입
  
}
