import React, {useState} from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import {Calendar, CalendarAdditionalControlRenderProps} from '../../../Calendar';
import * as wp from "../../../../../uiKit/whitepaper/whitepaper";
import {cnDocsExample} from "../../../../../uiKit/components/DocsExample/DocsExample";
import {Typography} from "../../../../Typography/Typography";
import ruLocale from "date-fns/locale/ru";
import {addDays, startOfWeek} from "date-fns";
import frLocale from "date-fns/locale/fr";
import enLocale from "date-fns/locale/en-AU";
import {Button} from "../../../../Button/Button";

const minDate = startOfWeek(new Date(), { locale: ruLocale });
const maxDate = new Date();
const events = [startOfWeek(new Date(), { locale: ruLocale }), new Date(), addDays(new Date(), 2)];
const CalendarLocaleFr = {
  ...frLocale,
  words: {
    hours: 'H',
    minutes: 'Min',
    seconds: 'S',
  },
};
const CalendarLocaleEn = {
  ...enLocale,
  words: {
    hours: 'H',
    minutes: 'Min',
    seconds: 'S',
  },
};

export const CalendarExampleOverView = () => {

  const [value, setValue] = useState<Date | undefined>();
  const [rangeValue, setRangeValue] = useState<[Date?, Date?]>([]);

  const setCuarter = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    if (month >= 0 && month < 3) {
      setRangeValue([new Date(year, 0, 1), new Date(year, 3, 0)]);
    } else if (month >= 3 && month < 6) {
      setRangeValue([new Date(year, 3, 1), new Date(year, 6, 0)]);
    } else if (month >= 6 && month < 9) {
      setRangeValue([new Date(year, 6, 1), new Date(year, 9, 0)]);
    } else {
      setRangeValue([new Date(year, 9, 1), new Date(year + 1, 0, 0)]);
    }
  };

  const ControlRender = (props: CalendarAdditionalControlRenderProps) => {
    const { currentVisibleDate } = props;

    return (
      <div>
        <Button
          label="Этот квартал"
          onClick={() => currentVisibleDate && setCuarter(currentVisibleDate)}
        />
      </div>

    );
  };

  return (
    <div>
      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>type="date"</Typography>
          <Calendar style={{border: "1px solid", borderRadius: "10px"}} type="date"/>
        </div>
        <div className={cnDocsExample()}>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>type="month"</Typography>
          <Calendar style={{border: "1px solid", borderRadius: "10px"}} type="month"/>
        </div>
        <div className={cnDocsExample()}>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>type="year"</Typography>
          <Calendar style={{border: "1px solid", borderRadius: "10px"}} type="year"/>
        </div>
      </div>
      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>type="date-time"</Typography>
          <Calendar style={{border: "1px solid", borderRadius: "10px"}} type="date-time"/>
        </div>
        <div className={cnDocsExample()}>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>type="time"</Typography>
          <Calendar type="time"/>
        </div>
      </div>


      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>view="classic"</Typography>
          <Calendar style={{border: "1px solid", borderRadius: "10px"}} view="classic"/>
        </div>
        <div className={cnDocsExample()}>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>view="book"</Typography>
          <Calendar style={{border: "1px solid", borderRadius: "10px"}} view="book"/>
        </div>
      </div>
      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>view="slider"</Typography>
          <Calendar style={{border: "1px solid", borderRadius: "10px"}} view="slider"/>
        </div>
      </div>



      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>currentVisibleDate=(2024, 1, 1)</Typography>
          <Calendar style={{textAlign: "center", border: "1px solid", borderRadius: "10px"}} currentVisibleDate={new Date(2024, 1, 1)} />
        </div>
      </div>


      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>minDate=Сегодня - 2  &&  maxDate=Сегодня</Typography>
          <Calendar
            style={{border: "1px solid", borderRadius: "10px"}}
            type="date-time"
            minDate={minDate}
            maxDate={maxDate}
            value={value}
            onChange={({ value }) => setValue(value)}
          />
        </div>
      </div>



      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>events=Сегодня + 2 дня   &&   Сегодня - 2 дня</Typography>
          <Calendar style={{border: "1px solid", borderRadius: "10px"}} events={events}/>
        </div>
      </div>



      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>Календарь по-французски</Typography>
          <Calendar style={{border: "1px solid", borderRadius: "10px"}} type="date-time" locale={CalendarLocaleFr} />
        </div>
        <div className={cnDocsExample()}>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>Календарь по-английски</Typography>
          <Calendar style={{border: "1px solid", borderRadius: "10px"}} type="date-time" locale={CalendarLocaleEn} />
        </div>
      </div>


      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>multiplicityHours={4} multiplicityMinutes={10} multiplicitySeconds={30}</Typography>
          <Calendar type="time" multiplicityHours={4} multiplicityMinutes={10} multiplicitySeconds={30} />
        </div>
      </div>


      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>Выбор периода && type="date"</Typography>
          <Calendar
            style={{border: "1px solid", borderRadius: "10px"}}
            value={rangeValue}
            onChangeRange={({ value }) => setRangeValue(value)}
            type={"date"}
          />
        </div>
        <div className={cnDocsExample()}>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>Выбор периода && type="month"</Typography>
          <Calendar
            style={{border: "1px solid", borderRadius: "10px"}}
            value={rangeValue}
            onChangeRange={({ value }) => setRangeValue(value)}
            type={"month"}
          />
        </div>
        <div>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>Выбор периода && type="year"</Typography>
          <Calendar
            style={{border: "1px solid", borderRadius: "10px"}}
            value={rangeValue}
            onChangeRange={({ value }) => setRangeValue(value)}
            type={"year"}
          />
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>Выбор периода && view="book" && type="date"</Typography>
          <Calendar
            style={{border: "1px solid", borderRadius: "10px"}}
            value={rangeValue}
            onChangeRange={({ value }) => setRangeValue(value)}
            view="book"
            type="date"
          />
        </div>
        <div>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>Выбор периода && view="book" && type="month"</Typography>
          <Calendar
            style={{border: "1px solid", borderRadius: "10px"}}
            value={rangeValue}
            onChangeRange={({ value }) => setRangeValue(value)}
            view="book"
            type="month"
          />
        </div>
      </div>
      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>Выбор периода && view="book" && type="year"</Typography>
          <Calendar
            style={{border: "1px solid", borderRadius: "10px"}}
            value={rangeValue}
            onChangeRange={({ value }) => setRangeValue(value)}
            view="book"
            type="year"
          />
        </div>
      </div>


      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>Выбор периода && view="slider" && type="date"</Typography>
          <Calendar
            style={{border: "1px solid", borderRadius: "10px"}}
            value={rangeValue}
            onChangeRange={({ value }) => setRangeValue(value)}
            view="slider"
            type="date"
          />
        </div>
        <div className={cnDocsExample()}>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>Выбор периода && view="slider" && type="month"</Typography>
          <Calendar
            style={{border: "1px solid", borderRadius: "10px"}}
            value={rangeValue}
            onChangeRange={({ value }) => setRangeValue(value)}
            view="slider"
            type="month"
          />
        </div>
      </div>
      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>Выбор периода && view="slider" && type="year"</Typography>
          <Calendar
            style={{border: "1px solid", borderRadius: "10px"}}
            value={rangeValue}
            onChangeRange={({ value }) => setRangeValue(value)}
            view="slider"
            type="year"
          />
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
            <Typography style={{textAlign: "center", margin: "10px"}} size={"m"}>Дополнительные кнопки && view="book" && type="date"</Typography>
            <Calendar
              style={{border: "1px solid", borderRadius: "10px"}}
              value={rangeValue}
              onChangeRange={({ value }) => setRangeValue(value)}
              view="book"
              type="date"
              renderAdditionalControls={ControlRender}
            />
        </div>
      </div>


    </div>

  );
};
