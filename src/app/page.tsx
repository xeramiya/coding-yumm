import React from "react";
import PrefChart from "components/PrefChart";
import PrefButtonPanel from "components/PrefButtonPanel/PrefButtonPanel";
import DemogrButtonPanel from "components/DemogrButtonPanel";
import { CheckedPrefsProvider } from "context/CheckedPrefsProvider";
import { SelectedDemogrProvider } from "context/SelectedDemogrProvider";
import { getResasData } from "lib/api";
import { ResasPref, ResasPrefPopComp } from "lib/type";

export default async function Home() {
  // RESAS APIから都道府県一覧を取得
  const prefDatas: Array<ResasPref> = await getResasData(`api/v1/prefectures`);
  // RESAS APIから全都道府県の人口構成を取得
  const prefPopComps: Array<ResasPrefPopComp> = await Promise.all(
    prefDatas.map(async (elem) => {
      const params = `api/v1/population/composition/perYear?prefCode=${elem.prefCode}&cityCode=-`;
      return await getResasData(params);
    })
  );

  return (
    <div>
      <CheckedPrefsProvider>
        <SelectedDemogrProvider>
          <article>
            <section>
              <h3 className="section-caption">都道府県別人口推移グラフ</h3>
              <PrefChart prefDatas={prefDatas} prefPopComps={prefPopComps} />
            </section>
            <hr />
            <section>
              <h3 className="section-caption">人口構成切替ボタン</h3>
              <DemogrButtonPanel />
            </section>
            <section>
              <h3 className="section-caption">都道府県選択ボタン</h3>
              <PrefButtonPanel prefDatas={prefDatas} />
            </section>
          </article>
        </SelectedDemogrProvider>
      </CheckedPrefsProvider>
    </div>
  );
}