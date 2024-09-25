import NavigatorButton from "@/components/molecule/navigatorButton/navigatorButton";
import GridSampleList from "@/components/organism/sample_component/gridSampleList/gridSampleList";
import SampleInfoCard from "@/components/organism/sample_component/sampleInfoCard/sampleInfoCard";
import SampleList from "@/components/organism/sampleList/sampleList";
import { useCallback, useState } from "react";
import { SamplePageProvider, useContextSamplePage } from "../../../../common/context/useSamplePageContext";

const SamplePageTemplate = () => {



  return (
    <div className="min-h-screen bg-slate-100 w-full flex justify-center items-center">
      <div className="w-9/12 flex justify-between">
        <SamplePageProvider>
          {/* 왼쪽 고정 섹션 */}
          <aside className="fixed left-1/2 transform -translate-x-[600px]">
            <div className="py-6">
              <SampleInfoCard />
            </div>
          </aside>
          {/* 오른쪽 스크롤 가능한 섹션 */}
          <main className="w-3/4 ml-auto py-6">
            <section className="p-4">
              {/* 목록 섹션 */}
              <SampleList />
              {/* 그리드 뷰 섹션 */}
              <GridSampleList/>
            </section>
          </main>

          <NavigatorButton />
        </SamplePageProvider>
      </div>
    </div>
  );
};

export default SamplePageTemplate;
