import Sample from "@client/common/interface/sample.interface";
import React, { createContext, ReactNode, useContext, useReducer } from "react";
import SampleGridItem from "../interface/sampleGridCard.interface";

interface SamplePageState {
  index: number;
  filteredData: SampleGridItem[];
  saveLatestData: SampleGridItem[];
}

type Action =
  | { type: "SET_DETAILS"; payload: number }
  | { type: "SET_INDEX"; payload: number }
  | { type: "SET_FILTERED_DATA"; payload: SampleGridItem[] }
  | { type: "SET_SAVE_LATEST_DATE"; payload: SampleGridItem[] };

const SamplePageContext = createContext<
  { state: SamplePageState; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

const SamplePageReducer = (
  state: SamplePageState,
  action: Action
): SamplePageState => {
  switch (action.type) {
    case "SET_FILTERED_DATA":
      return { ...state, filteredData: action.payload };
    case "SET_SAVE_LATEST_DATE":
      return { ...state, saveLatestData: action.payload };
    case "SET_INDEX":
      return { ...state, index: action.payload };
    default:
      return state;
  }
};

export const SamplePageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(SamplePageReducer, {
    index: 0,
    filteredData: [],
    saveLatestData: [],
  });

  return (
    <SamplePageContext.Provider value={{ state, dispatch }}>
      {children}
    </SamplePageContext.Provider>
  );
};

/**
 * @returns {handleChangeIndex, handleChangeFilteredData, state, index, filteredData}
 * @state 모든 상태변수를 객체의 형태로 반환.
 * @index 상세 정보 출력을 Index 값
 * @filteredData 화면에 출력되는 값
 * @handleChange * 상태변수 setter
 */
export const useContextSamplePage = () => {
  const context = useContext(SamplePageContext);

  if (context === undefined) {
    throw new Error("에러");
  }
  const { state, dispatch } = context;

  const index = state.index;
  const filteredData = state.filteredData;

  const handleChangeIndex = (value: number) => {
    dispatch({ type: "SET_INDEX", payload: value });
  };

  const handleChangeFilteredData = (value: SampleGridItem[]) => {
    dispatch({ type: "SET_FILTERED_DATA", payload: value });
  };
  return {
    handleChangeIndex,
    handleChangeFilteredData,
    state,
    index,
    filteredData,
  };
};
