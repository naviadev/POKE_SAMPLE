"use client";
// import PostSampleCard from "@/components/organism/postSampleCard/postSampleCard";
import WrappedPostSampleCard from "@/components/organism/postSampleCard/sampleCard";
const POST: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-600">
      {/* <PostSampleCard></PostSampleCard> */}

      <WrappedPostSampleCard></WrappedPostSampleCard>
    </div>
  );
};
export default POST;
