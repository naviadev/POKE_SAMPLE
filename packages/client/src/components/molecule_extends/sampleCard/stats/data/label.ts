import Stats from "../../../../../../common/data/stats";

export const StatsFields: { label: keyof Stats }[] = [
  { label: "H" },
  { label: "A" },
  { label: "B" },
  { label: "C" },
  { label: "D" },
  { label: "S" },
];

export const labelText = [
  "H(체력)",
  "A(공격)",
  "B(방어)",
  "C(특수공격)",
  "D(특수방어)",
  "S(스피드)",
];

export const fieldToZ = {
  H: "체Z",
  A: "공Z",
  B: "방Z",
  C: "특공Z",
  D: "특방Z",
  S: "스핏Z",
};
