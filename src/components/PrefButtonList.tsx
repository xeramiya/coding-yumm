import { getResasData } from "lib/api";

type ResasPrefecture = {
  prefCode: number;
  prefName: string;
};

const PrefButton = () => {
  return (
    <li>
      <div></div>
    </li>
  );
};

const PrefButtonList = async () => {
  const prefectures = await getResasData("api/v1/prefectures");
  console.log("PREFECTURES", prefectures);

  return (
    <ul>
      {prefectures.map((elem: ResasPrefecture) => {
        return (
          <li key={elem.prefCode}>
            <div>{elem.prefName}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default PrefButtonList;
