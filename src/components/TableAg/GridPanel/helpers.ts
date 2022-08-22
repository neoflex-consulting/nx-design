import {cn} from "../../../utils/bem";
import {AdaptiveElementSize, BarModeProp, ComponentsProp} from "../DatasetBar/helpers";

export type GridPanelProps = {
  className?: string;
  maxWidth?: number;
  barSize?: AdaptiveElementSize;
  barMode?: BarModeProp;
  hiddenComponents?: (ComponentsProp)[];
  isEditButtonVisible?: boolean;
  isFullScreenOn?: boolean;
  isQuickSearchExpanded?: boolean;
};

export const cnGridPanel = cn('GridPanel');
