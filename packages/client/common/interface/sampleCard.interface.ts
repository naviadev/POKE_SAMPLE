import Option from "./option.interface";
import Stats  from "../data/stats";
export default interface SampleCardState {
  title: string;
  pokemon: Option | null;
  ability: string | null;
  item: Option | null;
  content: string;
  tera: string;
  evs: Stats;
  ivs: Stats;
}