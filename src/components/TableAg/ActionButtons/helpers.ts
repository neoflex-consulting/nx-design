import {AdaptiveElementSize, ComponentsProp} from "../DatasetBar/helpers";

export interface IServerQueryParam {
  index: number,
  datasetColumn?: string,
  operation?: string,
  value?: string,
  enable?: boolean,
  type?: string,
  mask?: string,
  highlightType?: string,
  backgroundColor?: string,
  color?: string
}

export type ActionButtonsProps = {
  className?: string;
  hiddenColumns: IServerQueryParam[];
  hiddenComponents: (ComponentsProp)[];
  highlights: IServerQueryParam[];
  serverFiltersCheck: boolean;
  isServerFunctionsHidden: boolean;
  barSize: AdaptiveElementSize;
}


export const renderIcon = (arr: IServerQueryParam[]) : boolean => !!arr.find(e=>e.datasetColumn && e.enable);
