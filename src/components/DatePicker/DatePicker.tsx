// import React, {Component} from 'react';
// import {findDOMNode} from 'react-dom';
//
// import {Picker} from './Picker/Picker';
// import Portal from './Portal';
// import {TextField} from "../TextField/TextField";
//

import React, {useEffect, useState} from 'react';

import {PropsWithHTMLAttributes} from "../../utils/types/PropsWithHTMLAttributes";
import { cn } from '../../utils/bem';
import {usePropsHandler} from "../EventInterceptor/usePropsHandler";
import {
  TextField,
  TextFieldOnChangeArguments,
  TextFieldPropId,
  TextFieldPropName,
  TextFieldPropOnChange, TextFieldPropValue
} from "../TextField/TextField";
import moment from 'moment';
import Portal from "./Portal";
import {Picker} from "./Picker/Picker";
import {findDOMNode} from "react-dom";


export const datePickerPropPanel = ['calendar', 'time', 'shortcuts'] as const;
export type DatePickerPropPanel = typeof datePickerPropPanel[number];
export const datePickerPropPanelDefault: DatePickerPropPanel = datePickerPropPanel[0];

export type DatePickerPropOnChange = (args: DatePickerOnChangeArguments) => void;
export type DatePickerOnChangeArguments = {
  value: DatePickerPropValue;
};
export type DatePickerPropValue = moment.Moment;

type Props = {
  className?: string,
  value: DatePickerPropValue,
    disabled?: boolean,
  isOpen?: boolean,
    onChange?: DatePickerPropOnChange,
    appendToBody?: boolean,
    closeOnSelectDay?: boolean,
//   shortcuts?: any,
//   splitPanel?: any,
//   showTimePicker?: any,
//   showCalendarPicker?: any,
//   onSelect?: any,

//   maxDate?: any,
//   minDate?: any,
//   selected?: any,
//   range?: any,
//   rangeAt?: any,
//   dateLimit?: any,
//   style?: any,

//   customButtonText?: any,
//   showCustomButton?: any,
//   customRange?: any,



}
//
// interface State {
//   moment?: any,
//   selected?: any,
//   isOpen?: boolean,
//   pos?: any
// }
//
export type DatePickerProps = PropsWithHTMLAttributes<Props, HTMLDivElement>;

export const cnDatetimeTrigger = cn('datetime-trigger');

export const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>((props, ref) => {
  const datePickerRef = ref || React.useRef<HTMLDivElement>(null);
  const dateRef = React.useRef<HTMLDivElement>(null);
  const {
    className,
    value,
    isOpen = false,
    onChange,
    appendToBody,
    closeOnSelectDay,
    // shortcuts,
    // splitPanel,
    // showTimePicker = true,
    // showCalendarPicker = true,
    // onSelect,
    // maxDate,
    // minDate,
    // selected,
    // range,
    // rangeAt,
    // dateLimit,
    // style,

    // months,
    // changePanel,
    // dayFormat,
    // weeks,
    // minPanel,
    // panel = datePickerPropPanelDefault,
    ...otherProps
  } = usePropsHandler(cnDatetimeTrigger(), props, datePickerRef as React.RefObject<HTMLDivElement>);
  const [open, setOpen] = useState<boolean>(isOpen);
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
    console.log('getPosition')
    console.log(dateRef)
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
      <Picker
        {...otherProps}
        className="datetime-picker-popup"
        isOpen={isOpen}
        onChange={handleChange} />
    );
  }

    return (
      <div
        className={cnDatetimeTrigger({},[className])}
        ref={datePickerRef}
        {...otherProps}
      >
        <div onClick={() => togglePicker(!open)} ref={dateRef}>
          <TextField
            value={value.format('YYYY-MM-DD HH:mm')}
           />
        </div>
        {appendToBody ? renderPortal : renderPicker(open)}
      </div>
    );

})

