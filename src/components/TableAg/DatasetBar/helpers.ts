import {cn} from "../../../utils/bem";

// export enum adaptiveElementSize {
//   extraSmall,
//   small,
//   medium,
//   large,
//   extraLarge
// }
export const adaptiveElementSize = ['extraSmall', 'small', 'medium', 'large', 'extraLarge'] as const;
export type AdaptiveElementSize = typeof adaptiveElementSize[number];
export const adaptiveElementSizeDefault: AdaptiveElementSize = adaptiveElementSize[3];

export const barModeProp = ['edit', 'diagram', 'normal', 'pivot'] as const;
export type BarModeProp = typeof barModeProp[number];
export const barModePropDefault: BarModeProp = barModeProp[2];

export const minHeightProp = ['big', 'small'] as const;
export type MinHeightProp = typeof minHeightProp[number];
export const minHeightPropDefault: MinHeightProp = minHeightProp[0];

export const componentsProp = ['search', 'filter', 'highlights', 'sort', 'calculator', 'aggregations', 'diagram', 'groupBy', 'hiddenColumns', 'exportDocx', 'exportExcel', 'exportCsv', 'versions', 'edit', 'pivot'] as const;
export type ComponentsProp = typeof componentsProp[number];

export type DatasetBarProps = {
  className?: string;
  barSize?: AdaptiveElementSize;
  isQuickSearchExpanded?: boolean;
  isExportChecked?: boolean;
  barMode?: BarModeProp;
  hiddenComponents: (ComponentsProp)[];
};

export const cnDatasetBar = cn('DatasetBar');

export const searchTransform = (barSize: AdaptiveElementSize | undefined) => barSize !== undefined && adaptiveElementSize.indexOf(barSize) <= 3;
export const fillSpace = (barSize: AdaptiveElementSize | undefined) => barSize !== undefined && adaptiveElementSize.indexOf(barSize) !== 0;

export const minHeight = (barSize: AdaptiveElementSize | undefined) => barSize !== undefined && adaptiveElementSize.indexOf(barSize) <= 3 ? minHeightProp[0] : minHeightProp[1];
export const adaptiveBarColumnFlex = (barSize: AdaptiveElementSize | undefined) => barSize !== undefined && adaptiveElementSize.indexOf(barSize) == 0;

