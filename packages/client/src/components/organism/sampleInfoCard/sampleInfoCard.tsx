import { Card } from "@/components/atom/shad/card";
import { Label } from "@/components/atom/shad/label";

import Image from "next/image";

const SampleInfoCard = () => {
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
      <div className="mt-12 text-center">
        <h2 className="text-xl font-bold">물리막이 폴리곤</h2>
        <div className="flex justify-center space-x-2 mt-1">
          <p className="text-green-500">싸이클</p>
          <p className="text-blue-500">물리막이</p>
        </div>

        <div className="flex justify-center space-x-8 mt-4">
          <div>
            <p className="text-lg font-bold">205</p>
            <p className="text-gray-500 text-sm">추천</p>
          </div>
          <div>
            <p className="text-lg font-bold">304</p>
            <p className="text-gray-500 text-sm">조회수</p>
          </div>
        </div>

        {/* 설명 텍스트 */}
        <div className="text-gray-600 mt-4 px-4 space-y-2">
          <div>
            <Label className="text-gray-500 ">지닌물건</Label>
            <p className="font-medium">진화의휘석</p>
          </div>
          <div>
            <Label className="text-gray-500">노력치</Label>
            <p className="font-medium">H252 B252 D6</p>
          </div>
          <div>
            <Label className="text-gray-500">개체값</Label>
            <p className="font-medium">5V 공Z</p>
          </div>
        </div>

        {/* 기술 배치 */}
        <div className="mt-4">
          <Label className="text-gray-400">기술배치</Label>
        </div>

        <div className="grid grid-cols-2 gap-4 justify-items-center mt-4">
          <div className="w-32 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700">
            방전
          </div>
          <div className="w-32 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700">
            전기자석파
          </div>
          <div className="w-32 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700">
            HP회복
          </div>
          <div className="w-32 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700">
            트라이어택
          </div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="mt-6 space-y-3">
        <button className="w-full border border-black py-2 rounded-full font-semibold">
          복사하기
        </button>
        <button className="w-full bg-black text-white py-2 rounded-full font-semibold">
          공유하기
        </button>
      </div>
    </Card>
  );
};

export default SampleInfoCard;
