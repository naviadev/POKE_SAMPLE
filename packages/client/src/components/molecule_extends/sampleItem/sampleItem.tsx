import { Card, CardContent, CardHeader, CardTitle } from "@/components/atom/shad/card";
import SampleItemProps from "./interface/sampleItem.props";
import Image from "next/image";


const SampleItem : React.FC <SampleItemProps> = ({sampleData, index, onClick})=>{
  return (
    <Card
            key={index}
            className="relative overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            onClick={onClick}
          >
            <CardHeader className="p-4 bg-gray-50 relative">
              {/* 애니메이션이 있는 SampleTag */}
              <div className="absolute top-2 left-2 overflow-hidden">
                <div className="bg-gray-200 text-black rounded-full w-6 h-6 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:w-auto group-hover:px-3 group-hover:py-1">
                  <span className="text-xs font-semibold whitespace-nowrap overflow-hidden transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    {sampleData.sample_tag}
                  </span>
                </div>
              </div>

              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-white shadow-inner">
                <Image
                  src={`/sprite_pokemon_images_webp/${sampleData.pokedex}.webp`}
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
                  {sampleData.item}
                </span>
              </div>
            </CardContent>
          </Card>
        
  )
  
}
export default SampleItem;