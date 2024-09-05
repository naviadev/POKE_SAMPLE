import GridSampleList from "@/components/organism/gridSampleList/gridSampleList";
import SampleInfoCard from "@/components/organism/sampleInfoCard/sampleInfoCard";
import SampleList from "@/components/organism/sampleList/sampleList";
import TopNavigator from "@/components/organism/topNavigator/topNavigator";

const SamplePageTemplate = () => {
  return (
    <>
      {/* 상단 내비게이션 바 */}
      <TopNavigator></TopNavigator>

      <div className="min-h-screen bg-gray-100 w-screen flex justify-center items-center pt-7">
        {/* 메인 컨텐츠 */}
        <main className="flex p-4 w-9/12 gap-6">
          {/* 왼쪽 카드 섹션 */}
          <SampleInfoCard></SampleInfoCard>

          {/* 오른쪽 컨텐츠 섹션 */}
          <section className="w-3/4 p-4">
            {/* 목록 섹션 */}
            <SampleList></SampleList>
            {/* 그리드 뷰 섹션 */}
            <GridSampleList></GridSampleList>
          </section>
        </main>
      </div>
    </>
  );
};
export default SamplePageTemplate;
