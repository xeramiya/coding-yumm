import React, { Suspense } from "react";
import PrefButtonList from "components/PrefButtonList";
import PrefChart from "components/PrefChart";
import { CheckedPrefsProvider } from "context/CheckedPrefsProvider";
import { getResasData } from "lib/api";
import { ResasPref, ResasPrefPopComp } from "lib/type";

export default async function Home() {
  // RESAS APIから都道府県一覧を取得
  const prefDatas: Array<ResasPref> = await getResasData(`api/v1/prefectures`);
  // RESAS APIから人口構成を取得
  const prefPopComps: Array<ResasPrefPopComp> = await Promise.all(
    prefDatas.map(async (elem) => {
      const params = `api/v1/population/composition/perYear?prefCode=${elem.prefCode}&cityCode=-`;
      return await getResasData(params);
    })
  );

  return (
    <div>
      <CheckedPrefsProvider>
        <article>
          <section>
            <h3>グラフ</h3>
            <PrefChart prefPopComps={prefPopComps} />
          </section>
          <hr />
          <section>
            <h3>ボタン</h3>
            <PrefButtonList prefDatas={prefDatas} />
          </section>
        </article>
      </CheckedPrefsProvider>
    </div>
  );
}
