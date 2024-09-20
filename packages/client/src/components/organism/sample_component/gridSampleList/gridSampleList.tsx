import React, { useEffect, useState } from "react";
import SampleItem from "@/components/molecule_extends/sampleItem/sampleItem";
import { SampleData } from "@/components/molecule_extends/sampleItem/interface/sampleItem.props";
import SearchPokemonForm from "@/components/molecule_extends/sampleCard/pokemonSelect/pokemonSearchForm";
import AdvancedSearch from "@/components/molecule_extends/advancedSearchDrawer/advancedSearch";
import Option from "@client/common/interface/option.interface";

interface GridSampleListProps {
  setInfoIndex: (newIndex: number) => void;
}

const GridSampleList: React.FC<GridSampleListProps> = ({ setInfoIndex }) => {
  const [data, setData] = useState<SampleData[]>([]);
  const [filteredData, setFilteredData] = useState<SampleData[]>([]); // 검색된 데이터
  const [search, setSearch] = useState<Option | null>(null); // 검색 상태

  /**
   * @description 초기 데이터 로드 함수. 20개의 최신 데이터를 가져오는 것을 목적으로 한다.
   */
  const fetchInitialData = async () => {
    try {
      const res = await fetch("http://localhost:3001/sample/query/latest");
      const allData = await res.json();
      setData(allData);
      setFilteredData(allData); // 초기에는 filteredData도 동일하게 설정
    } catch (error) {
      console.error("데이터를 가져오는데 실패했습니다.", error);
    }
  };

  const fetchFilteredData = async (searchQuery: number) => {
    try {
      const res = await fetch(
        `http://localhost:3001/sample/query/sampleWithPokedex/${searchQuery}/${20}`
      );
      const searchData = await res.json();
      setFilteredData(searchData);
      console.log(search);
    } catch (error) {
      console.error("검색 데이터를 가져오는데 실패했습니다.", error);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  useEffect(() => {
    if (search) {
      fetchFilteredData(search.value);
    } else {
      setFilteredData(data);
    }
  }, [search]);
  console.log(filteredData);

  // 그리드를 통해 샘플을 출력하는 컴포넌트
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="grid grid-cols-3 items-center justify-center pb-3">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">샘플</h2>
        <div></div>
        <div className="flex justify-center items-center gap-4">
          <AdvancedSearch />
          <SearchPokemonForm
            onPokemonChange={setSearch}
            className="w-[220px]"
          />
        </div>
      </section>

      {/* Grid Div */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {filteredData.length > 0 ? (
          filteredData.map((value, index) => (
            <SampleItem
              key={index}
              index={value.index}
              sampleData={value}
              onClick={() => {
                setInfoIndex(value.index);
              }}
            />
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center py-12 h-[400px]">
            <h2 className="text-xl font-semibold text-gray-600">
              검색 결과가 없습니다.
            </h2>
          </div>
        )}
      </section>
    </div>
  );
};

export default React.memo(GridSampleList);
