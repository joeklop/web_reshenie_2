import { IHeaderTable, MonthType } from "lib/models/ITableModel";
import { getMonthIndex } from "lib/services/services";

export const getMountTable = (): IHeaderTable[] => {
  const currentMount = new Date().getMonth();
  const mountArr: IHeaderTable[] = [];
  let id = 0;

  for (let i = currentMount - 5; i <= currentMount; i++) {
    mountArr.push({
      id: id + 6,
      keyName: `month${id}` as MonthType,
      title: getMonthIndex(i >= 0 ? i : 12 + i),
    });
    id++;
  }

  return mountArr;
};
