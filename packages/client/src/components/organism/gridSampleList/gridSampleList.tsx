"use client";
import { useEffect, useState } from "react";

const GridSampleList = () => {
  const [data, setData] = useState<[]>();
  const fetchData = async () => {
    const res = await fetch("http://localhost:3001/sample/query/all");
    const allData = await res.json();
    setData(allData);
    console.log(allData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h3 className="text-lg font-bold mb-4">Grid View</h3>
      <div className="grid grid-cols-4 gap-4">
        {
          // data?.map((value)=>{
          //   return(<div key = "" className="w-full h-24 bg-gray-300 rounded">{value}</div>)
          // })
          }

        {/* <div className="w-full h-24 bg-gray-300 rounded"></div>
        <div className="w-full h-24 bg-gray-300 rounded"></div>
        <div className="w-full h-24 bg-gray-300 rounded"></div>
        <div className="w-full h-24 bg-gray-300 rounded"></div>
        <div className="w-full h-24 bg-gray-300 rounded"></div>
        <div className="w-full h-24 bg-gray-300 rounded"></div>
        <div className="w-full h-24 bg-gray-300 rounded"></div> */}
      </div>
    </>
  );
};

export default GridSampleList;
