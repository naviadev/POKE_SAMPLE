import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@client/src/components/atom/shad/card";
import { Section } from "lucide-react";

const GridSampleList = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3001/sample/query/latest");
    const allData = await res.json();
    setData(allData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 그리드를 통해 샘플을 출력하는 컴포넌트
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">샘플</h2>
      {/* Grid Div */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {data?.map((value: { [key: string]: any }, index) => (
          <Card
            key={index}
            className="relative overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
          >
            <CardHeader className="p-4 bg-gray-50 relative">
              {/* 애니메이션이 있는 SampleTag */}
              <div className="absolute top-2 left-2 overflow-hidden">
                <div className="bg-gray-200 text-black rounded-full w-6 h-6 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:w-auto group-hover:px-3 group-hover:py-1">
                  <span className="text-xs font-semibold whitespace-nowrap overflow-hidden transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    {value.sampleTag.value}
                  </span>
                </div>
              </div>

              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-white shadow-inner">
                <Image
                  src={`/sprite_pokemon_images_webp/${value.pokedex.value}.webp`}
                  alt="Pokemon Image"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg font-semibold mb-2 text-center text-gray-800">
                {value.title.value}
              </CardTitle>
              <div className="flex justify-center space-x-2 text-sm text-gray-600">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {value.item.value}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default GridSampleList;
