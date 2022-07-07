import * as React from "react";
import {GridPanelProps} from "./helpers";
import './../DatasetBar/DatasetBar.css';

import {
  adaptiveBarColumnFlex,
  cnDatasetBar,
  componentsProp,
  fillSpace,
  minHeight, searchTransform
} from "../DatasetBar/helpers";
import {usePropsHandler} from "../../EventInterceptor/usePropsHandler";
import {SearchTransformer} from "../SearchTransformer/SearchTransformer";
import {TextField} from "../../TextField/TextField";

export const GridPanel = React.forwardRef<HTMLDivElement, GridPanelProps>((props, ref) => {

  const gridPanelRef = React.useRef<HTMLDivElement>(null);

  const {
    className,
    maxWidth,
    barSize,
    hiddenComponents,
    ...otherProps
  } = usePropsHandler(cnDatasetBar(), props, gridPanelRef);

  return (
    <div
      ref={gridPanelRef}
      style={{maxWidth: maxWidth ? maxWidth : undefined}}
      className={cnDatasetBar('Header',{adaptiveBarColumnFlex: adaptiveBarColumnFlex(barSize), minHeight: minHeight(barSize)}, [className])}
      {...otherProps}
    >
      <div
        className={cnDatasetBar('Header',{mainGridPanel: true, block: true, flexBarItem: true, fillSpace: fillSpace(barSize)}, [className])}
      >
        {
          ( hiddenComponents === undefined || !hiddenComponents.includes(componentsProp[0]) ) &&
          ( searchTransform(barSize) ? <SearchTransformer/> : <TextField label="Поле два" type="text" placeholder="default"/>)
        }
      </div>

      "GridPanel"
    </div>
  )

})
