import { Card } from "@/components/atom/shad/card";
import { Label } from "@/components/atom/shad/label";
import SampleInfo from "@/components/molecule/sample/sampleInfo/sampleInfo";
import SampleStats from "@/components/molecule/sample/sampleStats/sampleStats";
import Skill from "@/components/molecule/sample/skillBox/skillBox";
import SampleDesForm from "@/components/molecule_extends/sampleDescription/SampleDesForm";
import { useContextSamplePage } from "@client/common/context/useSamplePageContext";
import Sample from "@client/common/interface/sample.interface";

import Image from "next/image";
import React, { useEffect, useState } from "react";

/**
 * @pseudocode
 * details 값을 props로 받으며, 해당 값이 변경될 때, useEffect 값 .
 * onClick으로 fetch ->
 * Grid Item Onclick =>
 *
 *
 */
const SampleInfoComponent: React.FC = () => {
  const { index } = useContextSamplePage();
  const [data, setData] = useState<Sample | null>(null); // 초기 상태를 null로 설정하여 기본 렌더링 가능
  const [loading, setLoading] = useState(false); // 로딩 상태 추가

  useEffect(() => {
    if (index !== 0) {
      // index가 0이 아닐 경우에만 Fetch 수행
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await fetch(
            `http://localhost:3001/sample/query/sampleWithIndex/${index}`
          );
          const result = await res.json();
          setData(result);
        } catch (error) {
          console.error("Fetch error:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [index]);

  return (
    <Card className="w-80 max-h-[650px] p-5 bg-white rounded-xl shadow-md mx-auto flex flex-col justify-center">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <p>로딩 중...</p>
        </div>
      ) : data ? (
        <>
          {/* 상단 영역 - 이미지 및 데이터 출력 */}
          <div className="relative bg-gray-400 h-32 rounded-t-xl">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gray-300 rounded-full border-4 border-white">
              <Image
                src={`/sprite_pokemon_images_webp/${data.pokemon.pokedex}.webp`}
                alt={data.pokemon.name}
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
            <div className="grid grid-rows-auto grid-cols-3 justify-center items-end w-full h-full pb-4 m-0 gap-1">
              <SampleDesForm labelText="성격" pText={data?.nature!} />
              <SampleDesForm labelText="도구" pText={data?.item!} />
              <SampleDesForm
                labelText="샘플타입"
                pText={data?.sample_tag_id!}
              />
            </div>
          </div>

          {/* 프로필 정보 */}
          <SampleInfo
            sampleName={data.title}
            partyType={data.party_tag}
            sampleAbilities={data.abilities}
          />

          <SampleStats recommendCount="200" viewCount="200" />

          {/* 기술 배치 */}
          <div className="mt-4 flex justify-center">
            <Label className="text-gray-400">기술배치</Label>
          </div>

          <div className="grid grid-cols-2 gap-4 justify-items-center mt-4">
            <Skill name={data.moves[0]}></Skill>
            <Skill name={data.moves[1]}></Skill>
            <Skill name={data.moves[2]}></Skill>
            <Skill name={data.moves[3]}></Skill>
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
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>데이터가 없습니다. 게시글을 선택해주세요.</p>
        </div>
      )}
    </Card>
  );
};

export default React.memo(SampleInfoComponent);
