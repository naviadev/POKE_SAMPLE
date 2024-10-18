import Stats from "../data/stats";
// IVS 변환 함수
export function formatIVS(stats: Stats): string {
  const maxStat = 31; // 최대 IV 값
  let maxStatsCount = 0; // 최대 IV가 투자된 능력치의 수
  let formattedStats: any = []; // 결과 문자열을 저장할 배열

  Object.entries(stats).forEach(([key, value]) => {
    if (value === maxStat) {
      maxStatsCount++;
    } else if (value > 0 && value < maxStat) {
      // 애매한 IV 값 (28~30) 처리
      formattedStats.push(`${value}${key}`);
    } else if (value === 0) {
      // 0일 경우 처리
      formattedStats.push(`0${key}`);
    }
  });

  // 모든 능력치가 31인 경우 6V
  if (maxStatsCount === 6) {
    return '6V';
  }

  // 대부분 31이고, 한 능력치만 0인 경우
  if (maxStatsCount === 5 && formattedStats.length === 1 && formattedStats[0].startsWith('0')) {
    return `5V${formattedStats[0]}`;
  }

  // 결과를 "5V28A"와 같은 형식으로 반환
  return `${maxStatsCount}V${formattedStats.join('')}`;
}
