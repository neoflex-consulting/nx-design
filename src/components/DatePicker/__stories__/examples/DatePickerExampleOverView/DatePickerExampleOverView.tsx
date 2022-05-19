import React, {useState} from 'react';

import {DatePickerExampleAdditionalControls} from "../DatePickerExampleAdditionalControls/DatePickerExampleAdditionalControls";
import {cnDocsExample} from "../../../../../uiKit/components/DocsExample/DocsExample";
import {cnDocsDecorator} from "../../../../../uiKit/components/DocsDecorator/DocsDecorator";
import {DatePicker} from "../../../DatePicker";
import * as wp from "../../../../../uiKit/whitepaper/whitepaper";

export const DatePickerExampleOverView = () => {
  const [value, setValue] = useState<[Date?, Date?] | null>(null);
  const [value2, setValue2] = useState<[Date?, Date?] | null>(null);
  const [value3, setValue3] = useState<[Date?, Date?] | null>(null);
  const [value4, setValue4] = useState<[Date?, Date?] | null>(null);
  const [value5, setValue5] = useState<[Date?, Date?] | null>(null);
  const [value6, setValue6] = useState<[Date?, Date?] | null>(null);
  const [value7, setValue7] = useState<[Date?, Date?] | null>(null);
  const [value8, setValue8] = useState<[Date?, Date?] | null>(null);
  const [value9, setValue9] = useState<[Date?, Date?] | null>(null);

  return (
    <div>
      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <DatePicker labelPosition={"top"} label={"Type = date"} placeholder={'yyyy-MM-dd'} type="date" value={value} onChange={({ value }) => setValue(value)} />
        </div>
        <div className={cnDocsExample()}>
          <DatePicker labelPosition={"top"} label={"Type = date-range"} placeholder={'yyyy-MM-dd'} type="date-range" value={value2} onChange={({ value }) => setValue2(value)} />
        </div>
        <div className={cnDocsExample()}>
          <DatePicker labelPosition={"top"} label={"Type = date-time"} placeholder={'yyyy-MM-dd HH:mm:ss'} type="date-time" value={value3} onChange={({ value }) => setValue3(value)} />
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <DatePicker labelPosition={"top"} label={"ShowPicker = date"} placeholder={'yyyy-MM-dd'} showPicker="date" value={value4} onChange={({ value }) => setValue4(value)} />
        </div>
        <div className={cnDocsExample()}>
          <DatePicker labelPosition={"top"} label={"ShowPicker = month"} placeholder={'yyyy-MM'} showPicker="month" value={value5} onChange={({ value }) => setValue5(value)} />
        </div>
        <div className={cnDocsExample()}>
          <DatePicker labelPosition={"top"} label={"ShowPicker = year"} placeholder={'yyyy'} showPicker="year" value={value6} onChange={({ value }) => setValue6(value)} />
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <DatePicker labelPosition={"top"} label={"FormatMask = yyyy/MM/dd"} placeholder={'yyyy/MM/dd'} formatMask="yyyy/MM/dd" value={value7} onChange={({ value }) => setValue7(value)} />
        </div>
        <div className={cnDocsExample()}>
          <DatePicker labelPosition={"top"} label={"FormatMask = dd>MM>yyyy"} placeholder={'dd>MM>yyyy'} formatMask="dd>MM>yyyy" value={value8} onChange={({ value }) => setValue8(value)} />
        </div>
        <div className={cnDocsExample()}>
          <DatePicker labelPosition={"top"} label={"FormatMask = MM.yyyy.dd"} placeholder={'MM.yyyy.dd'} formatMask="MM.yyyy.dd" value={value9} onChange={({ value }) => setValue9(value)} />
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1', 'col-gap': 'full' })])}
      >
        <DatePickerExampleAdditionalControls/>
      </div>
      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <DatePicker labelPosition={"top"} label={"Direction = downStartLeft"} placeholder={'yyyy-MM-dd'} direction="downStartLeft" value={value} onChange={({ value }) => setValue(value)} />
        </div>
        <div className={cnDocsExample()}>
          <DatePicker labelPosition={"top"} label={"Direction = downStartRight"} placeholder={'yyyy-MM-dd'} direction="downStartRight" value={value} onChange={({ value }) => setValue(value)} />
        </div>

        <div className={cnDocsExample()}>
          <DatePicker labelPosition={"top"} label={"Direction = upStartLeft"} placeholder={'yyyy-MM-dd'} direction="upStartLeft" value={value} onChange={({ value }) => setValue(value)} />
        </div>
        <div className={cnDocsExample()}>
          <DatePicker labelPosition={"top"} label={"Direction = upStartRight"} placeholder={'yyyy-MM-dd'} direction="upStartRight" value={value} onChange={({ value }) => setValue(value)} />
        </div>


        <div className={cnDocsExample()}>
          <DatePicker labelPosition={"top"} label={"Direction = leftStartUp"} placeholder={'yyyy-MM-dd'} direction="leftStartUp" value={value} onChange={({ value }) => setValue(value)} />
        </div>
        <div className={cnDocsExample()}>
          <DatePicker labelPosition={"top"} label={"Direction = leftStartDown"} placeholder={'yyyy-MM-dd'} direction="leftStartDown" value={value} onChange={({ value }) => setValue(value)} />
        </div>

        <div className={cnDocsExample()}>
          <DatePicker labelPosition={"top"} label={"Direction = rightStartDown"} placeholder={'yyyy-MM-dd'} direction="rightStartDown" value={value} onChange={({ value }) => setValue(value)} />
        </div>
        <div className={cnDocsExample()}>
          <DatePicker labelPosition={"top"} label={"Direction = rightStartUp"} placeholder={'yyyy-MM-dd'} direction="rightStartUp" value={value} onChange={({ value }) => setValue(value)} />
        </div>

      </div>
    </div>
  )
};
