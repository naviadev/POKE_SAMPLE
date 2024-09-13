import Option from "@client/common/interface/option.interface";
import SampleCardState from "@client/common/interface/sampleCard.interface";
import { formatStats } from "@client/common/service/convertEvStats";
import { convertIVs } from "@client/common/service/convertIvStats";
import PostFetch from "@client/common/service/postFetch";

const PostSample = async (sample: SampleCardState, moves: Option[]) => {
  const ev = formatStats(sample.evs);
  const iv = convertIVs(sample.ivs);
  const body = {
    ...sample,
    party_tag: sample.party_tag?.label,
    sample_tag: sample.sample_tag?.label,
    pokedex: sample.pokemon?.value,
    ability: sample.ability?.label,
    item: sample.item?.label,
    ivs: iv,
    evs: ev,
    nature: sample.nature?.label,
    moves: [moves[0].label, moves[1].label, moves[2].label, moves[3].label]
  }
  const data = await JSON.stringify(body)
  const result: boolean = await PostFetch('sample/command/create', data);
  if (result) {
    alert('성공');
  } else {
    alert('실패');
  }

}
export default PostSample;