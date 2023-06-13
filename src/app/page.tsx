import { Suspense } from "react";
import PrefButtonList from "components/PrefButtonList";
import PrefChart from "components/PrefChart";
import { getResasData } from "lib/api";
import { ResasPref, ResasPrefPopComp } from "lib/type";

export default async function Home() {
  // RESAS APIから都道府県一覧を取得
  const prefDatas: Array<ResasPref> = await getResasData(`api/v1/prefectures`);
  // RESAS APIから人口構成を取得
  const prefPopComps: Array<ResasPrefPopComp> = await Promise.all(prefDatas.map(async (elem) => {
    const params = `api/v1/population/composition/perYear?prefCode=${elem.prefCode}&cityCode=-`;
    return await getResasData(params);
  }));

  return (
    <div>
      <article>
        <section className="bg-amber-300">
          <PrefChart prefPopComps={prefPopComps}/>
        </section>
        <hr />
        <section>
          <PrefButtonList prefDatas={prefDatas} />
        </section>
      </article>
    </div>
  );
}
