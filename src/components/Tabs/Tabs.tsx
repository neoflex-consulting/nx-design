import './Tabs.css';

import React, {createRef, useMemo} from 'react';

import { useChoiceGroup } from '../../hooks/useChoiceGroup/useChoiceGroup';
import { useResizeObserved } from '../../hooks/useResizeObserved/useResizeObserved';
import { IconProps, IconPropSize } from '../../icons/_Icon/Icon';
import { cn } from '../../utils/bem';
import { PropsWithHTMLAttributesAndRef } from '../../utils/types/PropsWithHTMLAttributes';

import { TabsFitModeDropdownWrapper } from './FitModeDropdownWrapper/TabsFitModeDropdownWrapper';
import { TabsFitModeScrollWrapper } from './FitModeScrollWrapper/TabsFitModeScrollWrapper';
import { TabsBorderLine, TabsRunningLine } from './Line/Border/TabsLine';
import { cnTabsTab, TabsTab } from './Tab/TabsTab';
import {
  getTabsDirection,
  RenderItemsListProp,
  TabDimensions,
  TabsDirection,
  TabsFitModeWrapperProps,
} from './helpers';
import {TabsRunningStrokeLine, TabsStrokeLine} from "./Line/Stroke/TabsStrokeLine";

export const tabsSizes = ['m', 's'] as const;
export type TabsPropSize = typeof tabsSizes[number];
export const tabsDefaultSize: TabsPropSize = tabsSizes[0];

export const tabsViews = ['bordered', 'clear', 'stroke'] as const;
export type TabsPropView = typeof tabsViews[number];
export const tabsDefaultView: TabsPropView = tabsViews[0];

export const tabsLinePositions = ['bottom', 'top', 'left', 'right'] as const;
export type TabsPropLinePosition = typeof tabsLinePositions[number];
export const tabsDefaultLinePosition: TabsPropLinePosition = 'bottom';

export const tabsFitModes = ['scroll', 'dropdown'] as const;
export type TabsPropFitMode = typeof tabsFitModes[number];
export const tabsDefaultFitMode: TabsPropFitMode = 'dropdown';

export type TabsPropGetLabel<ITEM> = (item: ITEM) => string | number;
export type TabsPropGetIcon<ITEM> = (item: ITEM) => React.FC<IconProps> | undefined;
export type TabsPropOnChange<ITEM, ITEM_ELEMENT> = (props: {
  e: React.MouseEvent<ITEM_ELEMENT>;
  value: ITEM;
}) => void;
// export type TabsPropOnClose<ITEM, ITEM_ELEMENT> = (props: {
//   e: React.MouseEvent<ITEM_ELEMENT>;
//   value: ITEM;
// }) => void;

type RenderItemProps<ITEM, ELEMENT extends HTMLElement> = {
  item: ITEM;
  onChange: React.MouseEventHandler<ELEMENT>;
  onClose?: React.MouseEventHandler<ELEMENT>;
  checked: boolean;
  label: string;
  icon?: React.FC<IconProps>;
  size: TabsPropSize;
  iconSize?: IconPropSize;
  onlyIcon?: boolean;
  closeIcon?: boolean;
};

type RenderItem<ITEM, ELEMENT extends HTMLElement> = (
  props: RenderItemProps<ITEM, ELEMENT>,
) => React.ReactElement | null;

export type TabsProps<
  ITEM,
  ITEM_ELEMENT extends HTMLElement = HTMLButtonElement
> = PropsWithHTMLAttributesAndRef<
  {
    size?: TabsPropSize;
    onlyIcon?: boolean;
    closeIcon?: boolean;
    view?: TabsPropView;
    iconSize?: IconPropSize;
    items: ITEM[];
    value?: ITEM | null;
    getIcon?: TabsPropGetIcon<ITEM>;
    getLabel: TabsPropGetLabel<ITEM>;
    children?: never;
    onChange: TabsPropOnChange<ITEM, ITEM_ELEMENT>;
    onClose?: TabsPropOnChange<ITEM, ITEM_ELEMENT>;
    renderItem?: RenderItem<ITEM, ITEM_ELEMENT>;
  } & (
    | {
        linePosition?: Extract<TabsPropLinePosition, 'bottom' | 'top'>;
        fitMode?: 'dropdown' | 'scroll';
      }
    | {
        linePosition: Extract<TabsPropLinePosition, 'left' | 'right'>;
        fitMode?: never;
      }
  ),
  HTMLDivElement
>;

type Tabs = <ITEM, ITEMELEMENT extends HTMLElement = HTMLButtonElement>(
  props: TabsProps<ITEM, ITEMELEMENT>,
  ref: React.Ref<HTMLDivElement>,
) => React.ReactElement | null;

export const cnTabs = cn('Tabs');

