// import {cn} from "../../../utils/bem";
import {AdaptiveElementSize, BarModeProp, ComponentsProp} from "../DatasetBar/helpers";

export type GridPanelProps = {
  className?: string;
  maxWidth?: number;
  barSize?: AdaptiveElementSize;
  barMode?: BarModeProp;
  hiddenComponents?: (ComponentsProp)[];
};

// export const cnGridPanel = cn('GridPanel');
