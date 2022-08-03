import {cn} from "../../utils/bem";
import {BarModeProp} from "./DatasetBar/helpers";
import {TextFieldPropName, TextFieldPropValue} from "../TextField/helpers";

export type ViewObjectProps = {
  hiddenPanelActions: any[];
  eURI: string;
  name?: TextFieldPropName;
  value: TextFieldPropValue;
};

export type TableAgProps = {
  className?: string;
  rowData?: any[];
  columnDefs?: any[];
  height: number;
  width: number;
  fullScreenOn: boolean;
  barMode?: BarModeProp;
  viewObject: ViewObjectProps;
  isTabItem: boolean;
  datasetViewMaxWidth?: number;
};

export const cnTableAg = cn('TableAg');

export const getHeight = (fullScreenOn : boolean | undefined, height: number | undefined) => fullScreenOn ?  window.innerHeight - 90 : height ? height : 510;
