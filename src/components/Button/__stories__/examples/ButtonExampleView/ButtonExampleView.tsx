import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cnDocsExample } from '../../../../../uiKit/components/DocsExample/DocsExample';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Button } from '../../../Button';
import {Icon} from "nx-icon/lib";

export function ButtonExampleViewPrimary() {
  const iconRight = <Icon icon={"arrow-right"}/>
  const iconLeft = <Icon icon={"plus"}/>
  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button label="Войти" />
      </div>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button label="Продолжить" iconRight={ iconRight } />
      </div>
      <div className={cnDocsExample()}>
        <Button label="Добавить" iconLeft={ iconLeft } onlyIcon />
      </div>
    </div>
  );
}

export function ButtonExampleViewSecondary() {
  const iconRight = <Icon icon={"edit"}/>
  const iconLeft = <Icon icon={"chat"}/>
  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button view="secondary" label="Читать далее" />
      </div>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button view="secondary" label="Комментировать" iconLeft={ iconLeft } />
      </div>
      <div className={cnDocsExample()}>
        <Button view="secondary" label="Редактировать" iconRight={ iconRight } onlyIcon />
      </div>
    </div>
  );
}

export function ButtonExampleViewGhost() {
  const iconLeft = <Icon icon={"settings"}/>
  const iconLeft_ = <Icon icon={"filter"}/>
  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button view="ghost" label="Отмена" />
      </div>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button view="ghost" label="Настройки" iconLeft={iconLeft} />
      </div>
      <div className={cnDocsExample()}>
        <Button view="ghost" label="Фильтр" iconLeft={iconLeft_} onlyIcon />
      </div>
    </div>
  );
}

export function ButtonExampleViewClear() {
  const iconLeft = <Icon icon={"copy"}/>
  const iconLeft_ = <Icon icon={"mark"}/>
  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button view="clear" label="Развернуть" />
      </div>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button view="clear" label="Скопировать" iconLeft={iconLeft} />
      </div>
      <div className={cnDocsExample()}>
        <Button view="clear" label="Добавить в Избранное" iconLeft={iconLeft_} onlyIcon />
      </div>
    </div>
  );
}

export function ButtonExampleViewLink() {
  const iconLeft = <Icon icon={"arrow-backward"}/>
  const iconLeft_ = <Icon icon={"save"}/>
  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button view="link" label="Ссылка" />
      </div>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button view="link" label="Назад" iconLeft={iconLeft} />
      </div>
      <div className={cnDocsExample()}>
        <Button view="link" label="Сохранить" iconLeft={iconLeft_} onlyIcon />
      </div>
    </div>
  );
}

export function ButtonExampleViewDisabled() {
  const iconRight = <Icon icon={"arrow-right"}/>
  const iconRight_ = <Icon icon={"plus"}/>
  return (
    <div className={cnDocsDecorator('Section', [wp.decorator({ distribute: 'left' })])}>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button disabled label="Войти" />
      </div>
      <div className={cnDocsExample(null, [wp.decorator({ 'indent-r': 's' })])}>
        <Button disabled label="Продолжить" iconRight={iconRight} />
      </div>
      <div className={cnDocsExample()}>
        <Button disabled label="Добавить" iconRight={iconRight_} onlyIcon />
      </div>
    </div>
  );
}
