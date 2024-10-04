"use client";
// import PostSampleCard from "@/components/organism/postSampleCard/postSampleCard";
import SamplePostTemplate from "@/components/template/sampleTemplate/samplePostTemplate";
const POST: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <SamplePostTemplate />
      <footer className="mt-96">
        <p className="text-gray-500 text-sm">
          Pokémon and All Respective Names are Trademark & © of Nintendo
          1996-2023
        </p>
      </footer>
    </div>
  );
};
export default POST;
