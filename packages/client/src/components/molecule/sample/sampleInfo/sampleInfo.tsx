// ProfileInfo.tsx (Molecule)
import React from "react";

interface SampleInfoProps {
  sampleName: string;
  partyType: string;
  sampleType: string;
}

const SampleInfo: React.FC<SampleInfoProps> = ({
  sampleName,
  partyType,
  sampleType,
}) => {
  return (
    <div className="text-center mt-12">
      <h2 className="text-xl font-bold">{sampleName}</h2>
      <div className="flex justify-center space-x-2 mt-1">
        <p className="text-green-500">{partyType}</p>
        <p className="text-blue-500">{sampleType}</p>
      </div>
    </div>
  );
};

export default SampleInfo;
