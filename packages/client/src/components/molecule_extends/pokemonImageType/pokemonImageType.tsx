import TypeBar from "@/components/molecule/typeBar/typeBar";
import Option from "@client/common/interface/option.interface";
import Image from "next/image";

interface PokemonImageTypeProps {
  pokedex: number | string | null;
  type: Option[] | Option | null;
}

const PokemonImageType: React.FC<PokemonImageTypeProps> = ({
  pokedex,
  type,
}) => {
  return (
    <div className="flex flex-col justify-center gap-12 sm:flex-row items-center sm:items-start w-full">
      {/* 이미지 , 타입 컴포넌트 */}
      <div className="flex flex-col justify-center items-center space-y-6 mb-6 sm:mb-0">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-white shadow-inner">
          {pokedex ? (
            <Image
              src={`/sprite_pokemon_images_webp/${pokedex}.webp`}
              alt="Pokemon Image"
              width={96}
              height={96}
              className="object-contain"
            />
          ) : null}
        </div>
        <div className="flex justify-center space-x-4">
          {/* 타입이 배열일 때와 단일 Option일 때 각각 처리 */}
          {Array.isArray(type)
            ? type.map((value, index) => (
                <TypeBar type={value} key={index} />
              ))
            : type && <TypeBar type={type} />}
        </div>
      </div>
    </div>
  );
};

export default PokemonImageType;
