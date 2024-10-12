import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atom/shad/card";
import SampleItemProps from "./interface/sampleItem.props";
import Image from "next/image";
import { tagNames } from "@client/common/enum/tagNames.enum";



const tagColors: { [key: number]: string } = {
  1: "bg-blue-100", // 특수 어태커
  2: "bg-red-100", // 물리 어태커
  3: "bg-green-100", // 물리 막이
  4: "bg-purple-100", // 특수 막이
  5: "bg-yellow-100", // 딜탱
  6: "bg-pink-100", // 기점
  7: "bg-gray-100", // 선봉
  8: "bg-teal-100", // 스카프
  9: "bg-indigo-100", // 스위퍼
  10: "bg-orange-100", // 변칙
  11: "bg-gray-100", // 서포터
};

const SampleItem: React.FC<SampleItemProps> = ({
  sampleData,
  index,
  onClick,
}) => {
  const tagColor = tagColors[sampleData.sample_tag_id] || "bg-gray-100"; // 기본 색상 설정
  const tagName = tagNames[sampleData.sample_tag_id] || "태그 없음"; // 기본 태그 이름 설정

  return (
    <Card
      key={index}
      className="relative overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
      onClick={onClick}
    >
      <CardHeader className="p-4 bg-gray-50 relative">
        {/* 애니메이션이 있는 SampleTag */}
        <div className="absolute top-2 left-2 overflow-hidden">
          <div
            className={`text-black rounded-full w-6 h-6 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:w-auto group-hover:px-3 group-hover:py-1 ${tagColor}`}
          >
            <span className="text-xs font-semibold whitespace-nowrap overflow-hidden transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              {tagName}
            </span>
          </div>
        </div>

        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-white shadow-inner">
          <Image
            src={`/sprite_pokemon_images_webp/${sampleData.pokemon.pokedex}.webp`}
            alt="Pokemon Image"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold mb-2 text-center text-gray-800">
          {sampleData.title}
        </CardTitle>
        <div className="flex justify-center space-x-2 text-sm text-gray-600">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            {sampleData.item.item_name}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default SampleItem;
