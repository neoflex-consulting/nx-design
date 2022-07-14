import * as React from "react";
import {cnGridPanel, GridPanelProps} from "./helpers";
import './../DatasetBar/DatasetBar.css';
import './GridPanel.css';
import { TextField } from '../../TextField/TextField';

import {
  checkBarSize,
  checkBarSizeIsZero,
  checkBarSizeIsNotZero,
  cnDatasetBar,
  minHeight,
  componentsProp
} from "../DatasetBar/helpers";
import {usePropsHandler} from "../../EventInterceptor/usePropsHandler";
import {SearchTransformer} from "../SearchTransformer/SearchTransformer";
import {ContextMenu} from "../../ContextMenu/ContextMenu";
import {Button} from "../../Button/Button";
import {IconPlus} from "../../../icons/IconPlus/IconPlus";
import {useRef} from "react";
import {ActionButtons} from "../ActionButtons/ActionButtons";

export const GridPanel = React.forwardRef<HTMLDivElement, GridPanelProps>((props, ref) => {

  const gridPanelRef = React.useRef<HTMLDivElement>(null);

  const {
    className,
    maxWidth,
    barSize,
    hiddenComponents,
    isEditButtonVisible,
    isFullScreenOn,
    isQuickSearchExpanded = true,
    ...otherProps
  } = usePropsHandler(cnDatasetBar(), props, gridPanelRef);

  const adaptiveActionMenuVisible = hiddenComponents !== undefined && !(
    (hiddenComponents.includes("filter") || !(checkBarSize(barSize, 1))) &&
    (hiddenComponents.includes("highlights") || !(checkBarSize(barSize, 1))) &&
    (hiddenComponents.includes("sort") || !(checkBarSize(barSize, 1))) &&
    hiddenComponents.includes("calculator") &&
    hiddenComponents.includes("aggregations") &&
    hiddenComponents.includes("diagram") &&
    hiddenComponents.includes("groupBy") &&
    hiddenComponents.includes("hiddenColumns") &&
    hiddenComponents.includes("versions") &&
    hiddenComponents.includes("pivot") &&
    (hiddenComponents.includes("edit") || !isEditButtonVisible)
  );

  const items: string[] = ['Пункт 1', 'Пункт 2', 'Пункт 3'];
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div
      ref={gridPanelRef}
      style={{maxWidth: maxWidth ? maxWidth : undefined}}
      className={cnDatasetBar('Header',{adaptiveBarColumnFlex: checkBarSizeIsZero(barSize), minHeight: minHeight(barSize), flexBarItem: true, fillSpace: checkBarSizeIsNotZero(barSize)}, [className])}
      {...otherProps}
    >
      <div className={cnDatasetBar('GridPanel')} >
          {
            ( hiddenComponents === undefined || !hiddenComponents.includes(componentsProp[0]) ) &&
            ( checkBarSize(barSize, 2)
              ? <SearchTransformer/>
              : <TextField className={cnGridPanel('TextField')}

                           id="quickFilter" type="text" placeholder="quick filter"/>)
          }
        {/*{isFullScreenOn && <>*/}
        {/*  <div className={cnDatasetBar('VerticalLine')} />*/}
        {/*  <NeoSelect defaultValue={this.props.zoom} width={"75px"} style={{marginTop: "4px"}} className={"zoom-input"} onChange={(value: any) => {this.props.onZoomChange(value)}}*/}
        {/*             getPopupContainer={() => document.getElementById ("gridPanel") as HTMLElement}*/}
        {/*  >*/}
        {/*    <Select.Option value="50%">50%</Select.Option>*/}
        {/*    <Select.Option value="75%">75%</Select.Option>*/}
        {/*    <Select.Option value="90%">90%</Select.Option>*/}
        {/*    <Select.Option value="100%">100%</Select.Option>*/}
        {/*    <Select.Option value="125%">125%</Select.Option>*/}
        {/*    <Select.Option value="150%">150%</Select.Option>*/}
        {/*    <Select.Option value="200%">200%</Select.Option>*/}
        {/*  </NeoSelect>*/}
        {/*</>}*/}
        {/*{!isQuickSearchExpanded && adaptiveActionMenuVisible && (hiddenComponents === undefined || !hiddenComponents.includes("search") )*/}
        {/*  && <div className={checkBarSize(barSize, 2) ? cnDatasetBar('VerticalLine') : cnDatasetBar('AdaptiveBarHidden')}/>}*/}

        {/*<Button iconLeft={IconPlus} ref={buttonRef} />*/}
        {/*<ContextMenu*/}
        {/*  items={items}*/}
        {/*  getLabel={(item) => item}*/}
        {/*  anchorRef={buttonRef}*/}
        {/*  direction="downStartLeft"*/}
        {/*/>*/}
        {isQuickSearchExpanded &&
        <ActionButtons
          hiddenComponents={[]}
          barSize={"large"}
          hiddenColumns={[]}
          highlights={[]}
          isServerFunctionsHidden={false}
          serverFiltersCheck={false}
        />}

      </div>



    </div>
  )

})
