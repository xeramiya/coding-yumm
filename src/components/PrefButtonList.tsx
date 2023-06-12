import useSWR from "swr";
import { getResasData } from "lib/api";
import PrefButton from "components/PrefButton";

type ResasPrefecture = {
  prefCode: number;
  prefName: string;
};

const PrefButtonList = async ({ prefDatas }: { prefDatas: Array<ResasPrefecture> }) => {
  return (
    <ul>
      {prefDatas.map((elem: ResasPrefecture) => {
        return (
          <li key={elem.prefCode}>
            <PrefButton prefData={elem} />
          </li>
        );
      })}
    </ul>
  );
};

export default PrefButtonList;
