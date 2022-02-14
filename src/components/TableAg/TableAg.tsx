import './TableAg.css';

import React from "react";

import {cnTableAg, TableAgProps} from './helpers';
import {usePropsHandler} from "../EventInterceptor/usePropsHandler";
import {cnCheckbox} from "../Checkbox/Checkbox";

export const TableAg = React.forwardRef<HTMLLabelElement, TableAgProps>((props, ref) => {
  const tableAgRef = React.useRef<HTMLDivElement>(null);

  const {
    className,
    ...otherProps
  } = usePropsHandler(cnCheckbox(), props, tableAgRef);

  return (
    <div
      ref={tableAgRef}
      className={cnTableAg(
        {},
        [className],
      )}
      {...otherProps}
    >
    </div>
  )

})
