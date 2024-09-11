import { createContext, ReactNode, useContext, useReducer } from "react";
import SampleCardState from "../../../../../common/interface/sampleCard.interface";
import Option from "../../../../../common/interface/option.interface";

type Action =
  | { type: "SET_TITLE"; payload: string }
  | { type: "SET_POKEMON"; payload: Option | null }
  | { type: "SET_ABILITY"; payload: Option | null }
  | { type: "SET_ITEM"; payload: Option | null }
  | { type: "SET_CONTENT"; payload: string }
  | { type: "SET_TERA"; payload: string }
  | { type: "SET_IV_STAT"; payload: { field: string; value: number } }
  | { type: "SET_EV_STAT"; payload: { field: string; value: number } }
  | { type: "SET_ID"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_SAMPLE_TAG"; payload: Option | null }
  | { type: "SET_NATURE"; payload: Option | null }
  | { type: "SET_PARTY_TAG"; payload: Option | null };

const SampleCardContext = createContext<
  { state: SampleCardState; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

const SampleCardReducer = (
  state: SampleCardState,
  action: Action
): SampleCardState => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_POKEMON":
      return { ...state, pokemon: action.payload };
    case "SET_ABILITY":
      return { ...state, ability: action.payload };
    case "SET_ITEM":
      return { ...state, item: action.payload };
    case "SET_CONTENT":
      return { ...state, content: action.payload };
    case "SET_TERA":
      return { ...state, tera: action.payload };
    case "SET_IV_STAT":
      return {
        ...state,
        ivs: { ...state.ivs, [action.payload.field]: action.payload.value },
      };
    case "SET_EV_STAT":
      return {
        ...state,
        evs: { ...state.evs, [action.payload.field]: action.payload.value },
      };
    case "SET_ID":
      return { ...state, id: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_SAMPLE_TAG":
      return { ...state, sample_tag: action.payload };
    case "SET_PARTY_TAG":
      return { ...state, party_tag: action.payload };
    case "SET_NATURE":
      return { ...state, nature: action.payload };
    default:
      return state;
  }
};

export const SampleCardProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(SampleCardReducer, {
    title: "",
    pokemon: null,
    ability: null,
    item: null,
    content: "",
    tera: "",
    ivs: { H: 31, A: 31, B: 31, C: 31, D: 31, S: 31 },
    evs: { H: 0, A: 0, B: 0, C: 0, D: 0, S: 0 },
    id: "",
    password: "",
    sample_tag: null,
    party_tag: null,
    nature: null,
  });

  return (
    <SampleCardContext.Provider value={{ state, dispatch }}>
      {children}
    </SampleCardContext.Provider>
  );
};

export const useSampleCard = () => {
  const context = useContext(SampleCardContext);
  if (context === undefined) {
    throw new Error("useSampleCard must be used within a SampleCardProvider");
  }
  return context;
};
