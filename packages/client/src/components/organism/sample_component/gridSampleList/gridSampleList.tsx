import React, { useRef, useCallback, useEffect, useState } from "react";
import SampleItem from "@/components/molecule_extends/sampleItem/sampleItem";
import SearchPokemonForm from "@/components/molecule_extends/sampleCard/pokemonSelect/pokemonSearchForm";
import AdvancedSearch from "@/components/molecule_extends/advancedSearchDrawer/advancedSearch";
import LoadingSpinner from "@/components/molecule_extends/loading/loadingIndicator";
import NoResult from "@/components/molecule_extends/noResult/noResult";
import { useContextSamplePage } from "@client/common/context/useSamplePageContext";
import Sample from "@client/common/interface/sample.interface";
import { API_URL } from "@client/common/enum/apiUrl.enum";
import Option from "@client/common/interface/option.interface";

const GridSampleList: React.FC = () => {
  // 출력 데이터가 검색 데이터로 변경되고, focus가 사라져 다시 최신 데이터를 요청해야할 경우 추가적인 요청없이 해당 데이터를 사용하여 출력할 수 있게끔 작성.
  const [allData, setAllData] = useState<Sample[]>([]);
  // 로딩 스피너를 출력하기 위한 상태변수
  const [loading, setLoading] = useState<boolean>(false);
  // 컨텐츠 고갈이 판단되면, 해당 값을 false로 변경하여 더 이상 fetch를 보낼 수 없도록 함.
  const [hasMore, setHasMore] = useState<boolean>(true);
  // 검색 텍스트 Option 객체
  const [searchText, setSearchText] = useState<Option | null>(null);
  // 요청 데이터 갯수.
  const number = 40;

  /**
   * @handleChangeIndex 상세 정보 출력을 위한 Index Setter
   * @filteredData 화면에 출력되는 Data들을 배열로 보관
   * @handleChangeFilteredData filteredData Setter
   */
  const { handleChangeIndex, filteredData, handleChangeFilteredData } =
    useContextSamplePage();

  /**
   * @description useCallback을 사용해 리렌더링이 발생하더라도 해당 Callback 함수의 불필요한 인스턴스를 방지
   */
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

  /**
   * @description 가장 최신의 게시글을 받을 수 있는 함수.
   */
  const loadLatestData = useCallback(async () => {
    const latestData = await fetchData(API_URL.GET_LATEST_SAMPLE);
    if (latestData) {
      // 에러 체크 추가
      setAllData(latestData);
      handleChangeFilteredData(latestData);
      setHasMore(latestData.length === number);
    } else {
      console.error("데이터를 로드하는 중 오류 발생.");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData, setAllData, setHasMore]);

  /**
   * @description Search Text를 변경하고, FilteredData를 빈 배열로 변경해주는 onChange 함수
   */
  const handleSearchChange = useCallback(
    (text: Option | null) => {
      setSearchText(text);
      handleChangeFilteredData([]); // Clear existing filtered data
      setHasMore(true); // Reset hasMore for new search
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setSearchText, setHasMore]
  );

  /**
   * @description 출력된 데이터의 마지막 Index키를 기반으로 해당 게시물 이전의 데이터를 요청할 수 있는 함수.
   */
  const moreData = useCallback(
    async () => {
      if (loading) return; // 로딩이 완료되지 않았다면 return을 실행하여, 비동기적으로 반복된 요청을 할 수 없게끔 설정
      let lastIndex: number; // 출력된 게시물의 마지막 Index
      let url: string; // 요청 URㅣ

      // URL 설정 부분.
      if (searchText) {
        lastIndex = filteredData[filteredData.length - 1]?.index;
        url = `${API_URL.SEARCH_URL}/${searchText.value}/${number}/${lastIndex}`;
      } else {
        lastIndex = allData[allData.length - 1]?.index;
        url = `${API_URL.GET_MORE_SAMPLES}/${lastIndex}/${number}`;
      }

      const result = await fetchData(url); // 설정된 URL을 통해 값을 요청.

      if (result && result.length > 0) {
        // 해당 로직이 검색을 통해서 일어났다면.
        if (searchText) {
          const newData = [...filteredData, ...result];
          handleChangeFilteredData(newData);
        }
        // 그것이 아닌, 기본 렌더링을 통해서 일어났다면.
        else {
          const newData = [...filteredData, ...result];
          setAllData((prevData) => [...prevData, ...result]);
          handleChangeFilteredData(newData);
        }
        setHasMore(result.length === number); // 0이 됐다면 setHasMore 값을 0 (false 로 변경)
      } else {
        setHasMore(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fetchData, allData, filteredData, searchText, hasMore, loading]
  );

  useEffect(
    () => {
      // 기본 데이터 혹은 검색 데이터 요청.
      const loadData = async () => {
        if (searchText === null) {
          if (allData.length === 0) {
            await loadLatestData();
          } else {
            handleChangeFilteredData(allData);
            setHasMore(true);
          }
        } else {
          const searchUrl = `${API_URL.SEARCH_URL}/${searchText.value}/${number}`;
          const searchData = await fetchData(searchUrl);
          handleChangeFilteredData(searchData);
          setHasMore(searchData.length === number);
        }
      };
      loadData();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchText, loadLatestData, fetchData, allData]
  );
  // 스크롤 이벤트를 감지하기 위한 Observer 변수 useRef 를 사용하여, IntersectionObserver 를 참조할 수 있도록 한다.
  // ** useRef를 통해 리렌더링이 발생하더라도 해당 값을 유지할 수 있도록 한다.
  const observer = useRef<IntersectionObserver | null>(null);

  // lastElementRef는 특정 DOM 요소에 대한 참조를 설정하고, 이 요소가 뷰포트에 들어올 때 추가 데이터를 로드하는 기능을 수행하는 함수
  // 출력되는 샘플의 가장 마지막 카드에 해당 함수를 추가하여, 무한 스크롤 로직을 발생시킨다.
  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          moreData();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, moreData, hasMore]
  );

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
        {filteredData.length > 0 ? (
          filteredData.map((value, index) => (
            <div
              key={value.index}
              ref={index === filteredData.length - 1 ? lastElementRef : null}
            >
              <SampleItem
                index={value.index}
                sampleData={value}
                onClick={() => handleChangeIndex(value.index)}
              />
            </div>
          ))
        ) : loading ? (
          <NoResult />
        ) : null}
      </section>
      {loading && <LoadingSpinner />}
      {hasMore && filteredData.length > 0 && (
        <p className="text-center mt-4">더 이상 데이터가 없습니다.</p>
      )}
    </div>
  );
};

export default React.memo(GridSampleList);
