import React, { useCallback, useEffect, useState } from "react";
import SampleItem from "@/components/molecule_extends/sampleItem/sampleItem";
import SearchPokemonForm from "@/components/molecule_extends/sampleCard/pokemonSelect/pokemonSearchForm";
import AdvancedSearch from "@/components/molecule_extends/advancedSearchDrawer/advancedSearch";
import LoadingSpinner from "@/components/molecule_extends/loading/loadingIndicator";
import NoResult from "@/components/molecule_extends/noResult/noResult";
import { Button } from "@/components/atom/shad/button";
import Sample from "@client/common/interface/sample.interface";
import Option from "@client/common/interface/option.interface";

interface GridSampleListProps {
  setInfoIndex: (newIndex: number) => void;
}

const GridSampleList: React.FC<GridSampleListProps> = ({ setInfoIndex }) => {
  const [data, setData] = useState<Sample[]>();

  const [searchData, setSearchData] = useState<Sample[]>();
  const [searchText, setSearchText] = useState<Option | null>();

  const handleSearchChange = (text: Option | null) => {
    setSearchText(text);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3001/sample/query/latest");
      const test = await res.json();
      setData(test);
    };
    fetchData();
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
        {data?.length! > 0 ? (
          data?.map!((value) => (
            <div key={value.index}>
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

      {/* {loading && <LoadingSpinner />} */}
    </div>
  );
};

export default React.memo(GridSampleList);
