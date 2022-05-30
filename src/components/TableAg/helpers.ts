import {cn} from "../../utils/bem";

export type TableAgProps = {
  className?: string;
  rowData?: any[],
  columnDefs?: any[]
};

export const cnTableAg = cn('TableAg');
