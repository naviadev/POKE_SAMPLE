import Stats from "../data/stats";
export function formatStats(stats : Stats) {
  // 객체의 각 키를 순회하며 값을 체크
  return Object.entries(stats) // 객체를 [키, 값] 쌍의 배열로 변환
    .filter(([key, value]) => value > 0) // 값이 0보다 큰 항목만 필터링
    .map(([key, value]) => `${key}${value}`) // 키와 값을 문자열로 변환
    .join(''); // 모든 문자열을 붙여서 최종 문자열 반환
}