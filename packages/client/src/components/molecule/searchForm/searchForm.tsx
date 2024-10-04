import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ data }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false); // 포커스 상태 관리

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isFocused && inputValue) {
        const filteredSuggestions = data
          .filter(item => item.label.includes(inputValue))
          .slice(0, 3); // 최대 3개만 표시
        setSuggestions(filteredSuggestions);
      } else {
        setSuggestions([]);
      }
    }, 300); // 디바운스 시간: 300ms

    return () => clearTimeout(timer); // 타이머 정리
  }, [inputValue, isFocused, data]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setSuggestions([]); // 포커스가 벗어나면 추천 목록 비우기
  };

  return (
    <div>
      <div className="flex items-center border-b border-gray-500 w-[500px]">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="포켓몬 검색"
          className="focus:outline-none border-none placeholder-gray-400 h-10 bg-transparent w-full relative"
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus} // 포커스 이벤트 추가
          onBlur={handleBlur} // 블러 이벤트 추가
        />
      </div>
      {isFocused && suggestions.length > 0 && ( // 포커스 상태일 때만 자동 완성 목록 표시
        <ul className="mt-2 border border-gray-300 rounded-md bg-white z-10 absolute">
          {suggestions.map((suggestion) => (
            <li key={suggestion.value} className="p-2 hover:bg-gray-200 cursor-pointer">
              {suggestion.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;