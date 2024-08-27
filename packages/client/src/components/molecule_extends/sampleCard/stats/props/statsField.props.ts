import { Stats } from "../../../../../../common/data/stats";
export default interface StatFormProps {
  value: Stats;
  onChange: (field: keyof Stats, value: number) => void;
}