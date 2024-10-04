import SearchPokemonForm from "@/components/molecule_extends/sampleCard/pokemonSelect_search/pokemonSearchForm_search";
import { SampleCardProvider } from "@/components/organism/postSampleCard/hooks/useSampleCard";
import PostSampleCard from "@/components/organism/postSampleCard/testCard";
import { useEffect } from "react";

const SamplePostTemplate = () => {
  return (
    <section className="flex flex-col space-y-12">
      <SampleCardProvider>
        {/* Header 검색 영역) */}
        <header className="w-full h-full min-h-48 max-h-96 mt-24">
          <SearchPokemonForm className="w-full min-w-[400px] max-w-[1200px] bg-none" />
        </header>

        {/* Main 선택된 샘플을 작성할 수 있는 영역 */}
        <main>
          <PostSampleCard />
        </main>
      </SampleCardProvider>
    </section>
  );
};

export default SamplePostTemplate;
