import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cnDocsExample } from '../../../../../uiKit/components/DocsExample/DocsExample';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Button } from '../../../Button';
import {IconPlus} from "../../../../../icons/IconPlus/IconPlus";
import {IconArrowRight} from "../../../../../icons/IconArrowRight/IconArrowRight";
import {IconChat} from "../../../../../icons/IconChat/IconChat";
import {IconCopy} from "../../../../../icons/IconCopy/IconCopy";
import {IconEdit} from "../../../../../icons/IconEdit/IconEdit";
import {IconSettings} from "../../../../../icons/IconSettings/IconSettings";
import {IconFilter} from "../../../../../icons/IconFilter/IconFilter";
import {IconMark} from "../../../../../icons/IconMark/IconMark";
import {IconArrowBackward} from "../../../../../icons/IconArrowBackward/IconArrowBackward";
import {IconSave} from "../../../../../icons/IconSave/IconSave";

export function ButtonExampleViewPrimary() {

  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button label="Войти" />
      </div>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button label="Продолжить" iconRight={IconArrowRight} />
      </div>
      <div className={cnDocsExample()}>
        <Button label="Добавить" iconLeft={IconPlus} onlyIcon />
      </div>
    </div>
  );
}

export function ButtonExampleViewSecondary() {
  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button view="secondary" label="Читать далее" />
      </div>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button view="secondary" label="Комментировать" iconLeft={ IconEdit } />
      </div>
      <div className={cnDocsExample()}>
        <Button view="secondary" label="Редактировать" iconRight={ IconChat } onlyIcon />
      </div>
    </div>
  );
}

export function ButtonExampleViewGhost() {
  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button view="ghost" label="Отмена" />
      </div>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button view="ghost" label="Настройки" iconLeft={IconSettings} />
      </div>
      <div className={cnDocsExample()}>
        <Button view="ghost" label="Фильтр" iconLeft={IconFilter} onlyIcon />
      </div>
    </div>
  );
}

export function ButtonExampleViewClear() {
  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button view="clear" label="Развернуть" />
      </div>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button view="clear" label="Скопировать" iconLeft={IconCopy} />
      </div>
      <div className={cnDocsExample()}>
        <Button view="clear" label="Добавить в Избранное" iconLeft={IconMark} onlyIcon />
      </div>
    </div>
  );
}

export function ButtonExampleViewLink() {
  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button view="link" label="Ссылка" />
      </div>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button view="link" label="Назад" iconLeft={IconArrowBackward} />
      </div>
      <div className={cnDocsExample()}>
        <Button view="link" label="Сохранить" iconLeft={IconSave} onlyIcon />
      </div>
    </div>
  );
}

export function ButtonExampleViewDisabled() {
  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button disabled label="Войти" />
      </div>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button disabled label="Продолжить" iconRight={IconArrowRight} />
      </div>
      <div className={cnDocsExample()}>
        <Button disabled label="Добавить" iconRight={IconPlus} onlyIcon />
      </div>
    </div>
  );
}
