import './DatasetBar.css';

import * as React from "react";

import {
  barModeProp,
  barModePropDefault, checkBarSize,
  checkBarSizeIsNotZero,
  checkBarSizeIsZero,
  DatasetBarProps,
  IServerQueryParam
} from "./helpers";
import {SearchTransformer} from "../SearchTransformer/SearchTransformer";
import {TextField} from "../../TextField/TextField";
import {Button} from "../../Button/Button";
import {IconFilter} from "../../../icons/IconFilter/IconFilter";
import {IconFilterCheck} from "../../../icons/IconFilterCheck/IconFilterCheck";
import {withTooltip} from "../../../hocs/withTooltip/withTooltip";
import {useState} from "react";
import {IconSortCheck} from "../../../icons/IconSortCheck/IconSortCheck";
import {IconSortDown} from "../../../icons/IconSortDown/IconSortDown";
import {IconCalculatorCheck} from "../../../icons/IconCalculatorCheck/IconCalculatorCheck";
import {IconCalculator} from "../../../icons/IconCalculator/IconCalculator";
import {IconPlusSCheck} from "../../../icons/IconPlusSCheck/IconPlusSCheck";
import {IconPlusSDoubleCheck} from "../../../icons/IconPlusSDoubleCheck/IconPlusSDoubleCheck";
import {IconPlusSDouble} from "../../../icons/IconPlusSDouble/IconPlusSDouble";
import {IconBarChartVCheck} from "../../../icons/IconBarChartVCheck/IconBarChartVCheck";
import {IconBarChartV} from "../../../icons/IconBarChartV/IconBarChartV";
import {IconGroupCheck} from "../../../icons/IconGroupCheck/IconGroupCheck";
import {IconGroup} from "../../../icons/IconGroup/IconGroup";
import {IconEyeInvCheck} from "../../../icons/IconEyeInvCheck/IconEyeInvCheck";
import {IconEye} from "../../../icons/IconEye/IconEye";
import {IconMark} from "../../../icons/IconMark/IconMark";
import {IconEdit} from "../../../icons/IconEdit/IconEdit";
import {IconTablePivotCheck} from "../../../icons/IconTablePivotCheck/IconTablePivotCheck";
import {IconTablePivot} from "../../../icons/IconTablePivot/IconTablePivot";
import {IconDelete} from "../../../icons/IconDelete/IconDelete";

