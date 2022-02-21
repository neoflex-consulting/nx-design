import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cnDocsExample } from '../../../../../uiKit/components/DocsExample/DocsExample';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import {Button} from "../../../Button";
import {ArrowRight} from "../../../../../icons/ArrowRight/ArrowRight";
import {Plus} from "../../../../../icons/Plus/Plus";
import {Edit} from "../../../../../icons/Edit/Edit";
import {Chat} from "../../../../../icons/Chat/Chat";
import {Settings} from "../../../../../icons/Settings/Settings";
import {Filter} from "../../../../../icons/Filter/Filter";
import {Copy} from "../../../../../icons/Copy/Copy";
import {Mark} from "../../../../../icons/Mark/Mark";
import {ArrowBackward} from "../../../../../icons/ArrowBackward/ArrowBackward";
import {Save} from "../../../../../icons/Save/Save";
import {TextField} from "../../../../TextField/TextField";

export function ButtonExampleOverView() {
  return (
    <div>
      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Button label="view = primary" />
        </div>
        <div className={cnDocsExample()}>
          <Button label="view = primary" iconRight={ArrowRight} />
        </div>
        <div className={cnDocsExample()}>
          <Button label="view = primary" iconLeft={Plus} onlyIcon />
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Button view="secondary" label="view = secondary" />
        </div>
        <div className={cnDocsExample()}>
          <Button view="secondary" label="view = secondary"  iconLeft={ Edit } />
        </div>
        <div className={cnDocsExample()}>
          <Button view="secondary" label="view = secondary"  iconRight={ Chat } onlyIcon />
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Button disabled label="disabled" />
        </div>
        <div className={cnDocsExample()}>
          <Button disabled label="disabled" iconRight={ArrowRight} />
        </div>
        <div className={cnDocsExample()}>
          <Button disabled label="disabled" iconRight={Plus} onlyIcon />
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Button view="ghost" label="view = ghost" />
        </div>
        <div className={cnDocsExample()}>
          <Button view="ghost" label="view = ghost" iconLeft={Settings} />
        </div>
        <div className={cnDocsExample()}>
          <Button view="ghost" label="view = ghost" iconLeft={Filter} onlyIcon />
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Button view="clear" label="view = clear" />
        </div>
        <div className={cnDocsExample()}>
          <Button view="clear" label="view = clear" iconLeft={Copy} />
        </div>
        <div className={cnDocsExample()}>
          <Button view="clear" label="view = clear" iconLeft={Mark} onlyIcon />
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Button view="link" label="view = link" />
        </div>
        <div className={cnDocsExample()}>
          <Button view="link" label="view = link" iconLeft={ArrowBackward} />
        </div>
        <div className={cnDocsExample()}>
          <Button view="link" label="view = link" iconLeft={Save} onlyIcon />
        </div>
      </div>

      <div className={cnDocsDecorator('Section')}>
        <div className={cnDocsExample()}>
          <Button width="full" label="width = full" />
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1-1', 'col-gap': 'full' }),])}>
        <div className={cnDocsExample()}>
          <Button label="size = l" size="l" />
        </div>
        <div className={cnDocsExample()}>
          <Button label="size = m" size="m" />
        </div>
        <div className={cnDocsExample()}>
          <Button label="size = s" size="s" />
        </div>
        <div className={cnDocsExample()}>
          <Button label="size = xs" size="xs" />
        </div>
      </div>

      <div className={cnDocsDecorator('Section')}>
        <div className={cnDocsExample()}>
          <Button width="full" loading />
        </div>
      </div>

      <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
        <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
          <Button label="Default" />
        </div>
        <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
          <Button form="brick" label="form = brick" />
        </div>
        <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
          <Button form="round" label="form = round" />
        </div>

        <div className={cnDocsExample()}>
          <TextField placeholder="TextField" form="roundClear" style={{ width: '260px' }} />
        </div>
        <div className={cnDocsExample()}>
          <Button form="brickRound" label="form = brickRound"  />
        </div>
      </div>

    </div>
  );
}
