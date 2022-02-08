import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cnDocsExample } from '../../../../../uiKit/components/DocsExample/DocsExample';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Button } from '../../../Button';
import {Icon} from "nx-icon/lib";
import {Plus} from "../../../../../icons/Plus/Plus";
import {ArrowRight} from "../../../../../icons/ArrowRight/ArrowRight";
import {Chat} from "../../../../../icons/Chat/Chat";
import {Copy} from "../../../../../icons/Copy/Copy";
import {Edit} from "../../../../../icons/Edit/Edit";
import {Settings} from "../../../../../icons/Settings/Settings";
import {Filter} from "../../../../../icons/Filter/Filter";
import {Mark} from "../../../../../icons/Mark/Mark";
import {ArrowBackward} from "../../../../../icons/ArrowBackward/ArrowBackward";
import {Save} from "../../../../../icons/Save/Save";

export function ButtonExampleViewPrimary() {

  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button label="Войти" />
      </div>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button label="Продолжить" iconRight={ArrowRight} />
      </div>
      <div className={cnDocsExample()}>
        <Button label="Добавить" iconLeft={Plus} onlyIcon />
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
        <Button view="secondary" label="Комментировать" iconLeft={ Edit } />
      </div>
      <div className={cnDocsExample()}>
        <Button view="secondary" label="Редактировать" iconRight={ Chat } onlyIcon />
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
        <Button view="ghost" label="Настройки" iconLeft={Settings} />
      </div>
      <div className={cnDocsExample()}>
        <Button view="ghost" label="Фильтр" iconLeft={Filter} onlyIcon />
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
        <Button view="clear" label="Скопировать" iconLeft={Copy} />
      </div>
      <div className={cnDocsExample()}>
        <Button view="clear" label="Добавить в Избранное" iconLeft={Mark} onlyIcon />
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
        <Button view="link" label="Назад" iconLeft={ArrowBackward} />
      </div>
      <div className={cnDocsExample()}>
        <Button view="link" label="Сохранить" iconLeft={Save} onlyIcon />
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
        <Button disabled label="Продолжить" iconRight={ArrowRight} />
      </div>
      <div className={cnDocsExample()}>
        <Button disabled label="Добавить" iconRight={Plus} onlyIcon />
      </div>
    </div>
  );
}
