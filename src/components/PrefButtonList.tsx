import useSWR from "swr";
import { getResasData } from "lib/api";
import PrefButton from "components/PrefButton";

type ResasPrefecture = {
  prefCode: number;
  prefName: string;
};

const PrefButtonList = async () => {
  const prefectures = await getResasData("api/v1/prefectures");

  return (
    <ul>
      {prefectures.map((elem: ResasPrefecture) => {
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
