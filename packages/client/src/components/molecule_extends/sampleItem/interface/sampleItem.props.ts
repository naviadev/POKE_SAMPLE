import SampleGridItem from "@client/common/interface/sampleGridCard.interface";

export interface SampleData {
  title: string;
  pokedex: number;
  sample_tag: string;
  index: number;
  item: string;
  ability: string;
}


export default interface SampleItemProps {
  sampleData: SampleGridItem;
  index: number;
  onClick: () => void;
}