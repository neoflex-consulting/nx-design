import React, {useEffect, useState} from 'react';
import {findDOMNode} from 'react-dom';

import {Panel} from './Panel';
import Portal from './Portal';
import {PropsWithHTMLAttributes} from "../../utils/types/PropsWithHTMLAttributes";
import {cn} from "../../utils/bem";
import {usePropsHandler} from "../EventInterceptor/usePropsHandler";
import {TextField} from "../TextField/TextField";

type Props = {
  isOpen?: any,
  shortcuts?: any,
  splitPanel?: any,
  showTimePicker?: any,
  showCalendarPicker?: any,
  className?: any,
  onSelect?: any,
  value?: any,
  maxDate?: any,
  minDate?: any,
  selected?: any,
  range?: any,
  rangeAt?: any,
  dateLimit?: any,
  style?: any,
  onChange?: any,
  customButtonText?: any,
  showCustomButton?: any,
  customRange?: any,
  appendToBody?: any,
  closeOnSelectDay?: any,
  disabled?: any,
  children?: any,

  width?: any,
  form?: any,
  state?: any,
  size?: any,
  view?: any,
  type?: any,
  maxLength?: any,
  minRows?: any,
  maxRows?: any,
  placeholder?: any,
  leftSide?: any,
  rightSide?: any
}

export type DatePickerProps = PropsWithHTMLAttributes<Props, HTMLDivElement>;

export const cnDatePicker = cn('DPicker');

export const DPicker = React.forwardRef<HTMLDivElement, DatePickerProps>((props, ref) => {
  const datePickerRef = ref || React.useRef<HTMLDivElement>(null);
  const dateRef = React.useRef<HTMLDivElement>(null);
  const {
    isOpen = false,
    shortcuts,
    splitPanel,
    showTimePicker,
    showCalendarPicker,
    className,
    onSelect,
    value,
    maxDate,
    minDate,
    selected,
    range,
    rangeAt,
    dateLimit,
    style,
    onChange,
    customButtonText,
    showCustomButton,
    customRange,
    appendToBody,
    closeOnSelectDay,
    disabled,
    children,

    width,
    form,
    state,
    size,
    view,
    type,
    maxLength,
    minRows,
    maxRows,
    placeholder,
    leftSide,
    rightSide,
    ...otherProps
  } = usePropsHandler(cnDatePicker(), props, datePickerRef as React.RefObject<HTMLDivElement>);
  const [open, setOpen] = useState<boolean>(false);
  const [pos, setPos] = useState<any>();

  useEffect(() => {
    window.addEventListener('click', handleDocumentClick, false);
    if (appendToBody) {
      window.addEventListener('scroll', handlePortalPosition, false);
      window.addEventListener('resize', handlePortalPosition, false);
    }
    return () => {
      window.removeEventListener('click', handleDocumentClick, false);
      if (appendToBody) {
        window.removeEventListener('scroll', handlePortalPosition, false);
        window.removeEventListener('resize', handlePortalPosition, false);
      }
    }
  }, []);

  const handleDocumentClick = (evt:any) => {
    if (!findDOMNode(datePickerRef.current)?.contains(evt.target)) {
      togglePicker(false);
    }
  }

  const handlePortalPosition = () => {
    if (open) {
      setPos(getPosition())
    }
  }

  const handleChange = (value: any, currentPanel: any) => {
    if (currentPanel === 'day' && closeOnSelectDay) {
      setOpen(false)
    }
    onChange && onChange(value);
  }

  const togglePicker = (newStatus: boolean) => {
    if (props.disabled) return;
    setOpen(newStatus)
    setPos(getPosition())
  }

  const getPosition = () => {
    if (dateRef !== null) {
      const elem = dateRef.current;
      let elemBCR: any
      if (elem !== null && "getBoundingClientRect" in elem) {
        elemBCR = elem.getBoundingClientRect();
      }
      return {
        top: Math.round(elemBCR.top + elemBCR.height),
        left: Math.round(elemBCR.left)
      };
    }
    return null
  }

  const renderPortal = () => {
    const style = {
      display: open ? 'block' : 'none',
      position: 'fixed',
      top: `${pos.top}px`,
      left: `${pos.left}px`
    };

    return (
      <Portal style={style}>
        {renderPicker(true)}
      </Portal>
    );
  }

  const renderPicker = (isOpen: boolean | undefined) => {

    return (
      <Panel
        {...props}
        className="datetime-picker-popup"
        isOpen={isOpen}
        onChange={handleChange} />
    );
  }

  return (
    <div
      className={cnDatePicker({},[className])}
      ref={datePickerRef}
      {...otherProps}
    >
      <div onClick={() => togglePicker(!open)} ref={dateRef}>
        <TextField
          value={value.format('YYYY-MM-DD HH:mm')}
          onChange={onChange}

          width={width}
          form={form}
          state={state || undefined}
          size={size}
          view={view}
          type={type}
          maxLength={maxLength}
          minRows={minRows}
          maxRows={maxRows}
          placeholder={placeholder}
          leftSide={leftSide}
          rightSide={rightSide}
          disabled={disabled}
        />
      </div>
      {appendToBody ? renderPortal : renderPicker(open)}
    </div>
  );
})