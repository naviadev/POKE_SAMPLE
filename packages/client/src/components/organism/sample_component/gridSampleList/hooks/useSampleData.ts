import { useCallback, useEffect, useState } from "react";
import Sample from "@client/common/interface/sample.interface";
import Option from "@client/common/interface/option.interface";
import { API_URL } from "@client/common/enum/apiUrl.enum";

// 커스텀 훅 정의
/**
 * 
 * @returns 
 * @data 최신 샘플 데이터를 저장하는 상태변수
 * @filteredData 출력을 위한 상태변수. 
 * @searchText 검색 텍스트. 해당 데이터를 통해 값을 요청하고 검색 데이터를 출력한다.
 */
const useSampleData = () => {
  const [data, setData] = useState<Sample[] | null>(null); // 최신 샘플 데이터를 저장하는 상태변수
  const [filteredData, setFilteredData] = useState<Sample[] | null>(null); // 출력을 위한 상태변수.  
  const [searchText, setSearchText] = useState<Option | null>(null); // 검색 텍스트. 해당 데이터를 통해 값을 요청하고 검색 데이터를 출력한다.
  const [loading, setLoading] = useState<boolean>(false);

  // 데이터 Fetch 함수: URL을 받아서 데이터를 Fetch하고 결과 반환
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

  // 최신 게시글 로드 함수: 최신 샘플 데이터를 Fetch하고 data와 filterData 상태에 저장
  const loadLatestData = useCallback(async () => {
    const latestData = await fetchData(API_URL.GET_LATEST_SAMPLE);
    setData(latestData);
    setFilteredData(latestData);
  }, [fetchData]);

  // 검색 텍스트에 따른 데이터 필터링
  useEffect(() => {
    // 검색창으로 입력값이 사라졌을 때.
    if (searchText === null) {
      setFilteredData(data);
      return;
    }
    const pokedex: number = searchText.value; // 검색 옵션에서 검색할 값 가져오기
    const number: number = 10; // 가져올 갯수.
    const searchUrl = `${API_URL.SEARCH_URL}/${pokedex}/${number}`; // 검색 URL

    // 검색 텍스트를 통해 데이터를 가져오는 클로저 함수
    const loadSearchData = async () => {
      const searchData = await fetchData(searchUrl); // url을 통해 n개 만큼의 데이터를 가져옴.
      setFilteredData(searchData); // 출력용 상태변수에 검색 데이터를 삽입.
    };
    loadSearchData(); //호출
  }, [searchText, data, fetchData]);

  // 검색 텍스트 변경 핸들러
  const handleSearchChange = useCallback((text: Option | null) => {
    setSearchText(text);
  }, []);

  // 컴포넌트가 마운트될 때 최신 게시글 로드 함수 호출 1번만 호출할 수 있도록 함. (useCallback에 의존)
  useEffect(() => {
    loadLatestData();
  }, [loadLatestData]);

  return { data, filteredData, loading, handleSearchChange };
};

export default useSampleData;
