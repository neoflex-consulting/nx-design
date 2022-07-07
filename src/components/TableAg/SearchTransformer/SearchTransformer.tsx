import * as React from "react";
import './../DatasetBar/DatasetBar.css';
import {usePropsHandler} from "../../EventInterceptor/usePropsHandler";
import {cnDatasetBar} from "../DatasetBar/helpers";
import {SearchTransformerProps} from "./helpers";


export const SearchTransformer = React.forwardRef<HTMLDivElement, SearchTransformerProps>((props, ref) => {

  const searchRef = React.useRef<HTMLDivElement>(null);

  const {
    className,
    barSize,
    ...otherProps
  } = usePropsHandler(cnDatasetBar(), props, searchRef);

  return (
    <div
      ref={searchRef}
      {...otherProps}
    >
      SearchTransformer
    </div>
  )

})
