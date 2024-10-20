import DrawerComponent from "@/components/molecule/drawer/drawer";
import SampleTypeSelect from "../../sampleCard/typeSelect/sampleTypeSelect";
import SearchPokemonForm from "../../sampleCard/pokemonSelect/pokemonSearchForm";
import Image from "next/image";
import { Skeleton } from "@/components/atom/shad/skeleton";
import useAdvancedSearch from "./hooks/useAdvancedSearch";
import PartyTypeSelect from "../../sampleCard/typeSelect/partyTypeSelect";
import { Input } from "@/components/atom/shad/input";
import ItemSelect from "../../sampleCard/itemSelect/itemSelect";
import { useContextSamplePage } from "@client/common/context/useSamplePageContext";
interface AdvancedSearchProps {
  onSearch: () => void;
}
const AdvancedSearch: React.FC<AdvancedSearchProps> = ({ onSearch }) => {
  const {
    sampleType,
    setSampleType,
    pokemon,
    setPokemon,
    handleFetch,
    partyType,
    setPartyType,
    title,
    setTitle,
    item,
    setItem,
    index,
    setIndex,
  } = useAdvancedSearch();

  const { handleChangeFilteredData } = useContextSamplePage();

  return (
    <DrawerComponent
      title="고급 검색"
      subtitle="필터링 가능한 검색"
      approveButtonText="검색"
      cancelButtonText="취소"
      approveEvent={async () => {
        handleChangeFilteredData([]);
        const data = await handleFetch();
        if (data !== undefined) {
          onSearch();
          handleChangeFilteredData(data);
        }
      }}
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

      <div className="flex gap-6">
        <Input
          placeholder="제목을 입력해주세요"
          value={title!}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></Input>

        <Input
          value={index!}
          placeholder="index 입력"
          onChange={(e) => {
            setIndex(e.target.value);
          }}
        ></Input>
      </div>
      <div className="w-full flex flex-col gap-4">
        <SearchPokemonForm value={pokemon} onPokemonChange={setPokemon} />
        <SampleTypeSelect
          value={sampleType}
          onSampleTypeChange={setSampleType}
        />
        <PartyTypeSelect value={partyType} onPartyTypeChange={setPartyType} />
        <ItemSelect
          // value={item!}
          onItemChange={(e) => {
            setItem(e);
          }}
        />
      </div>
    </DrawerComponent>
  );
};
export default AdvancedSearch;
