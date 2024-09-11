import Option from "./option.interface";
import Stats from "../data/stats";
export default interface SampleCardState {
  title: string;
  pokemon: Option | null;
  ability: Option | null;
  item: Option | null;
  content: string;
  tera: string;
  evs: Stats;
  ivs: Stats;
  id: string;
  password: string;
  sample_tag: Option | null;
  party_tag: Option | null;
  nature: Option|null;
}