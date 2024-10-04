"use client";
import SearchBar from "@/components/molecule/searchForm/searchForm";
import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  // 예시 JSON 데이터
  const jsonData = [
    { label: "이상해씨", value: 1 },
    { label: "이상해풀", value: 2 },
    { label: "이상해꽃", value: 3 },
    // ... 추가 데이터
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-600 space-y-12">
      <SearchBar data={jsonData} />
      <div className="bg-gray-200 w-[600px] h-[600px] p-12 rounded-lg shadow-md">
        {/* 이미지 및 상세 정보 */}
        <div className="flex mt-10 justify-between">
          <div className="flex flex-col justify-center items-center space-y-6">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-white shadow-inner ">
              <Image
                src={`/sprite_pokemon_images_webp/541.webp`}
                alt="Pokemon Image"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center space-x-4">
              <div className="w-16 h-6 rounded-sm bg-green-300 text-center">
                <p>풀</p>
              </div>
              <div className="w-16 h-6 rounded-sm bg-purple-300 text-center">
                <p>독</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="w-72 h-11 bg-gray-400 rounded"></div>
            <div className="w-72 h-11 bg-gray-400 rounded"></div>
            <div className="w-72 h-11 bg-gray-400 rounded"></div>
          </div>
        </div>

        {/* 하단 정보 및 버튼 */}
        <div className="mt-10">
          <div className="bg-yellow-400 w-full h-14 rounded"></div>
          <div className="grid grid-cols-2 gap-2  w-full h-36 bg-gray-300 rounded mb-2 items-center p-4">
            <div className="w-full h-8 bg-gray-500 rounded"></div>
            <div className="w-full h-8 bg-gray-500 rounded"></div>
            <div className="w-full h-8 bg-gray-500 rounded"></div>
            <div className="w-full h-8 bg-gray-500 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
