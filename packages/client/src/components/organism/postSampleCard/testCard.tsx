//#region
import React, { useEffect, useState } from "react";
import { useSampleCard, SampleCardProvider } from "./hooks/useSampleCard";
import useMoveSelect from "./hooks/useMove";
import PokemonImageType from "@/components/molecule_extends/pokemonImageType/PokemonImageType";
import Option from "@client/common/interface/option.interface";
//#endregion

export const PostSampleCard: React.FC = () => {
  // 기술을 제외한 모든값의 상태변수 (useContext, useReduce)
  const { state, dispatch } = useSampleCard();
  // 기술만을 관리하는 상태관리 변수
  const { moves, handleMoveChange } = useMoveSelect();
  //Stat 변경 함수
  const handleStatChange = (field: string, value: number) => {
    dispatch({ type: "SET_IV_STAT", payload: { field, value } });
  };
  //개체값 변경 함수
  const handleEvStatChange = (field: string, value: number) => {
    dispatch({ type: "SET_EV_STAT", payload: { field, value } });
  };
  //타입 출력을 위한 단순 읽기 상태변수
  const [type, setType] = useState<Option[] | Option | null>(null);

  useEffect(() => {
    if (!state.pokemon) {
      console.log("에러");
      return;
    }
  }, [state.pokemon]);

  return (
    <>
      <div className="bg-gray-200 w-full sm:w-[600px] max-w-[1200px] p-8 sm:p-12 rounded-lg shadow-md flex flex-col sm:flex-row">
        <div>
          <PokemonImageType
            pokedex={state.pokemon ? state.pokemon.value : null}
            type={type ? type : null}
          />
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default PostSampleCard;

// <div className="flex flex-col items-center justify-center min-h-screen space-y-12 px-4 sm:px-8 lg:px-16">

//

//           <div className="space-y-4 w-full sm:w-[200px]">
//             <ItemSelect
//               onItemChange={(item) =>
//                 dispatch({ type: "SET_ITEM", payload: item })
//               }
//               className="text-center w-full"
//             />
//             <TeraTypeSelect
//               selectedType={state.tera}
//               onTypeChange={(tera) =>
//                 dispatch({ type: "SET_TERA", payload: tera })
//               }
//               className="text-center w-full"
//             />
//             <NatureSelect
//               onNatureChange={(nature) => {
//                 dispatch({ type: "SET_NATURE", payload: nature });
//               }}
//               className="text-center w-full"
//             />
//           </div>
//         </div>
//         {/* 스킬버튼 */}
//         <div className="flex flex-col items-center justify-center w-[600px] ">
//           <div className="bg-yellow-400 w-full h-14 rounded"></div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full h-auto bg-gray-300 rounded items-center p-4 mt-2">
//             <div className="w-full h-8 bg-gray-500 rounded"></div>
//             <div className="w-full h-8 bg-gray-500 rounded"></div>
//             <div className="w-full h-8 bg-gray-500 rounded"></div>
//             <div className="w-full h-8 bg-gray-500 rounded"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
