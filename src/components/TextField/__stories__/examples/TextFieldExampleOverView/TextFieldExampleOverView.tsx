import React, {useState} from 'react';

import { TextField } from '../../../TextField';
import {cnDocsDecorator} from "../../../../../uiKit/components/DocsDecorator/DocsDecorator";
import * as wp from "../../../../../uiKit/whitepaper/whitepaper";
import {Button} from "../../../../Button/Button";
import {cnDocsExample} from "../../../../../uiKit/components/DocsExample/DocsExample";
import {Gift} from "../../../../../icons/Gift/Gift";

export const TextFieldExampleOverView = () => {
  const [value, setValue] = useState<string | null>(null);
  const handleChange = ({ value }: { value: string | null }) => setValue(value);

  return (
    <div>
      <div className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1-1', 'col-gap': 'full' }),])}>
        <div className={cnDocsExample()}>
          <TextField label="Поле раз" onChange={handleChange} value={value} type="text" placeholder="autoFocus" autoFocus />
        </div>
        <div className={cnDocsExample()}>
          <TextField label="Поле два" onChange={handleChange} value={value} type="text" placeholder="default"/>
        </div>
      </div>

      <div className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1-1', 'col-gap': 'full' }),])}>
        <div className={cnDocsExample()}>
          <TextField onChange={handleChange} value={value} status="success" placeholder="status = success" caption="Это подпись"/>
        </div>
        <div className={cnDocsExample()}>
          <TextField onChange={handleChange} value={value} status="error" placeholder="status = error" caption="Это подпись"/>
        </div>
        <div className={cnDocsExample()}>
          <TextField onChange={handleChange} value={value} status="warning" placeholder="status = warning" caption="Это подпись"/>
        </div>
        <div className={cnDocsExample()}>
          <TextField onChange={handleChange} value={value} placeholder="default" caption="Это подпись"/>
        </div>
      </div>

      <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
        <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
          <TextField placeholder="Default" value={value} onChange={handleChange} />
        </div>
        <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
          <TextField form="brick" placeholder="form = brick" value={value} onChange={handleChange} />
        </div>
        <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
          <TextField form="round" placeholder="form = round" value={value} onChange={handleChange} />
        </div>

        <div className={cnDocsExample()}>
          <TextField placeholder="form = roundClear" form="roundClear" value={value} onChange={handleChange} style={{ width: '260px' }}/>
        </div>
        <div className={cnDocsExample()}>
          <Button form="brickRound" label="form = brickRound" />
        </div>
      </div>

      <div className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' }),])}>
        <div className={cnDocsExample()}>
          <TextField onChange={handleChange} value={value} placeholder="labelPosition = top" label="Лейбл" labelPosition="top"/>
        </div>
        <div className={cnDocsExample()}>
          <TextField onChange={handleChange} value={value} placeholder="labelPosition = left" label="Лейбл" labelPosition="left"/>
        </div>
      </div>

      <div className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' }),])}>
        <div className={cnDocsExample()}>
          <TextField label="Поле раз" onChange={handleChange} value={value} type="text" placeholder="required" required/>
        </div>
        <div className={cnDocsExample()}>
          <TextField label="Поле два" onChange={handleChange} value={value} type="text" placeholder="default"/>
        </div>
      </div>

      <div className={cnDocsDecorator('Section')}>
        <div className={cnDocsExample()}>
          <TextField width="full" placeholder="width = full" onChange={handleChange} value={value}/>
        </div>
      </div>

      <div className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1-1', 'col-gap': 'full' }),])}>
        <div className={cnDocsExample()}>
          <TextField size="l" placeholder="size = l" onChange={handleChange} value={value} />
        </div>
        <div className={cnDocsExample()}>
          <TextField size="m" placeholder="size = m" onChange={handleChange} value={value} />
        </div>
        <div className={cnDocsExample()}>
          <TextField size="s" placeholder="size = s" onChange={handleChange} value={value} />
        </div>
        <div className={cnDocsExample()}>
          <TextField size="xs" placeholder="size = xs" onChange={handleChange} value={value} />
        </div>
      </div>

      <div className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1', 'col-gap': 'full' }),])}>
        <div className={cnDocsExample()}>
          <TextField leftSide="leftSide" value={value} onChange={handleChange} />
        </div>
        <div className={cnDocsExample()}>
          <TextField leftSide={Gift} rightSide="rightSide" value={value} onChange={handleChange} />
        </div>
      </div>

      <div className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' }),])}>
        <div className={cnDocsExample()}>
          <TextField onChange={handleChange} value={value} type="text" placeholder="type = text" />
        </div>
        <div className={cnDocsExample()}>
          <TextField onChange={handleChange} value={value} type="textarea" placeholder="type = textarea" cols={200} rows={3}/>
        </div>
        <div className={cnDocsExample()}>
          <TextField onChange={handleChange} value={value} type="number" placeholder="type = number" step="2"/>
        </div>
      </div>

      <div className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' }),])}>
        <div className={cnDocsExample()}>
          <TextField view="default" placeholder="view = default" value={value} onChange={handleChange}/>
        </div>
        <div className={cnDocsExample()}>
          <TextField view="clear" placeholder="view = clear" value={value} onChange={handleChange} />
        </div>
        <div className={cnDocsExample()}>
          <TextField placeholder="disabled" disabled value={value} onChange={handleChange} />
        </div>
      </div>

      <div className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1', 'col-gap': 'full' }),])}>
        <div className={cnDocsExample()}>
          <TextField type="textarea" rows={7} cols={50} onChange={handleChange} defaultValue={"type = textarea rows = {7} cols = {50}"} />
        </div>
        <div className={cnDocsExample()}>
          <TextField type="textarea" minRows={13} cols={25} onChange={handleChange} defaultValue={"type = textarea rows = {13} cols = {25}"} />
        </div>
      </div>

    </div>



  );
};
