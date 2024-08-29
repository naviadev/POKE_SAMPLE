import React from "react";
import Image from "next/image";
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

const PostSampleCard: React.FC = () => {
  const { state, dispatch } = useSampleCard();

  const handleStatChange = (field: string, value: number) => {
    dispatch({ type: "SET_IV_STAT", payload: { field, value } });
  };

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
        <div className="flex gap-4 flex-end p-6">
          <FormField
            id="id"
            type="text"
            label="ID"
            value={state.id}
            onChange={(e) => {
              dispatch({ type: "SET_ID", payload: e.target.value });
            }}
          ></FormField>
          <FormField
            id="password"
            type="password"
            label="Password"
            value={state.password}
            onChange={(e) => {
              dispatch({ type: "SET_PASSWORD", payload: e.target.value });
            }}
          ></FormField>
        </div>
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
        <AbilitySearch
          pokemon={state.pokemon}
          onAbilityChange={(ability) =>
            dispatch({ type: "SET_ABILITY", payload: ability })
          }
        />
        <ItemSelect
          onItemChange={(item) => dispatch({ type: "SET_ITEM", payload: item })}
        />
        <IvForm value={state.ivs} onChange={handleStatChange} />
        <EvsForm value={state.evs} onChange={handleEvStatChange} />
        <MoveSelect />
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
          console.log(PostSample(state));
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
