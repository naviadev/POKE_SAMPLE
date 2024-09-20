import { useEffect, useState, useCallback } from "react";
import { SampleData } from "@/components/molecule_extends/sampleItem/interface/sampleItem.props";
import Option from "@client/common/interface/option.interface";

const useSampleData = (itemsPerPage: number) => {
  // 최신 데이터를 저장하는 용도.
  const [data, setData] = useState<SampleData[]>([]);
  // 실질적인 출력을 담당하는 용도
  const [filteredData, setFilteredData] = useState<SampleData[]>([]);
  const [search, setSearch] = useState<Option | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url: string, updateState: (data: SampleData[]) => void) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const resultData = await res.json();
      updateState(resultData);
    } catch (error) {
      console.error("데이터를 가져오는 데 실패했습니다.", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchInitialData = () => {
    fetchData("http://localhost:3001/sample/query/latest", (allData) => {
      setData(allData);
      setFilteredData(allData);
    });
  };

  const fetchFilteredData = (searchQuery: number) => {
    fetchData(
      `http://localhost:3001/sample/query/sampleWithPokedex/${searchQuery}/${itemsPerPage}`,
      setFilteredData
    );
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  const handleSearchChange = useCallback((query: Option | null) => {
    setSearch(query);
    if (query) {
      fetchFilteredData(query.value); // 검색 데이터를 fetch 하여 게시글을 출력할 수 있도록 함.
    } else {
      setFilteredData(data); // 포커스가 꺼지면 저장한 데이터로 변경하여 최신 게시글을 출력할 수 있도록 함.
    }
  }, [data]);

  return {
    data,
    filteredData,
    loading,
    handleSearchChange,
    setFilteredData
  };
};

export default useSampleData;
