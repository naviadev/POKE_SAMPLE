export default interface Sample {
  title: string;
  abilities: string;
  item: string;
  content: string;
  tera: string;
  evs: string;
  ivs: string;
  sample_tag_id: number;
  party_tag: string;
  nature: string;
  pokemon: { pokedex: number, name: string }
  index: number
  moves: string[];
}