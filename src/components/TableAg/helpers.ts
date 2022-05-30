import {cn} from "../../utils/bem";

export type TableAgProps = {
  className?: string;
  rowData?: any[],
  columnDefs?: any[],
  height: number,
  width: number
};

export const cnTableAg = cn('TableAg');
