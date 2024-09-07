import React from "react";
import StatText from "@/components/atom/sampleStatText";

interface SampleStatsProps {
  //추천수
  recommendCount: string;
  //조회수
  viewCount: string;
}

const SampleStats: React.FC<SampleStatsProps> = ({
  recommendCount,
  viewCount,
}) => {
  return (
    <div className="flex justify-center space-x-8 mt-4 text-center">
      <StatText value={recommendCount} label="추천" />
      <StatText value={viewCount} label="조회수" />
    </div>
  );
};

export default SampleStats;
