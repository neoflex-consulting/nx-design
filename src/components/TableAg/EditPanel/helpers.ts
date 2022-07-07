import {cn} from "../../../utils/bem";
import {AdaptiveElementSize} from "../DatasetBar/helpers";

export type EditPanelProps = {
  className?: string;
  maxWidth?: number;
  barSize?: AdaptiveElementSize;
  isInsertRowHidden?: boolean;
};

export const cnEditPanel = cn('EditPanel');
