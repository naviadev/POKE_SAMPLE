interface Item {
  item_id: number;
  item_name: string;
}
interface Pokemon {
  pokedex: number;
  name: string;
}
export default interface SampleGridItem {
  sample_index: number;
  title: string;
  abilities: string;
  create_at: string;
  sample_tag_id: number;
  item: Item;
  pokedex: number;
}
