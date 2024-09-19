import NavigatorButton from "@/components/molecule/navigatorButton/navigatorButton";
import GridSampleList from "@/components/organism/sample_component/gridSampleList/gridSampleList";
import SampleInfoCard from "@/components/organism/sample_component/sampleInfoCard/sampleInfoCard";
import SampleList from "@/components/organism/sampleList/sampleList";
import { useCallback, useState } from "react";

const SamplePageTemplate = () => {
  const [details, setDetails] = useState<number>(1);

  const handleSetDetails = useCallback((newIndex: number) => {
    setDetails(newIndex);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 w-full flex justify-center items-center">
      <div className="w-9/12 flex justify-between">
        {/* 왼쪽 고정 섹션 */}
        <aside className="fixed left-1/2 transform -translate-x-[600px]">
          <div className="py-6">
            <SampleInfoCard index={details} />
          </div>
        </aside>
        {/* 오른쪽 스크롤 가능한 섹션 */}
        <main className="w-3/4 ml-auto py-7">
          <section className="p-4">
            {/* 목록 섹션 */}
            <SampleList />
            {/* 그리드 뷰 섹션 */}
            <GridSampleList setInfoIndex={handleSetDetails} />
          </section>
        </main>

        <NavigatorButton />
      </div>
    </div>
  );
};

export default SamplePageTemplate;
