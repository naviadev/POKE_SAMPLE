//#region
import React from "react";
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
import TeraTypeSelect from "@/components/molecule_extends/sampleCard/teraSelect/teraSelect";
import { useSampleCard, SampleCardProvider } from "./hooks/useSampleCard";
import PostSample from "./service/postSample";
import FormField from "@/components/molecule/formField/formField";
import SampleTypeSelect from "@/components/molecule_extends/sampleCard/typeSelect/sampleTypeSelect";
import PartyTypeSelect from "@/components/molecule_extends/sampleCard/typeSelect/partyTypeSelect";
import useMoveSelect from "./hooks/useMove";
import NatureSelect from "@/components/molecule_extends/sampleCard/natureSelect/natureSelect";
import NonMemeberLoginForm from "@/components/molecule_extends/nonMemberLoginForm/nonMemeberLoginForm";
//#endregion

const PostSampleCard: React.FC = () => {
  // 기술을 제외한 모든값의 상태변수 (useContext, useReduce)
  const { state, dispatch } = useSampleCard();
  // 기술만을 관리하는 상태관리 변수
  const { moves, handleMoveChange } = useMoveSelect();

  //Stat 변경 함수
  const handleStatChange = (field: string, value: number) => {
    dispatch({ type: "SET_IV_STAT", payload: { field, value } });
  };
  //개체값 변경 함수
  const handleEvStatChange = (field: string, value: number) => {
    dispatch({ type: "SET_EV_STAT", payload: { field, value } });
  };

  return (
    <Card className="w-[650px]">
      <div className="grid grid-cols-2 item-center">
        <CardTitleOverView
          title="샘플 작성"
          description="현재 시즌 : 레귤레이션 D"
          className="justify-center"
        />
        <NonMemeberLoginForm
          id={state.id}
          password={state.password}
          onIdChange={(value) => dispatch({ type: "SET_ID", payload: value })}
          onPasswordChange={(value) =>
            dispatch({ type: "SET_PASSWORD", payload: value })
          }
        />
      </div>

      <CardContentView className="space-y-5">
        <TitleFormField
          value={state.title}
          onChange={(value: string) =>
            dispatch({ type: "SET_TITLE", payload: value })
          }
        />
        <div className="grid grid-cols-2 gap-4">
          <SearchPokemonForm
            onPokemonChange={(pokemon) =>
              dispatch({ type: "SET_POKEMON", payload: pokemon })
            }
          />
          <TeraTypeSelect
            selectedType={state.tera}
            onTypeChange={(tera) =>
              dispatch({ type: "SET_TERA", payload: tera })
            }
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <AbilitySearch
            pokemon={state.pokemon}
            onAbilityChange={(ability) =>
              dispatch({ type: "SET_ABILITY", payload: ability })
            }
          />
          <NatureSelect
            onNatureChange={(nature) => {
              dispatch({ type: "SET_NATURE", payload: nature });
            }}
          />
        </div>

        <ItemSelect
          onItemChange={(item) => dispatch({ type: "SET_ITEM", payload: item })}
        />
        <IvForm value={state.ivs} onChange={handleStatChange} />
        <EvsForm value={state.evs} onChange={handleEvStatChange} />
        <MoveSelect
          moves={moves}
          onMoveChange={(index, move) => handleMoveChange(index, move)}
        />
        <SampleTypeSelect
          value={state.sample_tag}
          onSampleTypeChange={(sample_tag) =>
            dispatch({ type: "SET_SAMPLE_TAG", payload: sample_tag })
          }
        />
        <PartyTypeSelect
          value={state.party_tag}
          onPartyTypeChange={(party_tag) =>
            dispatch({ type: "SET_PARTY_TAG", payload: party_tag })
          }
        />
        <ContentArea
          value={state.content}
          onChange={(e) =>
            dispatch({ type: "SET_CONTENT", payload: e.target.value })
          }
        />
      </CardContentView>

      <CardFooterView
        approveName="작성"
        cancelName="취소"
        approveEvent={() => {
          console.log(PostSample(state, moves));
        }}
      />
    </Card>
  );
};

const WrappedPostSampleCard: React.FC = () => (
  <SampleCardProvider>
    <PostSampleCard />
  </SampleCardProvider>
);

export default WrappedPostSampleCard;
