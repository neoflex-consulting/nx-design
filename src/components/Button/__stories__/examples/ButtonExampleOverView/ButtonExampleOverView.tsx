import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cnDocsExample } from '../../../../../uiKit/components/DocsExample/DocsExample';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import {Button} from "../../../Button";
import {IconArrowRight} from "../../../../../icons/IconArrowRight/IconArrowRight";
import {IconPlus} from "../../../../../icons/IconPlus/IconPlus";
import {IconEdit} from "../../../../../icons/IconEdit/IconEdit";
import {IconChat} from "../../../../../icons/IconChat/IconChat";
import {IconSettings} from "../../../../../icons/IconSettings/IconSettings";
import {IconFilter} from "../../../../../icons/IconFilter/IconFilter";
import {IconCopy} from "../../../../../icons/IconCopy/IconCopy";
import {IconMark} from "../../../../../icons/IconMark/IconMark";
import {IconArrowBackward} from "../../../../../icons/IconArrowBackward/IconArrowBackward";
import {IconSave} from "../../../../../icons/IconSave/IconSave";
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
          <Button label="view = primary" iconRight={IconArrowRight} />
        </div>
        <div className={cnDocsExample()}>
          <Button label="view = primary" iconLeft={IconPlus} onlyIcon />
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Button view="secondary" label="view = secondary" />
        </div>
        <div className={cnDocsExample()}>
          <Button view="secondary" label="view = secondary"  iconLeft={ IconEdit } />
        </div>
        <div className={cnDocsExample()}>
          <Button view="secondary" label="view = secondary"  iconRight={ IconChat } onlyIcon />
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Button disabled label="disabled" />
        </div>
        <div className={cnDocsExample()}>
          <Button disabled label="disabled" iconRight={IconArrowRight} />
        </div>
        <div className={cnDocsExample()}>
          <Button disabled label="disabled" iconRight={IconPlus} onlyIcon />
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Button view="ghost" label="view = ghost" />
        </div>
        <div className={cnDocsExample()}>
          <Button view="ghost" label="view = ghost" iconLeft={IconSettings} />
        </div>
        <div className={cnDocsExample()}>
          <Button view="ghost" label="view = ghost" iconLeft={IconFilter} onlyIcon />
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Button view="clear" label="view = clear" />
        </div>
        <div className={cnDocsExample()}>
          <Button view="clear" label="view = clear" iconLeft={IconCopy} />
        </div>
        <div className={cnDocsExample()}>
          <Button view="clear" label="view = clear" iconLeft={IconMark} onlyIcon />
        </div>
      </div>

      <div
        className={cnDocsDecorator('Section', [wp.tplGrid({ 'ratio': '1-1-1', 'col-gap': 'full' })])}
      >
        <div className={cnDocsExample()}>
          <Button view="link" label="view = link" />
        </div>
        <div className={cnDocsExample()}>
          <Button view="link" label="view = link" iconLeft={IconArrowBackward} />
        </div>
        <div className={cnDocsExample()}>
          <Button view="link" label="view = link" iconLeft={IconSave} onlyIcon />
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
