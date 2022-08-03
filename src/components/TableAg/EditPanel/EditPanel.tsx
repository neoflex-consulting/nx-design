import * as React from "react";
import {cnEditPanel, EditPanelProps} from "./helpers";
import './EditPanel.css';
import {
  checkBarSizeIsZero,
  adaptiveElementSize,
  minHeight,
  checkBarSizeIsNotZero
} from "../DatasetBar/helpers";
import {Button} from "../../Button/Button";
import {IconArrowForward} from "../../../icons/IconArrowForward/IconArrowForward";
import {IconPlus} from "../../../icons/IconPlus/IconPlus";

export const EditPanel = React.forwardRef<HTMLDivElement, EditPanelProps>((props, ref) => {

  const editPanelRef = React.useRef<HTMLDivElement>(null);

  const {
    className,
    maxWidth,
    barSize,
    isInsertRowHidden,
    ...otherProps
  } = props;


  const adaptiveDropdown = barSize !== undefined && adaptiveElementSize.indexOf(barSize) < 2;
  const adaptiveItems = barSize !== undefined && adaptiveElementSize.indexOf(barSize) >= 2;

  return (
    <div
      ref={editPanelRef}
      style={{maxWidth: maxWidth ? maxWidth : undefined}}
      className={cnEditPanel('Header',{adaptiveBarColumnFlex: checkBarSizeIsZero(barSize), minHeight: minHeight(barSize)}, [className])}
      {...otherProps}
    >
EDIT PANEL
      <div
        className={cnEditPanel('Block', {spaceBetween: true, fillSpace: checkBarSizeIsNotZero(barSize)})}
      >
        <div
          className={cnEditPanel('FlexBarItem')}
        >
          <Button
            className={cnEditPanel('BarButton')}
            view={"link"}
            iconLeft={IconArrowForward}
            label={'Вернуться к таблице'}
            title={'Вернуться к таблице'}
          />
          <div className={cnEditPanel('VerticalLine')} />
          {
            adaptiveDropdown &&
            'ContextMenu'
          }
          {
            adaptiveItems &&
            <Button
              className={cnEditPanel('BarButton', {marginMedium: true})}
              view={"link"}
              iconLeft={IconPlus}
              onlyIcon
              title={'Добавить строку'}
              hidden={isInsertRowHidden}
            />
          }

        EditPanel
        </div>
      </div>
    </div>
  )

})
