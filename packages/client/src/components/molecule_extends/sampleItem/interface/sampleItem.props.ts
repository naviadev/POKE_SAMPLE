export interface SampleData {
  title: string;
  pokedex: number;
  sample_tag: string;
  index: number;
  item: string;
  ability: string;
}


export default interface SampleItemProps {
  sampleData: SampleData;
  index: number;
  onClick: () => void;
}