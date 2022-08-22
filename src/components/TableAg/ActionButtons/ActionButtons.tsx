import * as React from "react";
import {ActionButtonsProps, renderIcon} from "./helpers";
import './../DatasetBar/DatasetBar.css';

import {checkBarSize, cnDatasetBar} from "../DatasetBar/helpers";
import {usePropsHandler} from "../../EventInterceptor/usePropsHandler";
import {Button} from "../../Button/Button";
import {IconFilter} from "../../../icons/IconFilter/IconFilter";
import {IconFilterCheck} from "../../../icons/IconFilterCheck/IconFilterCheck";

export const ActionButtons = React.forwardRef<HTMLDivElement, ActionButtonsProps>((props, ref) => {

  const actionButtonsRef = React.useRef<HTMLDivElement>(null);

  const {
    className,
    hiddenColumns,
    hiddenComponents,
    highlights,
    serverFiltersCheck,
    isServerFunctionsHidden,
    barSize,
    ...otherProps
  } = usePropsHandler(cnDatasetBar(), props, actionButtonsRef);

  const hiddenColumnsEnable = hiddenColumns.find(e=>e.enable === false);

  const filterButton = !(hiddenComponents.includes("filter")
      && hiddenComponents.includes("highlights"))
    && <Button
      className={cnDatasetBar('BarButton', {marginMedium: true})}
      view={"link"}
      iconLeft={serverFiltersCheck && renderIcon(highlights) ? IconFilter : IconFilterCheck }
      onlyIcon
      title={"Фильтры"}
    />

  return !isServerFunctionsHidden ?
    <div
      className={cnDatasetBar('Header',{adaptiveBarHidden: checkBarSize(barSize, 1), flexBarItem: !checkBarSize(barSize, 1)}, [className])}
      {...otherProps}
    >
      {!hiddenComponents.includes("search") && <div className={cnDatasetBar('VerticalLine')} />}
      {filterButton}

    </div>
    :
    <div>

    </div>


})
