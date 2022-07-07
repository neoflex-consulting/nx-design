import './DatasetBar.css';

import * as React from "react";

import {adaptiveElementSizeDefault, barModeProp, barModePropDefault, DatasetBarProps} from "./helpers";
import {EditPanel} from "../EditPanel/EditPanel";
import {DiagramPanel} from "../DiagramPanel/DiagramPanel";
import {GridPanel} from "../GridPanel/GridPanel";

export const DatasetBar = React.forwardRef<HTMLDivElement, DatasetBarProps>((props, ref) => {

  const datasetBarRef = React.useRef<HTMLDivElement>(null);

  const {
    className,
    barSize,
    isQuickSearchExpanded = false,
    isExportChecked = false,
    barMode,
    ...otherProps
  } = props;

  const barSizeCurrent = barSize !== undefined ? barSize : adaptiveElementSizeDefault;
  const barModeCurrent = barMode !== undefined ? barMode : barModePropDefault;

  return (
    <div
      ref={datasetBarRef}
      {...otherProps}
    >
      {
        barMode === barModePropDefault
          ? <EditPanel/>
          : barMode === barModeProp[1]
            ? <DiagramPanel/>
          : <GridPanel barSize={barSizeCurrent} barMode={barModeCurrent}/>
      }
    </div>
  )

})

