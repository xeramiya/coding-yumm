import { Suspense } from "react";
import PrefButtonList from "components/PrefButtonList";
import PrefChart from "components/PrefChart";
import { getResasData } from "lib/api";

export default async function Home() {
  const prefDatas = await getResasData(`api/v1/prefectures`);
  // const prefPopulations = getResasData(`api/v1/population/composition/perYear`);

  console.log(prefDatas)
  return (
    <div>
      <article>
        <section className="bg-amber-300">
          <PrefChart />
        </section>
        <hr />
        <section><PrefButtonList prefDatas={prefDatas} /></section>
      </article>
    </div>
  );
}
