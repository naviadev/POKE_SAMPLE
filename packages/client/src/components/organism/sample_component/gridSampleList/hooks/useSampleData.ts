import { useCallback, useEffect, useState } from "react";
import Sample from "@client/common/interface/sample.interface";
import Option from "@client/common/interface/option.interface";
import { API_URL } from "@client/common/enum/apiUrl.enum";
/**
 * @returns Custuom Hook
 * @data 최신 샘플 데이터를 저장하는 상태변수
 * @filteredData 출력을 위한 상태변수. 
 * @searchText 검색 텍스트. 해당 데이터를 통해 값을 요청하고 검색 데이터를 출력한다.
 */
const useSampleData = () => {
  const [allData, setAllData] = useState<Sample[]>([]);
  const [filteredData, setFilteredData] = useState<Sample[]>([]);
  const [searchText, setSearchText] = useState<Option | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const number = 40;

  const fetchData = useCallback(async (url: string) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("데이터 Fetch 실패:", error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const loadLatestData = useCallback(async () => {
    const latestData = await fetchData(API_URL.GET_LATEST_SAMPLE);
    setAllData(latestData);
    setFilteredData(latestData);
    setHasMore(latestData.length === number);
  }, [fetchData]);

  const moreData = useCallback(async () => {
    if (!hasMore || loading) return;

    let lastIndex: number;
    let url: string;

    if (searchText) {
      lastIndex = filteredData[filteredData.length - 1]?.index;
      url = `${API_URL.SEARCH_URL}/${searchText.value}/${number}/${lastIndex}`;
    } else {
      lastIndex = allData[allData.length - 1]?.index;
      url = `${API_URL.GET_MORE_SAMPLES}/${lastIndex}/${number}`;
    }

    const result = await fetchData(url);
    
    if (result && result.length > 0) {
      if (searchText) {
        setFilteredData(prevData => [...prevData, ...result]);
      } else {
        setAllData(prevData => [...prevData, ...result]);
        setFilteredData(prevData => [...prevData, ...result]);
      }
      setHasMore(result.length === number);
    } else {
      setHasMore(false);
    }
  }, [fetchData, allData, filteredData, searchText, hasMore, loading]);

  const handleSearchChange = useCallback((text: Option | null) => {
    setSearchText(text);
    setFilteredData([]);  // Clear existing filtered data
    setHasMore(true);  // Reset hasMore for new search
  }, []);

  useEffect(() => {
    const loadData = async () => {
      if (searchText === null) {
        if (allData.length === 0) {
          await loadLatestData();
        } else {
          setFilteredData(allData);
          setHasMore(true);
        }
      } else {
        const searchUrl = `${API_URL.SEARCH_URL}/${searchText.value}/${number}`;
        const searchData = await fetchData(searchUrl);
        setFilteredData(searchData);
        setHasMore(searchData.length === number);
      }
    };
    loadData();
  }, [searchText, loadLatestData, fetchData, allData]);

  return { filteredData, loading, handleSearchChange, moreData, hasMore };
};

export default useSampleData;