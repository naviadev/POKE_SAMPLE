const determineIvGrade = (total: number): string => {
  if (total === 186) return "6V";
  if (total >= 155) return "5V";
  if (total >= 124) return "4V";
  if (total >= 93) return "3V";
  if (total >= 62) return "2V";
  if (total >= 31) return "1V";
  return "0V";
};
export default determineIvGrade