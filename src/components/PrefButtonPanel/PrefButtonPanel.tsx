import useSWR from "swr";
import { getResasData } from "lib/api";
import PrefButton from "components/PrefButtonPanel/PrefButton";
import { ResasPref } from "lib/type";

const PrefButtonPanel = ({
  prefDatas,
}: {
  prefDatas: Array<ResasPref>;
}) => {
  return (
    <ul className="pref-button-panel">
      {prefDatas.map((elem: ResasPref) => {
        return (
          <li key={elem.prefCode}>
            <PrefButton prefData={elem} />
          </li>
        );
      })}
    </ul>
  );
};

export default PrefButtonPanel;
