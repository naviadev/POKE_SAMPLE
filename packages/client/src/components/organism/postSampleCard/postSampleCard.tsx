"use client";
import { Card } from "../../atom/shad/card";
import CardContentView from "../../molecule/card/cardContent";
import CardFooterView from "../../molecule/card/cardFooter";
import CardTitleOverView from "../../molecule/card/cardOverView";
import TitleFormField from "../../molecule_extends/titleFormField";
import SearchPokemonForm from "../../molecule_extends/sampleCard/pokemonSelect/pokemonSearchForm";
import AbilitySearch from "../../molecule_extends/sampleCard/abilitiesSelect/abilitySearch";
import ItemSelect from "../../molecule_extends/sampleCard/itemSelect/itemSelect";
import IvForm from "../../molecule_extends/sampleCard/stats/ivField/ivForm";
import EvsForm from "@/components/molecule_extends/sampleCard/stats/evField/evForm";
import MoveSelect from "../../molecule_extends/sampleCard/moveSelect/moveSelect";
import ContentArea from "../../molecule_extends/contentArea/contentArea";
import usePostSampleCard from "./hooks/usePostSampleCard";
import TeraTypeSelect from "@/components/molecule_extends/sampleCard/teraSelect/teraSelect";

const PostSampleCard: React.FC = () => {
  const {
    title,
    setTitle,
    pokemon,
    setPokemon,
    ability,
    setAbility,
    item,
    setItem,
    tera,
    setTera,
    content,
    setContent,
    stats,
    handleStatChange,
    evStats,
    handleEvStatChange,
    handleTeraChange,
    handlePokemonChange,
    handleAbility,
    handleItem,
  } = usePostSampleCard();

  return (
    <Card className="w-[650px]">
      <CardTitleOverView
        title="샘플 작성"
        description="현재 시즌 : nn 동적으로 변경해야함."
      />
      {/* 카드 본문 */}
      <CardContentView className="space-y-5">
        {/* 제목 입력창 */}
        <TitleFormField value={title} onChange={setTitle} />
        {/* 포켓몬 검색창 및 테라스탈 타입 선택창을 그리드로 배치 */}
        <div className="grid grid-cols-3 gap-4">
          <SearchPokemonForm onPokemonChange={handlePokemonChange} />
          <a href="https://pokemondb.net/pokedex/Metapod">
            <img
              src="https://img.pokemondb.net/sprites/scarlet-violet/normal/Metapod.png"
              alt="Metapod"
            />
          </a>
          <TeraTypeSelect selectedType={tera} onTypeChange={handleTeraChange} />
        </div>
        {/* 특성 검색창 */}
        <AbilitySearch pokemon={pokemon} onAbilityChange={handleAbility} />
        {/* 도구 검색창 */}
        <ItemSelect onItemChange={handleItem} />
        {/* 개체값 노력치 컨트롤러 */}
        <IvForm value={stats} onChange={handleStatChange} />
        <EvsForm value={evStats} onChange={handleEvStatChange} />
        {/* 기술 1 ~ 4 */}
        <MoveSelect />
        {/* 본문 */}
        <ContentArea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </CardContentView>
      <CardFooterView approveName="작성" cancelName="취소" />
    </Card>
  );
};

export default PostSampleCard;
