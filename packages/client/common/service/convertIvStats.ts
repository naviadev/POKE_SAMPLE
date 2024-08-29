import Stats from "../data/stats";
export const convertIVs = (ivs: Stats): string => {
  const labels: { [key in keyof Stats]: string } = {
    H: "체",
    A: "공",
    B: "방",
    C: "특공",
    D: "특방",
    S: "스핏",
  };

  let result = "";
  let countV = 0;

  // IV 값을 기반으로 변환
  for (const key in ivs) {
    const statKey = key as keyof Stats;  // 명시적으로 keyof Stats로 캐스팅
    if (ivs[statKey] === 31) {
      countV++;
    } else if (ivs[statKey] === 0) {
      result += labels[statKey] + "Z ";
    }
  }

  // 모든 값이 31인 경우
  if (countV === 6) {
    result = "6V";
  } else if (countV > 0) {
    result = `${countV}V ${result.trim()}`;
  }

  return result.trim();
};
