import { Suspense } from "react";
import PrefButtonList from "components/PrefButtonList";
import Graph from "components/Graph";
import { getResasData } from "lib/api";

export default async function Home() {
  return (
    <div>
      <article>
        <section>
          <Graph />
        </section>
        <hr />
        <section>
          <PrefButtonList />
        </section>
      </article>
    </div>
  );
}
