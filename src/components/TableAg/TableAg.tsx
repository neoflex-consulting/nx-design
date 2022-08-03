import * as React from "react";
import {useState} from "react";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import {getHeight, TableAgProps} from "./helpers";
import {DatasetBar} from "./DatasetBar/DatasetBar";
import {DatasetGrid} from "./DatasetGrid/DatasetGrid";
import Fullscreen from "react-full-screen";
import './TableAg.css';
import {
  AdaptiveElementSize,
  adaptiveElementSizeDefault,
  barModePropDefault,
  IServerQueryParam
} from "./DatasetBar/helpers";

export const TableAg = React.forwardRef<HTMLDivElement, TableAgProps>((props, ref) => {

  const {
    rowData,
    className,
    columnDefs,
    height,
    width,
    fullScreenOn,
    barMode = barModePropDefault,
    viewObject,
    isTabItem,
    datasetViewMaxWidth,
    ...otherProps
  } = props;

  const [fullScreen, setFullScreen] = useState<boolean>(fullScreenOn);
  const [barSize, setBarSize] = useState<AdaptiveElementSize>(adaptiveElementSizeDefault);
  const [serverFilters, setServerFilters] = useState<IServerQueryParam[]>([]);
  const [hiddenPanelActions, setHiddenPanelActions] = useState<any[]>(viewObject !== undefined ? viewObject.hiddenPanelActions : []);
  const [eURI, setEURI] = useState<string>(viewObject !== undefined ? viewObject.eURI : '');

  return (
    <div className={"dataset-view"} style={{width:'100%'}}>
      <Fullscreen
        enabled={fullScreen}
        onChange={value => setFullScreen(value)}
      >
        <div
          className={`${fullScreen ? "fullscreen-on" : undefined} ${className}`}
          style={{
            height: getHeight(fullScreen, height),
            position: 'relative'
          }}
        >
          <DatasetBar
            isFullScreenOn={fullScreen}
            className={className}

            onBarSizeChange={(newSize => setBarSize(newSize))}

            hiddenComponents={hiddenPanelActions}
            datasetComponentId={eURI}
            serverFilters={serverFilters}
            isTabItem={isTabItem}
            // rowData = {rowData}
            // columnDefs = {this.state.columnDefs}
            // isTabActive={this.props.isTabActive}
            hiddenColumns={[]}
            // serverAggregates={this.state.serverAggregates}
            // serverSorts={this.state.serverSorts}
            // serverGroupBy={this.state.serverGroupBy}
            // groupByColumn={this.state.groupByColumn}
            // serverCalculatedExpression={this.state.serverCalculatedExpression}
            highlights={[]}
            pivotsCheck={true}
            barMode={barMode}
            serverFiltersCheck={false}
            serverAggregatesCheck={false}
            serverSortsCheck={false}
            groupByColumnCheck={false}
            serverCalculatedExpressionCheck={false}
            // currentProfile={this.state.currentProfile}
            // allDatasetComponentProfiles={this.state.allDatasetComponentProfiles.map(r=>r.eContents()[0])}
            // onFilterChange={() => this.gridRef.current.onQuickFilterChanged()}
            // onFiltersClick={() => {
            //   this.isAllDrawersClosed()
            //     ? this.handleDrawerVisibility(userProfileParams.filter)
            //     : this.validateAllDrawerAndChangeVisibility(userProfileParams.filter);
            // }}
            // onSortsClick={() => {
            //   this.isAllDrawersClosed()
            //     ? this.handleDrawerVisibility(userProfileParams.sort)
            //     : this.validateAllDrawerAndChangeVisibility(userProfileParams.sort)
            // }}
            // onCalculatorClick={()=> {
            //   this.isAllDrawersClosed()
            //     ? this.handleDrawerVisibility(userProfileParams.calculations)
            //     : this.validateAllDrawerAndChangeVisibility(userProfileParams.calculations)
            // }}
            // onAggregationsClick={()=>{
            //   this.isAllDrawersClosed()
            //     ? this.handleDrawerVisibility(userProfileParams.aggregate)
            //     : this.validateAllDrawerAndChangeVisibility(userProfileParams.aggregate)
            // }}
            // onGroupingClick={()=>{
            //   this.isAllDrawersClosed()
            //     ? this.handleDrawerVisibility(userProfileParams.group)
            //     : this.validateAllDrawerAndChangeVisibility(userProfileParams.group)
            // }}
            // onPivotClick={async () => {
            //   this.isAllDrawersClosed()
            //     ? this.handleDrawerVisibility(userProfileParams.pivot)
            //     : this.validateAllDrawerAndChangeVisibility(userProfileParams.pivot)
            // }}
            // onHiddenClick={()=>{
            //   this.isAllDrawersClosed()
            //     ? this.handleDrawerVisibility(userProfileParams.hiddenColumns)
            //     : this.validateAllDrawerAndChangeVisibility(userProfileParams.hiddenColumns);
            // }}
            // onDiagramsClick={()=>{
            //   this.isAllDrawersClosed()
            //     ? this.DiagramButton()
            //     : this.validateAllDrawer().then(result => {
            //       if (result.every((isResolved=>isResolved))) {
            //         this.DiagramButton()
            //       }
            //     });
            // }}
            // onDeleteClick={()=>this.setState({deleteMenuVisible:!this.state.deleteMenuVisible})}
            // onSaveClick={()=>this.setState({saveMenuVisible:!this.state.saveMenuVisible})}
            // onFullscreenClick={()=>this.onFullScreen()}
            // onEditClick={() => {
            //   this.validateAllDrawer().then(result => {
            //     if (result.every((isResolved=>isResolved))) {
            //       //close all drawers
            //       this.handleDrawerVisibility(userProfileParams.filter, false);
            //       if (this.state.groupByColumn.filter(c => c.enable && c.datasetColumn).length > 0
            //         || this.state.serverGroupBy.filter(c => c.enable && c.datasetColumn).length > 0
            //         || this.state.serverAggregates.filter(c => c.enable && c.datasetColumn).length > 0
            //         || this.state.serverCalculatedExpression.filter(c => c.enable && c.datasetColumn).length > 0) {
            //         this.refresh(true, undefined, () => this.changeEditMode())
            //       } else {
            //         this.changeEditMode()
            //       }
            //     }
            //   });
            // }}
            // onChangeDatasetComponentProfile={(profile: string) => {
            //   if (profile) {
            //     this.onChangeDatasetComponentProfile(profile);
            //   } else {
            //     this.setState({deleteMenuVisible:true})
            //   }
            // }}
            isServerFunctionsHidden={false}
            isDeleteButtonVisible={true}
            // isEditButtonVisible={this.state.isUpdateAllowed || this.state.isDeleteAllowed || this.state.isInsertAllowed}
            // isComponentsLoaded={this.state.currentDatasetComponent !== undefined}
            // isFullScreenOn = {this.state.fullScreenOn}
            // zoom={this.state.zoom}
            // onBackToTableClick={()=>{
            //   this.handleDrawerVisibility(userProfileParams.diagrams,false);
            //   this.handleDrawerVisibility(userProfileParams.diagramsAdd,false);
            //   this.setState({currentDiagram:undefined, isDownloadFromDiagramPanel: !this.state.isDownloadFromDiagramPanel });
            // }}
            // onAddDiagramClick={()=>this.handleDrawerVisibility(userProfileParams.diagramsAdd)}
            // onEditDiagramClick={()=>this.handleDrawerVisibility(userProfileParams.diagrams)}
            // onCancelEditChangesClick={() => this.gridRef.current.onUndoSelected()}
            // onDeleteDiagramClick={()=>this.setState({deleteMenuVisible:!this.state.deleteMenuVisible, IsGrid: true})}
            // onDiagramChange={(e: string) => {
            //   this.setState({
            //     currentDiagram: this.state.diagrams.find(function(el) {
            //       return el.diagramName === e
            //     })
            //   });
            // }}
            // onWithTableCheck={(isWithTable:boolean)=>this.withTable(isWithTable)}
            diagrams={[]}
            // currentDiagram={this.state.currentDiagram}
            // onBackFromEditClick={() => {
            //   if (this.gridRef.current.whichEdited().length !== 0) {
            //     this.gridRef.current.stopEditing()
            //   } else if (this.state.isEditMode && this.gridRef.current.getBuffer().length > 0) {
            //     this.setState({isCheckEditBufferVisible: true})
            //   } else if (this.state.groupByColumn.filter(c=>c.enable && c.datasetColumn).length > 0
            //     || this.state.serverGroupBy.filter(c=>c.enable && c.datasetColumn).length > 0
            //     || this.state.serverAggregates.filter(c=>c.enable && c.datasetColumn).length > 0
            //     || this.state.serverCalculatedExpression.filter(c=>c.enable && c.datasetColumn).length > 0) {
            //     this.changeEditMode(this.refresh);
            //   } else if (this.gridRef.current.whichEdited().length === 0) {
            //     this.changeEditMode()
            //   }
            // }}
            // onInsertRowClick={() => {
            //   this.gridRef.current.onInsert();
            // }}
            // onApplyEditChangesClick={() => {
            //   //Убрал т.к. есть подсветки
            //   /*this.gridRef.current.removeRowsFromGrid();*/
            //   if (this.gridRef.current.whichEdited().length === 0) {
            //     this.onApplyEditChanges(this.gridRef.current.getBuffer());
            //   } else {
            //     this.gridRef.current.stopEditing()
            //   }
            // }}
            // onZoomChange={(value: string) => this.setState({zoom: value})}
            // onDeleteSelectedRowsClick={() => this.gridRef.current.onDeleteSelected()}
            // onCopySelectedRowsClick={() => this.gridRef.current.copySelected()}
            // onEditFilterChange={() => this.gridRef.current.onQuickFilterChanged()}
            // isInsertRowHidden={!this.state.isEditMode || !this.state.isInsertAllowed}
            // isDeleteRowsHidden={!this.state.isEditMode || !this.state.isDeleteAllowed}
            // isCopySelectedHidden={!this.state.isEditMode || !this.state.isInsertAllowed}
            // onDocExportClick={
            //   ()=>{
            //     if (this.props.isTabActive) {
            //       this.setState({isExportAllTabsVisible: true, isExcelExport:false})
            //     } else {
            //       this.docxExport(false)
            //     }
            //   }
            // }
            // onExcelExportClick={
            //   ()=>{
            //     if (this.props.isTabActive) {
            //       this.setState({isExportAllTabsVisible: true, isExcelExport:true})
            //     } else {
            //       this.excelExport(false)
            //     }
            //   }
            // }
            // onCsvExportClick={()=>{
            //   const fileName = this.replaceExportFileName(this.exportFileName);
            //   const newQueryParams = getNamedParams(this.props.viewObject.get('valueItems')
            //     , this.props.context.getContextItemValues()
            //     , this.props.pathFull[this.props.pathFull.length - 1].params);
            //   const filter = (arr:any[]) => arr.filter(f => f.enable && f.datasetColumn);
            //   const pivot = this.state.pivots.find(p=>p.isCurrent);
            //   let resourceSet = Ecore.ResourceSet.create();
            //   this.props.context.runCsvBatch(
            //     this.state.currentDatasetComponent,
            //     prepareServerQueryParams(resourceSet, this.props.context.patterns.QueryParameter, newQueryParams, '/queryParameter'),
            //     prepareServerQueryParams(resourceSet, this.props.context.patterns.QueryFilterDTO, filter(this.state.serverFilters), '/parameterFilter'),
            //     prepareServerQueryParams(resourceSet, this.props.context.patterns.QueryConditionDTO, filter(this.state.serverAggregates), '/parameterAggregation'),
            //     prepareServerQueryParams(resourceSet, this.props.context.patterns.QueryConditionDTO, filter(this.state.serverSorts), '/parameterSort'),
            //     prepareServerQueryParams(resourceSet, this.props.context.patterns.QueryFilterDTO, filter(this.state.serverGroupBy), '/parameterGroupBy'),
            //     prepareServerQueryParams(resourceSet, this.props.context.patterns.QueryConditionDTO, filter(this.state.serverCalculatedExpression), '/parameterCalculatedExpression'),
            //     prepareServerQueryParams(resourceSet, this.props.context.patterns.QueryConditionDTO, filter(this.state.groupByColumn), '/parameterGroupByColumn'),
            //     prepareServerQueryParams(resourceSet, this.props.context.patterns.QueryConditionDTO, filter(this.state.hiddenColumns), '/parameterHiddenColumn'),
            //     prepareServerQueryParam(resourceSet, this.props.context.patterns.QueryPivotDTO, pivot, '/parameterPivot'),
            //     this.props.i18n.language,
            //     fileName
            //   ).then((result:any) => {
            //     AppLogger.debugLog(result)
            //   });
            // }}
            // gridHasChanges={this.state.gridHasChanges}
            // gridHasSelected={this.state.gridHasSelected}
            maxWidth={datasetViewMaxWidth}


            {...otherProps}
          />
          <DatasetGrid rowData={rowData} columnDefs={columnDefs} height={height} width={width} {...otherProps}/>
        </div>
      </Fullscreen>
    </div>
  )

})
