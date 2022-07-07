import {cn} from "../../../utils/bem";

export type DatasetGridProps = {
  className?: string;
  rowData?: any[],
  columnDefs?: any[],
  height?: number,
  width?: number
};

export const cnTableAg = cn('DatasetGrid');
