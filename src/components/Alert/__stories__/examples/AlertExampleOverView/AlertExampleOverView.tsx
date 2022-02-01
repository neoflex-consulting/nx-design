import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cnDocsExample } from '../../../../../uiKit/components/DocsExample/DocsExample';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Alert } from '../../../Alert';
import {IconThumbUp} from "../../../../../icons/IconThumbUp/IconThumbUp";

export function AlertExampleOverView() {
  return (
    <div>
      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Alert label="view = filled" view="filled" status="success" />
        </div>
        <div className={cnDocsExample()}>
          <Alert label="view = outlined" view="outlined" status="success" />
        </div>
        <div className={cnDocsExample()}>
          <Alert label="view = bordered" view="bordered" status="success" />
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Alert label="view = filled" view="filled" status="warning" />
        </div>
        <div className={cnDocsExample()}>
          <Alert label="view = outlined" view="outlined" status="warning" />
        </div>
        <div className={cnDocsExample()}>
          <Alert label="view = bordered" view="bordered" status="warning" />
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Alert label="view = filled" view="filled" status="error" />
        </div>
        <div className={cnDocsExample()}>
          <Alert label="view = outlined" view="outlined" status="error" />
        </div>
        <div className={cnDocsExample()}>
          <Alert label="view = bordered" view="bordered" status="error" />
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Alert label="view = filled" view="filled" status="info" />
        </div>
        <div className={cnDocsExample()}>
          <Alert label="view = outlined" view="outlined" status="info" />
        </div>
        <div className={cnDocsExample()}>
          <Alert label="view = bordered" view="bordered" status="info" />
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Alert label="view = filled" view="filled" status="system" />
        </div>
        <div className={cnDocsExample()}>
          <Alert label="view = outlined" view="outlined" status="system" />
        </div>
        <div className={cnDocsExample()}>
          <Alert label="view = bordered" view="bordered" status="system" />
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Alert label="with icon" view="filled" status="success" icon={IconThumbUp}/>
        </div>
        <div className={cnDocsExample()}>
          <Alert label="with icon" view="outlined" status="success" icon={IconThumbUp}/>
        </div>
        <div className={cnDocsExample()}>
          <Alert label="with icon" view="bordered" status="success" icon={IconThumbUp}/>
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Alert label="size = s" view="filled" status="success" size="s"/>
        </div>
        <div className={cnDocsExample()}>
          <Alert label="size = m" view="outlined" status="success" size="m"/>
        </div>
        <div className={cnDocsExample()}>
          <Alert label="size = l" view="bordered" status="success" size="l"/>
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Alert title="Заголовок" label="С заголовком" view="filled" status="success"/>
        </div>
        <div className={cnDocsExample()}>
          <Alert title="Заголовок" label="С заголовком" view="outlined" status="success"/>
        </div>
        <div className={cnDocsExample()}>
          <Alert title="Заголовок" label="С заголовком" view="bordered" status="success"/>
        </div>
      </div>


    </div>
  );
}
