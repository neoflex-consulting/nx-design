import * as React from "react";
import {GridPanelProps} from "./helpers";
import './../DatasetBar/DatasetBar.css';

import {adaptiveBarColumnFlex, cnDatasetBar, fillSpace, minHeight} from "../DatasetBar/helpers";
import {usePropsHandler} from "../../EventInterceptor/usePropsHandler";

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
        className={cnDatasetBar('Header',{block: true, mainGridPanel: true, flexBarItem: true, fillSpace: fillSpace(barSize)})}
      >

        </div>
      {/*  {*/}
      {/*    ( hiddenComponents === undefined || !hiddenComponents.includes(componentsProp[0]) ) &&*/}
      {/*    ( searchTransform(barSize) ? <SearchTransformer/> : <TextField type="text" placeholder="default"/>)*/}
      {/*  }*/}


    </div>
  )

})
