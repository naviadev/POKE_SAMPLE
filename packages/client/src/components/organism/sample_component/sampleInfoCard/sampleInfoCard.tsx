import { Button } from "@/components/atom/shad/button";
import { Card } from "@/components/atom/shad/card";
import { Label } from "@/components/atom/shad/label";
import SampleInfo from "@/components/molecule/sample/sampleInfo/sampleInfo";
import SampleStats from "@/components/molecule/sample/sampleStats/sampleStats";
import Skill from "@/components/molecule/sample/skillBox/skillBox";
import SampleDesForm from "@/components/molecule_extends/sampleDescription/SampleDesForm";
import Sample from "@client/common/interface/sample.interface";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface SampleInfoComponentProps {
  index: number;
}
/**
 * @pseudocode
 * details 값을 props로 받으며, 해당 값이 변경될 때, useEffect 값 .
 * onClick으로 fetch ->
 * Grid Item Onclick =>
 *
 *
 */
const SampleInfoComponent: React.FC<SampleInfoComponentProps> = ({ index }) => {
  const [data, setData] = useState<Sample>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:3001/sample/query/sampleWithIndex/${index}`
      );
      const result = await res.json();
      setData(result);
    };
    fetchData();
  }, [index]);
  console.log(data);

  return (
    <Card className="w-80 max-h-[650px] p-5 bg-white rounded-xl shadow-md mx-auto flex flex-col justify-center">
      {/* 상단 영역 - 이미지 수정버튼*/}
      <div className="relative bg-gray-400 h-32 rounded-t-xl">
        <div className="absolute top-4 right-4 w-6 h-6 bg-black rounded-full flex items-center justify-center">
          <svg
            className="text-white w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gray-300 rounded-full border-4 border-white">
          <Image
            src={`/sprite_pokemon_images_webp/${data?.pokedex}.webp`}
            alt={data?.pokemon!}
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>
        {/* 아이템, 지닌물건, 특성, 성격 텍스트 */}
        <div className="grid grid-rows-auto grid-cols-3 justify-center items-end w-full h-full pb-4 m-0 gap-1">
          <SampleDesForm labelText="성격" pText={data?.nature!} />
          <SampleDesForm labelText="도구" pText={data?.item!} />
          <SampleDesForm labelText="특성" pText={data?.ability!} />
        </div>
      </div>

      {/* 프로필 정보 */}
      <SampleInfo
        sampleName={data?.title!}
        partyType={data?.party_tag!}
        sampleType={data?.sample_tag!}
      />

      <SampleStats recommendCount="200" viewCount="200" />

      {/* 기술 배치 */}
      <div className="mt-4 flex justify-center">
        <Label className="text-gray-400">기술배치</Label>
      </div>

      <div className="grid grid-cols-2 gap-4 justify-items-center mt-4">
        <Skill name={data?.moves[0]!}></Skill>
        <Skill name={data?.moves[1]!}></Skill>
        <Skill name={data?.moves[2]!}></Skill>
        <Skill name={data?.moves[3]!}></Skill>
      </div>

      {/* 하단 버튼 */}
      <div className="mt-6 space-y-3">
        <button className="w-full h-12 border border-black py-2 rounded-md font-semibold">
          복사하기
        </button>
        <button className="w-full h-12 bg-blue-600 text-white py-2 rounded-md font-semibold">
          공유하기
        </button>
      </div>
    </Card>
  );
};

export default React.memo(SampleInfoComponent);
