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
const useSampleData = (number: number) => {
  const [allData, setAllData] = useState<Sample[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<Option | null>(null);

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

};

export default useSampleData;