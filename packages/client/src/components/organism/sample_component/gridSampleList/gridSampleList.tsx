import React, { useRef, useCallback, useEffect } from "react";
import SampleItem from "@/components/molecule_extends/sampleItem/sampleItem";
import SearchPokemonForm from "@/components/molecule_extends/sampleCard/pokemonSelect/pokemonSearchForm";
import AdvancedSearch from "@/components/molecule_extends/advancedSearchDrawer/advancedSearch";
import LoadingSpinner from "@/components/molecule_extends/loading/loadingIndicator";
import NoResult from "@/components/molecule_extends/noResult/noResult";
import useSampleData from "./hooks/useSampleData";

interface GridSampleListProps {
  setInfoIndex: (newIndex: number) => void;
}

const GridSampleList: React.FC<GridSampleListProps> = ({ setInfoIndex }) => {
  const { filteredData, loading, handleSearchChange, moreData } = useSampleData();
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useCallback((node: HTMLDivElement | null) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        moreData();
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, moreData]);

  useEffect(() => {
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="grid grid-cols-[4fr_4fr_1fr_5fr] items-center justify-center pb-3">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">샘플</h2>
        <div></div>
        <AdvancedSearch />
        <SearchPokemonForm
          onPokemonChange={handleSearchChange}
          className="w-full"
        />
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {filteredData?.length! > 0 ? (
          filteredData!.map((value, index) => (
            <div 
              key={value.index}
              ref={index === filteredData!.length - 1 ? lastElementRef : null}
            >
              <SampleItem
                index={value.index}
                sampleData={value}
                onClick={() => setInfoIndex(value.index)}
              />
            </div>
          ))
        ) : (
          <NoResult />
        )}
      </section>
      {loading && <LoadingSpinner />}
    </div>
  );
};

export default React.memo(GridSampleList);