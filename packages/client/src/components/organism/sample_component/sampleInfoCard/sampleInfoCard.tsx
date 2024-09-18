import { Button } from "@/components/atom/shad/button";
import { Card } from "@/components/atom/shad/card";
import { Label } from "@/components/atom/shad/label";
import SampleInfo from "@/components/molecule/sample/sampleInfo/sampleInfo";
import SampleStats from "@/components/molecule/sample/sampleStats/sampleStats";
import Skill from "@/components/molecule/sample/skillBox/skillBox";
import SampleDesForm from "@/components/molecule_extends/sampleDescription/SampleDesForm";

import Image from "next/image";


const SampleInfoComponent = () => {
  return (
    <Card className="w-80 p-6 bg-white rounded-xl shadow-md mx-auto">
      {/* 상단 영역 - 이미지 수정버튼*/}
      <div className="relative bg-gray-400 h-24 rounded-t-xl">
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
            src="/sprite_pokemon_images_webp/233.webp"
            alt="폴리곤 이미지"
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>
      </div>

      {/* 프로필 정보 */}
      <SampleInfo
        sampleName="물리막이  폴리곤"
        partyType="싸이클"
        sampleType="물리막이"
      ></SampleInfo>

      <SampleStats recommendCount="200" viewCount="200"></SampleStats>

      {/* 아이템, 지닌물건, 특성, 성격 텍스트 */}
      <div className="text-gray-600 mt-4 px-4 space-y-2 ">
        <SampleDesForm labelText="성격" pText="괘씸" />
        <SampleDesForm labelText="도구" pText="진화의휘석" />
        <SampleDesForm labelText="특성" pText="다운로드" />
      </div>

      {/* 기술 배치 */}
      <div className="mt-4 flex justify-center">
        <Label className="text-gray-400">기술배치</Label>
      </div>

      <div className="grid grid-cols-2 gap-4 justify-items-center mt-4">
        <Skill name="방전"></Skill>
        <Skill name="전기자석파"></Skill>
        <Skill name="HP회복"></Skill>
        <Skill name="트라이어택"></Skill>
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

export default SampleInfoComponent;
