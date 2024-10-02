const { Client } = require('pg');


const item = [
  { label: '광각렌즈', value: 0 }, // Wide Lens
  { label: '달인의띠', value: 1 }, // Expert Belt
  { label: '메트로놈', value: 2 }, // Metronome
  { label: '박식안경', value: 3 }, // Wise Glasses
  { label: '생명의구슬', value: 4 }, // Life Orb
  { label: '초점렌즈', value: 5 }, // Scope Lens
  { label: '파괴의유전자', value: 6 }, // Berserk Gene
  { label: '포커스렌즈', value: 7 }, // Zoom Lens
  { label: '힘의머리띠', value: 8 }, // Muscle Band
  { label: '뜨거운바위', value: 9 }, // Heat Rock
  { label: '보송보송바위', value: 10 }, // Smooth Rock
  { label: '차가운바위', value: 11 }, // Icy Rock
  { label: '축축한바위', value: 12 }, // Damp Rock
  { label: '빛의점토', value: 13 }, // Light Clay
  { label: '끈기갈고리손톱', value: 14 }, // Grip Claw
  { label: '조임밴드', value: 15 }, // Binding Band
  { label: '속임수주사위', value: 16 }, // Loaded Dice
  { label: '구애머리띠', value: 17 }, // Choice Band
  { label: '구애스카프', value: 18 }, // Choice Scarf
  { label: '구애안경', value: 19 }, // Choice Specs
  { label: '기합의띠', value: 20 }, // Focus Sash
  { label: '기합의머리띠', value: 21 }, // Focus Band
  { label: '맹독구슬', value: 22 }, // Toxic Orb
  { label: '화염구슬', value: 23 }, // Flame Orb
  { label: '끈적끈적바늘', value: 24 }, // Sticky Barb
  { label: '검은철구', value: 25 }, // Iron Ball
  { label: '겨냥표적', value: 26 }, // Ring Target
  { label: '아름다운허물', value: 27 }, // Shed Shell
  { label: '연막탄', value: 28 }, // Smoke Ball
  { label: '탈출버튼', value: 29 }, // Eject Button
  { label: '탈출팩', value: 30 }, // Eject Pack
  { label: '검은오물', value: 31 }, // Black Sludge
  { label: '먹다남은음식', value: 32 }, // Leftovers
  { label: '조개껍질방울', value: 33 }, // Shell Bell
  { label: '큰뿌리', value: 34 }, // Big Root
  { label: '느림보꼬리', value: 35 }, // Lagging Tail
  { label: '선제공격손톱', value: 36 }, // Quick Claw
  { label: '멘탈허브', value: 37 }, // Mental Herb
  { label: '파워풀허브', value: 38 }, // Power Herb
  { label: '하양허브', value: 39 }, // White Herb
  { label: '흉내허브', value: 40 }, // Mirror Herb
  { label: '그래스시드', value: 41 }, // Grassy Seed
  { label: '미스트시드', value: 42 }, // Misty Seed
  { label: '사이코시드', value: 43 }, // Psychic Seed
  { label: '일렉트릭시드', value: 44 }, // Electric Seed
  { label: '반짝가루', value: 45 }, // Bright Powder
  { label: '부적금화', value: 46 }, // Amulet Coin
  { label: '빨간실', value: 47 }, // Destiny Knot
  { label: '가벼운돌', value: 48 }, // Float Stone
  { label: '울퉁불퉁멧', value: 49 }, // Rocky Helmet
  { label: '레드카드', value: 50 }, // Red Card
  { label: '풍선', value: 51 }, // Air Balloon
  { label: '방진고글', value: 52 }, // Safety Goggles
  { label: '구근', value: 53 }, // Absorb Bulb
  { label: '충전지', value: 54 }, // Cell Battery
  { label: '눈덩이', value: 55 }, // Snowball
  { label: '돌격조끼', value: 56 }, // Assault Vest
  { label: '빛이끼', value: 57 }, // Luminous Moss
  { label: '약점보험', value: 58 }, // Weakness Policy
  { label: '그라운드코트', value: 59 }, // Terrain Extender
  { label: '방호패드', value: 60 }, // Protective Pads
  { label: '주눅구슬', value: 61 }, // Adrenaline Orb
  { label: '만능우산', value: 62 }, // Utility Umbrella
  { label: '목스프레이', value: 63 }, // Throat Spray
  { label: '통굽부츠', value: 64 }, // Heavy-Duty Boots
  { label: '허탕보험', value: 65 }, // Blunder Policy
  { label: '룸서비스', value: 66 }, // Room Service
  { label: '펀치글러브', value: 67 }, // Punching Glove
  { label: '특성가드', value: 68 }, // Ability Shield
  { label: '클리어참', value: 69 }, // Clear Amulet
  { label: '은밀망토', value: 70 }, // Covert Cloak
  { label: '부스트에너지', value: 71 }, // Booster Energy
  { label: '진화의휘석', value: 72 },
  { label: '전기구슬', value: 73 },
  { label: '굵은뼈', value: 74 },
  { label: '대파', value: 75 },
  { label: '심해의이빨', value: 76 },
  { label: '심해의비늘', value: 77 },
  { label: '마음의물방울', value: 78 },
  { label: '금강옥', value: 79 },
  { label: '큰금강옥', value: 80 },
  { label: '백옥', value: 81 },
  { label: '큰백옥', value: 82 },
  { label: '백금옥', value: 83 },
  { label: '큰백금옥', value: 84 },
  { label: '카세트', value: 85 },
  { label: '메모리', value: 86 },
  { label: '녹슨검', value: 87 },
  { label: '녹슨방패', value: 88 },
  { label: '화덕의가면', value: 89 },
  { label: '우물의가면', value: 90 },
  { label: '주춧돌의가면', value: 91 },
  { label: '기적의씨', value: 92 },
  { label: '버치열매', value: 93 }, // 마비 치료
  { label: '유루열매', value: 94 }, // 잠듦 치료
  { label: '복슝열매', value: 95 }, // 독 치료
  { label: '복분열매', value: 96 }, // 화상 치료
  { label: '배리열매', value: 97 }, // 얼음 치료
  { label: '시몬열매', value: 98 }, // 혼란 치료
  { label: '리샘열매', value: 99 }, // 모든 상태이상 치료
  { label: '과사열매', value: 100 }, // 기술 1개 PP 10 회복
  { label: '오랭열매', value: 101 }, // HP 10 회복
  { label: '자뭉열매', value: 102 }, // HP 25% 회복
  { label: '무화열매', value: 103 }, // HP 1/4 이하일 시 1/3 회복 + 매운맛 싫어할 시 혼란
  { label: '위키열매', value: 104 }, // HP 1/4 이하일 시 1/3 회복 + 떫은맛 싫어할 시 혼란
  { label: '마고열매', value: 105 }, // HP 1/4 이하일 시 1/3 회복 + 단맛 싫어할 시 혼란
  { label: '아바열매', value: 106 }, // HP 1/4 이하일 시 1/3 회복 + 쓴맛 싫어할 시 혼란
  { label: '파야열매', value: 107 }, // HP 1/4 이하일 시 1/3 회복 + 신맛 싫어할 시 혼란
  { label: '오카열매', value: 129 }, // 효과가 굉장한 불꽃 타입 기술 피해량 50% 감소
  { label: '꼬시개열매', value: 130 }, // 효과가 굉장한 물 타입 기술 피해량 50% 감소
  { label: '초나열매', value: 131 }, // 효과가 굉장한 전기 타입 기술 피해량 50% 감소
  { label: '린드열매', value: 132 }, // 효과가 굉장한 풀 타입 기술 피해량 50% 감소
  { label: '플카열매', value: 133 }, // 효과가 굉장한 얼음 타입 기술 피해량 50% 감소
  { label: '로플열매', value: 134 }, // 효과가 굉장한 격투 타입 기술 피해량 50% 감소
  { label: '으름열매', value: 135 }, // 효과가 굉장한 독 타입 기술 피해량 50% 감소
  { label: '슈캐열매', value: 136 }, // 효과가 굉장한 땅 타입 기술 피해량 50% 감소
  { label: '바코열매', value: 137 }, // 효과가 굉장한 비행 타입 기술 피해량 50% 감소
  { label: '야파열매', value: 138 }, // 효과가 굉장한 에스퍼 타입 기술 피해량 50% 감소
  { label: '리체열매', value: 139 }, // 효과가 굉장한 벌레 타입 기술 피해량 50% 감소
  { label: '루미열매', value: 140 }, // 효과가 굉장한 바위 타입 기술 피해량 50% 감소
  { label: '수불열매', value: 141 }, // 효과가 굉장한 고스트 타입 기술 피해량 50% 감소
  { label: '하반열매', value: 142 }, // 효과가 굉장한 드래곤 타입 기술 피해량 50% 감소
  { label: '마코열매', value: 143 }, // 효과가 굉장한 악 타입 기술 피해량 50% 감소
  { label: '바리비열매', value: 144 }, // 효과가 굉장한 강철 타입 기술 피해량 50% 감소
  { label: '카리열매', value: 145 }, // 노말 타입 기술 피해량 50% 감소
  { label: '로셀열매', value: 146 }, // 효과가 굉장한 페어리 타입 기술 피해량 50% 감소
  { label: '치리열매', value: 147 }, // HP 1/4 이하일 시 공격 1랭크 상승
  { label: '용아열매', value: 148 }, // HP 1/4 이하일 시 방어 1랭크 상승
  { label: '캄라열매', value: 149 }, // HP 1/4 이하일 시 스피드 1랭크 상승
  { label: '야타비열매', value: 150 }, // HP 1/4 이하일 시 특수공격 1랭크 상승
  { label: '규살열매', value: 151 }, // HP 1/4 이하일 시 특수방어 1랭크 상승
  { label: '랑사열매', value: 152 }, // HP 1/4 이하일 시 급소율 2랭크 상승
  { label: '스타열매', value: 153 }, // HP 1/4 이하일 시 랜덤 능력치 2랭크 상승
  { label: '의문열매', value: 154 }, // 효과가 굉장한 기술 피격 시 HP 1/5 회복
  { label: '미클열매', value: 155 }, // HP 1/4 이하일 시 다음 기술 명중률 20% 상승
  { label: '악키열매', value: 156 },
  { label: '타라프', value: 157 }, // 효과가 굉장한 기술 피격 시 HP 1/3 회복
  { label: '애슈열매', value: 158 }, // 효과가 굉장한 기술 피격 시 HP 1/3 회복
  { label: '자보열매', value: 159 }, // 효과가 굉장한 기술 피격 시 HP 1/3 회복
  { label: '애터열매', value: 160 }, // 효과가 굉장한 기술 피격 시 HP 1/3 회복
  { label: '자보열매', value: 161 }, // 효과가 굉장한 기술 피격 시 HP 1/3 회복
];

const insertItemTools = async () => {
  const client = new Client({
    user: 'naviadev',
    host: 'localhost',
    database: 'pokesample',
    password: '1020',
    port: 5432,
  })
  await client.connect();


  for (const data of item) {
    const itemName = data.label;
    const index = data.value + 1;
    const query = `INSERT INTO item (item_id, item_name) values ($1, $2)`;
    await client.query(query, [index, itemName]);
    console.log('성공: ', index);
  }
}
insertItemTools();