function renderItemDefault<ITEM, ITEMELEMENT extends HTMLElement>(
  props: RenderItemProps<ITEM, ITEMELEMENT>,
): React.ReactElement {
  const { onChange, onClose, ...otherProps } = props;
  return (
    <TabsTab
      {...otherProps}
      onChange={(onChange as unknown) as React.MouseEventHandler<HTMLButtonElement>}
      onClose={(onClose as unknown) as React.MouseEventHandler<HTMLButtonElement>}
    />
  );
}

export const Tabs: Tabs = React.forwardRef((props, ref) => {
  const {
    size = tabsDefaultSize,
    className,
    items,
    view = tabsDefaultView,
    value,
    linePosition = tabsDefaultLinePosition,
    fitMode = tabsDefaultFitMode,
    onlyIcon,
    closeIcon,
    getIcon,
    getLabel,
    onChange,
    onClose,
    iconSize,
    renderItem: renderItemProp = renderItemDefault,
    ...otherProps
  } = props;

  const { getOnChange, getChecked } = useChoiceGroup({
    value: value || null,
    getKey: getLabel,
    callBack: onChange,
    multiple: false,
  });

  const { getOnClose } = useChoiceGroup({
    value: value || null,
    getKey: getLabel,
    callBack: onClose || onChange,
    multiple: false,
  });

  const tabsDirection = getTabsDirection(linePosition);
  const isVertical = tabsDirection === 'vertical';
  const tabRefs = useMemo(
    () => new Array(items.length).fill(null).map(() => createRef<HTMLDivElement>()),
    [items, fitMode, isVertical],
  );
  const tabsDimensions = useResizeObserved(
    tabRefs,
    (el): TabDimensions => ({
      size: el?.[isVertical ? 'offsetHeight' : 'offsetWidth'] ?? 0,
      gap: el ? parseInt(getComputedStyle(el)[isVertical ? 'marginBottom' : 'marginRight'], 10) : 0,
    }),
  );

  const activeTabIdx = items.findIndex(getChecked);

  const getCloseIcon = (item: any) => {
    return item.closeIcon || false
  }

  // const [closeFlag, setCloseFlag] = useState<boolean>(false);


  const renderItem = (item: typeof items[number], onClick?: () => void) =>
    renderItemProp({
      item,
      onChange: (...args) => {
        onClick?.();
        getOnChange(item)(...args)
      },
      checked: getChecked(item),
      label: getLabel(item).toString(),
      icon: getIcon && getIcon(item),
      onlyIcon,
      closeIcon: getCloseIcon(item),
      onClose: (...args) => {
        // setCloseFlag(true);
        onClick?.();
        getOnClose(item)(...args);
      },
      size,
      iconSize
    });

  const renderItemsList: RenderItemsListProp = ({ withRunningLine = true, getTabClassName }) => (
    <div className={cnTabs('List', { direction: tabsDirection, linePosition, view })}>
      {items.map((item, idx) => (
        <div
          ref={tabRefs[idx]}
          key={getLabel(item)}
          className={cnTabs('Tab', { direction: tabsDirection, view, activeTabIdx: activeTabIdx === idx }, [getTabClassName?.(idx)])}
        >
          {renderItem(item)}
        </div>
      ))}
      {withRunningLine && view !== 'stroke' && (
        <TabsRunningLine
          linePosition={linePosition}
          tabsDimensions={tabsDimensions}
          activeTabIdx={activeTabIdx}
        />
      )}
      {withRunningLine && view === 'stroke' && (
        <TabsRunningStrokeLine
          linePosition={linePosition}
          tabsDimensions={tabsDimensions}
          activeTabIdx={activeTabIdx}
        />
      )}
    </div>
  );

  const Wrapper = getTabsWrapper(tabsDirection, fitMode);

  return (
    <div
      className={cnTabs({ size, view, direction: tabsDirection }, [className])}
      ref={ref}
      {...otherProps}
    >
      <Wrapper
        tabRefs={tabRefs}
        tabsDimensions={tabsDimensions}
        renderItem={renderItem}
        renderItemsList={renderItemsList}
        getLabel={getLabel}
        getChecked={getChecked}
        items={items}
        strokeView={view === 'stroke'}
      />
      {view === 'bordered' && <TabsBorderLine linePosition={linePosition} />}
      {view === 'stroke' && <TabsStrokeLine linePosition={linePosition} />}
    </div>
  );
});

const getTabsWrapper = (tabsDirection: TabsDirection, fitMode: TabsPropFitMode) => {
  if (tabsDirection === 'vertical') {
    return OnlyListWrapper;
  }

  return fitMode === 'scroll' ? TabsFitModeScrollWrapper : TabsFitModeDropdownWrapper;
};

const OnlyListWrapper = <ITEM,>({
  renderItemsList,
}: TabsFitModeWrapperProps<ITEM>): React.ReactElement | null => <>{renderItemsList({})}</>;

export { TabsTab, cnTabsTab };
