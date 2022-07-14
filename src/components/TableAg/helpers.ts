import {cn} from "../../utils/bem";

export type TableAgProps = {
  className?: string;
  rowData?: any[];
  columnDefs?: any[];
  height: number;
  width: number;
  fullScreenOn: boolean;
};

export const cnTableAg = cn('TableAg');
