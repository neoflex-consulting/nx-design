import './DatasetGrid.css';

import * as React from "react";

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import {DatasetGridProps} from "./helpers";

export const DatasetGrid = React.forwardRef<HTMLDivElement, DatasetGridProps>((props, ref) => {

  const datasetGridRef = React.useRef<HTMLDivElement>(null);

  const {
    rowData,
    className,
    columnDefs,
    height,
    width,
    ...otherProps
  } = props;

  return (
    <div
      ref={datasetGridRef}
      className={`ag-theme-material ${className}`}
      style={{height: height, width: width}}
      {...otherProps}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}>
      </AgGridReact>
    </div>
  )

})