export const DatasetBar = React.forwardRef<HTMLDivElement, DatasetBarProps>((props, ref) => {

  const datasetBarRef = React.useRef<HTMLDivElement>(null);

  const {
    className,
    barSize,
    isExportChecked = false,
    barMode,
    isFullScreenOn,
    viewObject,
    height,
    hiddenComponents,
    serverFilters,
    maxWidth,
    hiddenColumns,
    isEditButtonVisible,
    isServerFunctionsHidden,
    onFiltersClick,
    serverFiltersCheck,
    serverSortsCheck,
    serverCalculatedExpressionCheck,
    serverAggregatesCheck,
    groupByColumnCheck,
    isDeleteButtonVisible,
    pivotsCheck,
    diagrams,
    highlights,
    ...otherProps
  } = props;

  const [isQuickSearchExpanded, setIsQuickSearchExpanded] = useState<boolean>(true);

   // const barSizeCurrent = barSize !== undefined ? barSize : adaptiveElementSizeDefault;
  // const barModeCurrent = barMode !== undefined ? barMode : barModePropDefault;

  const getSearch = () => {
    return checkBarSize(barSize,2)
      ?
      <SearchTransformer
        className={isQuickSearchExpanded ? "flex-bar-item fill-space" : "flex-bar-item"}
      />
      :
      <TextField
        className={"search-input"}
        id="quickFilter"
        type="search"
        placeholder="quick filter"
      />

  };

  const getActionButtons = () => {
    const color = '#5E6785';
    function renderIcon(arr: IServerQueryParam[]) : boolean {
      return !!arr.find(e=>e.datasetColumn && e.enable)
    }
    hiddenColumns.find(e=>e.enable === false);

    const FilterButtonWithTooltip = withTooltip({
      content: 'filters'
    })(Button);
    const filterButton = !(hiddenComponents.includes("filter")
        && hiddenComponents.includes("highlights")) &&
     <FilterButtonWithTooltip
       className={"bar-button--margin-medium"}
       view={"link"}
       iconLeft={serverFiltersCheck || renderIcon(highlights) ? <IconFilterCheck color={color}/> : <IconFilter color={color}/>}
       onlyIcon
     />;

    const SortButtonWithTooltip = withTooltip({
      content: 'sorts'
    })(Button);
    const sortButton = !hiddenComponents.includes("sort") &&
      <SortButtonWithTooltip
        className={"bar-button--margin-small"}
        view={"link"}
        iconLeft={serverSortsCheck ? <IconSortCheck color={color}/> : <IconSortDown color={color}/>}
        onlyIcon
      />;

    const CalculatorButtonWithTooltip = withTooltip({
      content: 'calculator'
    })(Button);
    const calculatorButton = !hiddenComponents.includes("calculator") &&
      <CalculatorButtonWithTooltip
        className={"bar-button--margin-medium"}
        view={"link"}
        iconLeft={serverCalculatedExpressionCheck ? <IconCalculatorCheck color={color}/> : <IconCalculator color={color}/>}
        onlyIcon
      />;

    const AggregationButtonWithTooltip = withTooltip({
      content: 'calculator'
    })(Button);
    const aggregationButton = !hiddenComponents.includes("aggregations") &&
      <AggregationButtonWithTooltip
        className={"bar-button--margin-small"}
        view={"link"}
        iconLeft={serverAggregatesCheck ? <IconPlusSDoubleCheck color={color}/> : <IconPlusSDouble color={color}/>}
        onlyIcon
      />;

    const DiagramButtonWithTooltip = withTooltip({
      content: 'diagram'
    })(Button);
    const diagramButton = !hiddenComponents.includes("aggregations") &&
      <DiagramButtonWithTooltip
        className={"bar-button--margin-small"}
        view={"link"}
        iconLeft={diagrams.length > 0 ? <IconBarChartVCheck color={color}/> : <IconBarChartV color={color}/>}
        onlyIcon
      />;

    const GroupByButtonWithTooltip = withTooltip({
      content: 'grouping'
    })(Button);
    const groupByButton = !hiddenComponents.includes("groupBy") &&
      <GroupByButtonWithTooltip
        className={"bar-button--margin-small"}
        view={"link"}
        iconLeft={groupByColumnCheck ? <IconGroupCheck color={color}/> : <IconGroup color={color}/>}
        onlyIcon
      />;

    const HiddenColumnButtonWithTooltip = withTooltip({
      content: 'hiddencolumns'
    })(Button);
    const hiddenColumnButton = !hiddenComponents.includes("groupBy") &&
      <HiddenColumnButtonWithTooltip
        className={"bar-button--margin-small"}
        view={"link"}
        iconLeft={hiddenComponents.includes("hiddenColumns") ? <IconEyeInvCheck color={color}/> : <IconEye color={color}/>}
        onlyIcon
      />;

    const SaveButtonWithTooltip = withTooltip({
      content: 'save'
    })(Button);
    const saveButton = !hiddenComponents.includes("groupBy") &&
      <SaveButtonWithTooltip
        className={"bar-button--margin-medium"}
        view={"link"}
        iconLeft={<IconMark color={color}/>}
        onlyIcon
      />;

    const DeleteButtonWithTooltip = withTooltip({
      content: 'delete'
    })(Button);
    const deleteButton = !hiddenComponents.includes("versions") && isDeleteButtonVisible &&
      <DeleteButtonWithTooltip
        className={"bar-button--margin-small"}
        view={"link"}
        iconLeft={<IconDelete color={color}/>}
        onlyIcon
      />;

    const EditButtonWithTooltip = withTooltip({
      content: 'edit'
    })(Button);
    const editButton = !hiddenComponents.includes("edit") && isEditButtonVisible &&
      <EditButtonWithTooltip
        className={"bar-button--margin-medium"}
        view={"link"}
        iconLeft={<IconEdit color={color}/>}
        onlyIcon
      />;

    const PivotButtonWithTooltip = withTooltip({
      content: 'pivot'
    })(Button);
    const pivotButton = !hiddenComponents.includes("pivot") &&
      <PivotButtonWithTooltip
        className={"bar-button--margin-small"}
        view={"link"}
        iconLeft={pivotsCheck ? <IconTablePivotCheck color={color}/> : <IconTablePivot color={color}/>}
        onlyIcon
      />;

    return !isServerFunctionsHidden
      ?
      <div className={checkBarSize(barSize,1) ? "adaptive-bar-hidden"  : "flex-bar-item"} id="barItems">
        <div className={checkBarSize(barSize,1) ? "adaptive-bar-hidden"  : "flex-bar-item"}>
          {!hiddenComponents.includes("search") && <div className='vertical-line'/>}
          {filterButton}
          {sortButton}
          {(filterButton || sortButton) && <div className='vertical-line'/>}
        </div>
        <div className={checkBarSize(barSize,2) ? 'adaptive-bar-hidden' : 'flex-bar-item'}>
          {calculatorButton}
          {aggregationButton}
          {diagramButton}
          {groupByButton}
          {hiddenColumnButton}
          {pivotButton}
          {(calculatorButton || aggregationButton || diagramButton || groupByButton || hiddenColumnButton) && <div className='vertical-line'/>}
          {saveButton}
          {deleteButton}
          {(saveButton || deleteButton) && <div className='vertical-line'/>}
          {editButton}
        </div>
      </div>
      :
      <div className={checkBarSize(barSize,1) ? "adaptive-bar-hidden"  : "flex-bar-item"}>
        <div className={checkBarSize(barSize,2) ? "adaptive-bar-hidden"  : "flex-bar-item"}>
          <div className='vertical-line'/>
          {diagramButton}
          {hiddenColumnButton}
          {(diagramButton || hiddenColumnButton) && <div className='vertical-line'/>}
          {saveButton}
          {deleteButton}
          {(saveButton || deleteButton) && <div className='vertical-line'/>}
          {editButton}
        </div>
      </div>
  };


  const getGridPanel = () => {
    const adaptiveActionMenuVisible = !(
      (hiddenComponents.includes("filter") || !(checkBarSize(barSize,1))) &&
      (hiddenComponents.includes("highlights") || !(checkBarSize(barSize,1))) &&
      (hiddenComponents.includes("sort") || !(checkBarSize(barSize,1))) &&
      hiddenComponents.includes("calculator") &&
      hiddenComponents.includes("aggregations") &&
      hiddenComponents.includes("diagram") &&
      hiddenComponents.includes("groupBy") &&
      hiddenComponents.includes("hiddenColumns") &&
      hiddenComponents.includes("versions") &&
      hiddenComponents.includes("pivot") &&
      (hiddenComponents.includes("edit") || !isEditButtonVisible)
    );

    return <div
      style={{
        minHeight: checkBarSizeIsZero(barSize) ? "104px" : "56px",
        maxWidth: maxWidth ? maxWidth : undefined
      }}
      className={`${checkBarSizeIsZero(barSize) ? "functionalBar__header adaptive-bar-column-flex"  : "functionalBar__header"} `}
    >
      <div className={"main-grid-panel block flex-bar-item " + (checkBarSizeIsNotZero(barSize) && "fill-space")}>
        {!hiddenComponents.includes("search") && getSearch()}

        {/*{isFullScreenOn && <>*/}
        {/*  <div className='vertical-line'/>*/}
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
        {!isQuickSearchExpanded && adaptiveActionMenuVisible && !hiddenComponents.includes("search") && <div className={checkBarSize(barSize,2) ? "vertical-line" : "adaptive-bar-hidden"}/>}
        {/*{!isQuickSearchExpanded && adaptiveActionMenuVisible && <Dropdown*/}
        {/*  className={"adaptive-dropdown"}*/}
        {/*  getPopupContainer={() => document.getElementById (`gridPanel`) as HTMLElement}*/}
        {/*  overlay={this.getAdaptiveMenu()} placement="bottomRight">*/}
        {/*  <div*/}
        {/*    className={this.state.barSize <= barSize.medium ? "flex-bar-item" : "adaptive-bar-hidden"}>*/}
        {/*    <NeoIcon icon={"ellipsis-v"} size={"m"} color={NeoColor.violete_4}/>*/}
        {/*  </div>*/}
        {/*</Dropdown>}*/}

        {isQuickSearchExpanded && getActionButtons()}

        {/*<ActionButtons*/}
        {/*  hiddenComponents={[]}*/}
        {/*  barSize={"large"}*/}
        {/*  hiddenColumns={[]}*/}
        {/*  highlights={[]}*/}
        {/*  isServerFunctionsHidden={false}*/}
        {/*  serverFiltersCheck={false}*/}
        {/*/>}*/}

        GridPanel
      </div>

    </div>
  };

  const getDiagramPanel = () => {
    return <div>DiagramPanel</div>
  };

  const getEditPanel = () => {
    return <div>EditPanel</div>
  };

  return (
    <div
      ref={datasetBarRef}
      {...otherProps}
    >
      {
        barMode === barModePropDefault
          ? getGridPanel()
          : barMode === barModeProp[1]
            ? getDiagramPanel()
            : getEditPanel()
      }
    </div>
  )

})
