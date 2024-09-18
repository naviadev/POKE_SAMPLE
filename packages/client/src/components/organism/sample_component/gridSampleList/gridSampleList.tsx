import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import SampleItem from "@/components/molecule_extends/sampleItem/sampleItem";
import { SampleData } from "@/components/molecule_extends/sampleItem/interface/sampleItem.props";

interface GridSampleListProps {
  setInfoIndex: (newIndex: number) => void;
}

const GridSampleList: React.FC<GridSampleListProps> = ({ setInfoIndex }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3001/sample/query/latest");
    const allData = await res.json();
    setData(allData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 그리드를 통해 샘플을 출력하는 컴포넌트
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">샘플</h2>
      {/* Grid Div */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {data?.map((value: SampleData, index) => (
          <SampleItem
            key={index}
            index={value.index}
            sampleData={value}
            onClick={() => {
              setInfoIndex(value.index);
            }}
          />
        ))}
      </section>
    </div>
  );
};

export default React.memo(GridSampleList);
