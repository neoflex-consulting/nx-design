import * as React from "react";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import {TableAgProps} from "./helpers";
import {DatasetBar} from "./DatasetBar/DatasetBar";
import {DatasetGrid} from "./DatasetGrid/DatasetGrid";
import {cnDatasetBar} from "./DatasetBar/helpers";
import Fullscreen from "react-full-screen";
import './TableAg.css';

export const TableAg = React.forwardRef<HTMLDivElement, TableAgProps>((props, ref) => {

  const {
    rowData,
    className,
    columnDefs,
    height,
    width,
    fullScreenOn,
    ...otherProps
  } = props;

  return (
    <div className={"dataset-view"}>
      <Fullscreen
        enabled={fullScreenOn}
      >
        <DatasetBar
          className={cnDatasetBar('Fullscreen',[className])}
          {...otherProps}
        />
        <DatasetGrid rowData={rowData} columnDefs={columnDefs} height={height} width={width} {...otherProps}/>
      </Fullscreen>
    </div>
  )

})
