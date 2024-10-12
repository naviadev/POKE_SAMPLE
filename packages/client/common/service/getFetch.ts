const getFetch = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await fetch(url);
    // 응답이 성공적인지 확인
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // 응답 데이터를 JSON으로 변환
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error(`Fetch error: ${error}`);
    return null;  // 에러 발생 시 null 반환
  }
};

export default getFetch;