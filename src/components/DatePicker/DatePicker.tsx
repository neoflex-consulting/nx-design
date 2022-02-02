import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

import {Picker} from './Picker';
import Portal from './Portal';
import {TextField} from "../TextField/TextField";

interface Props {
  isOpen?: any,
  shortcuts?: any,
  splitPanel?: any,
  showTimePicker?: any,
  showCalendarPicker?: any,
  className?: any,
  onSelect?: any,
  moment?: any,
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
  disabled?: any
}

interface State {
  moment?: any,
  selected?: any,
  isOpen?: boolean,
  pos?: any
}

class DatePicker extends Component<Props, State> {
  constructor(props:any) {
    super(props);
    this.state = {
      isOpen: false,
      pos: {}
    };
  }

  componentDidMount() {
    window.addEventListener('click', this.handleDocumentClick, false);

    if (this.props.appendToBody) {
      window.addEventListener('scroll', this.handlePortalPosition, false);
      window.addEventListener('resize', this.handlePortalPosition, false);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleDocumentClick, false);

    if (this.props.appendToBody) {
      window.removeEventListener('scroll', this.handlePortalPosition, false);
      window.removeEventListener('resize', this.handlePortalPosition, false);
    }
  }

  handleDocumentClick = (evt:any) => {
    if (!findDOMNode(this)?.contains(evt.target)) {
      this.togglePicker(false);
    }
  }

  handlePortalPosition = () => {
    if (this.state.isOpen) {
      this.setState({
        pos: this.getPosition()
      });
    }
  }

  handleChange = (moment:any, currentPanel:any) => {
    const {closeOnSelectDay, onChange} = this.props;

    if (currentPanel === 'day' && closeOnSelectDay) {
      this.setState({
        isOpen: false
      });
    }

    onChange && onChange(moment);
  }

  togglePicker = (isOpen:boolean) => {
    const {disabled} = this.props;

    if (disabled) return;

    this.setState({
      isOpen,
      pos: this.getPosition()
    });
  }

  getPosition = () => {
    const elem = this.refs.trigger;
    let elemBCR: any
    if ("getBoundingClientRect" in elem) {
      elemBCR = elem.getBoundingClientRect();
    }
    return {
      top: Math.round(elemBCR.top + elemBCR.height),
      left: Math.round(elemBCR.left)
    };

  }

  _renderPortal = () => {
    const {pos, isOpen} = this.state;
    const style = {
      display: isOpen ? 'block' : 'none',
      position: 'fixed',
      top: `${pos.top}px`,
      left: `${pos.left}px`
    };

    return (
      <Portal style={style}>
        {this._renderPicker(true)}
      </Portal>
    );
  }

  _renderPicker = (isOpen: boolean | undefined) => {

    return (
      <Picker
        {...this.props}
        className="datetime-picker-popup"
        isOpen={isOpen}
        onChange={this.handleChange} />
    );
  }

  render() {
    const {children, appendToBody, className, moment} = this.props;
    const {isOpen} = this.state;

    return (
      <div className={`datetime-trigger ${className}`}>
        <div onClick={this.togglePicker.bind(this, !isOpen)} ref="trigger">
          {children}
          <TextField
            value={moment.format('YYYY-MM-DD HH:mm')}
           />

        </div>
        {appendToBody ? this._renderPortal() : this._renderPicker(isOpen)}
      </div>
    );
  }
}


export default DatePicker;
