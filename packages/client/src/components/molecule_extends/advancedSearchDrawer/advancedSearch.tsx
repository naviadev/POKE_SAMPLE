import DrawerComponent from "@/components/molecule/drawer/drawer";
import SampleTypeSelect from "../sampleCard/typeSelect/sampleTypeSelect";
import { useState } from "react";
import Option from "@client/common/interface/option.interface";
import SearchPokemonForm from "../sampleCard/pokemonSelect/pokemonSearchForm";
import Image from "next/image";
import { Skeleton } from "@/components/atom/shad/skeleton";

const AdvancedSearch = () => {
  const [sampleType, setSampleType] = useState<Option | null>(null);
  const [pokemon, setPokemon] = useState<Option | null>(null);

  console.log(pokemon);
  return (
    <DrawerComponent
      title="고급 검색"
      subtitle="필터링 가능한 검색"
      approveButtonText="검색"
      cancelButtonText="취소"
    >
      {pokemon !== null ? (
        <div className="w-[96px] h-[96px] rounded-full bg-muted">
          <Image
            src={`/sprite_pokemon_images_webp/${pokemon?.value!}.webp`}
            alt="Pokemon Image"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>
      ) : (
        <Skeleton className="w-[96px] h-[96px] rounded-full"></Skeleton>
      )}

      <div className="w-full grid grid-cols-2 gap-4">
        <SearchPokemonForm onPokemonChange={setPokemon} />
        <SampleTypeSelect
          value={sampleType}
          onSampleTypeChange={setSampleType}
        />
      </div>
    </DrawerComponent>
  );
};
export default AdvancedSearch;
