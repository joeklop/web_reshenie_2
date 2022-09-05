import { IHeaderTable, MonthType } from "lib/models/ITableModel";
import { getMonthIndex } from "lib/services/services";

export const getMountTable = (): IHeaderTable[] => {
  const currentMount = new Date().getMonth() + 1;
  const mountArr: IHeaderTable[] = [];
  let id = 6;

  for (let i = currentMount - 5; i <= currentMount; i++) {
    mountArr.push({
      id,
      title: getMonthIndex(i),
      keyName: `mounth${id - 5}` as MonthType,
    });
    id += 1;
  }

  console.log(mountArr);

  return mountArr;
};
