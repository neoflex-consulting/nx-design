import * as React from "react";
import './../DatasetBar/DatasetBar.css';
import {usePropsHandler} from "../../EventInterceptor/usePropsHandler";
import {cnDatasetBar} from "../DatasetBar/helpers";
import {SearchTransformerProps} from "./helpers";
import {TextField} from "../../TextField/TextField";
import {cnEditPanel} from "../EditPanel/helpers";
import {Button} from "../../Button/Button";
import {IconClose} from "../../../icons/IconClose/IconClose";

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
      className={className}
    >
      <TextField
        className={cnEditPanel('Search', {input: true})}
        type="text"
        placeholder="default"
      />
      <Button
        className={cnEditPanel('Search', {button: true})}
        view={"link"}
        iconLeft={IconClose}
        onlyIcon
      />

      {/*<SearchTransformer*/}
      {/*  id={"searchTransformer"}*/}
      {/*  className={this.state.isQuickSearchExpanded ? "flex-bar-item fill-space" : "flex-bar-item"}*/}
      {/*  placeholder={"quick filter"}*/}
      {/*  onChange={this.props.onFilterChange}*/}
      {/*  onExpand={()=>this.setState({isQuickSearchExpanded:true})}*/}
      {/*  onCollapse={()=>this.setState({isQuickSearchExpanded:false})}*/}
      {/*/>*/}
    </div>
  )

})
