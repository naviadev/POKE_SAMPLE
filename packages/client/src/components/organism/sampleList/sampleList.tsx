import React from "react";

const SampleList = () => {
  console.log("상관없는 컴포넌트 리렌더");
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-bold mb-2">Title</h3>
        <p className="text-sm">Author | Date</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-bold mb-2">Title</h3>
        <p className="text-sm">Author | Date</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-bold mb-2">Title</h3>
        <p className="text-sm">Author | Date</p>
      </div>
    </>
  );
};
export default React.memo(SampleList);
