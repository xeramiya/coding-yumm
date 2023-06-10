import { Suspense } from "react";
import PrefButtonList from "components/PrefButtonList"
import { getResasData } from "lib/api";

export default async function Home() {
  return (
    <div>
      <article>
        <section>グラフ (固定)</section>
        <section>
          <PrefButtonList />
        </section>
      </article>
    </div>
  );
}
