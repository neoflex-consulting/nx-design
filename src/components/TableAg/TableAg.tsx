import './TableAg.css';

import * as React from "react";

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import {TableAgProps} from "./helpers";

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
    <div
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
