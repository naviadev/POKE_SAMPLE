import SearchPokemonForm from "@/components/molecule_extends/sampleCard/pokemonSelect_search/pokemonSearchForm_search";
import { SampleCardProvider } from "@/components/organism/postSampleCard/hooks/useSampleCard";
import PostSampleCard from "@/components/organism/postSampleCard/testCard";
import { Type } from "@client/common/interface/type.interface";
import { useState } from "react";

const SamplePostTemplate = () => {
  const [type, setType] = useState<Type[] | Type | null>(null);

  return (
    <section className="flex flex-col space-y-8 sm:space-y-12 px-4 sm:px-8 lg:px-16 max-w-none">
      <SampleCardProvider>
        <header className="w-full h-full min-h-48 max-h-96 flex justify-center items-center">
          <SearchPokemonForm
            className="w-full min-w-[280px] sm:min-w-[400px] lg:min-w-[600px] max-w-[1200px] bg-none"
            setType={setType}
          />
        </header>
        <main className="w-full">
          <PostSampleCard type={type} />
        </main>
      </SampleCardProvider>
    </section>
  );
};

export default SamplePostTemplate;
