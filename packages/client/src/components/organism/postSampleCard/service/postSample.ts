import SampleCardState from "@client/common/interface/sampleCard.interface";
import { formatStats } from "@client/common/service/convertEvStats";
import { convertIVs } from "@client/common/service/convertIvStats";
import PostFetch from "@client/common/service/postFetch";

const PostSample = async (sample: SampleCardState) => {
  const ev = formatStats(sample.evs);
  const iv = convertIVs(sample.ivs);
  const body = {
    ...sample,
    pokedex: sample.pokemon?.value,
    ability: sample.ability?.label,
    item: sample.item?.label,
    ivs: iv,
    evs: ev,
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