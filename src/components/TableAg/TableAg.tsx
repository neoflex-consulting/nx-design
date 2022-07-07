import * as React from "react";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import {TableAgProps} from "./helpers";
import {DatasetBar} from "./DatasetBar/DatasetBar";
import {DatasetGrid} from "./DatasetGrid/DatasetGrid";

export const TableAg = React.forwardRef<HTMLDivElement, TableAgProps>((props, ref) => {

  const {
    rowData,
    className,
    columnDefs,
    height,
    width,
    ...otherProps
  } = props;

  return (
    <div>
      <DatasetBar className={className} {...otherProps}/>
      <DatasetGrid rowData={rowData} columnDefs={columnDefs} height={height} width={width} {...otherProps}/>
    </div>
  )

})
