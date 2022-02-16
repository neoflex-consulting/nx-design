import './ContextMenuExampleSide.css';

import React, { useRef, useState } from 'react';

import { IconProps } from '../../../../../icons/_Icon/Icon';
import { Plus } from '../../../../../icons/Plus/Plus';
import { Info } from '../../../../../icons/Info/Info';
import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { cn } from '../../../../../utils/bem';
import { Badge } from '../../../../Badge/Badge';
import { Button } from '../../../../Button/Button';
import { Switch } from '../../../../Switch/Switch';
import { ContextMenu } from '../../../ContextMenu';

type Item = {
  name: string;
  icon: React.FC<IconProps>;
  switch?: boolean;
  status: 'warning' | 'success';
};

const menuItems: Item[] = [
  {
    name: 'Пункт 1',
    icon: Info,
    status: 'success',
  },
  {
    name: 'Пункт 2',
    icon: Info,
    status: 'warning',
    switch: false,
  },
  {
    name: 'Пункт 3',
    icon: Info,
    status: 'success',
    switch: true,
  },
];

const cnContextMenuExampleSide = cn('ContextMenuExampleSide');

function renderLeftSide(item: Item): React.ReactNode {
  const Icon = item.icon;
  return <Icon size="s" />;
}

function renderRightSide(item: Item, onChange: (item: Item) => void): React.ReactNode {
  const nodeArray = [];

  item.switch !== undefined &&
    nodeArray.push(
      <Switch size="m" checked={item.switch} onChange={() => onChange(item)} key="Switch" />,
    );

  nodeArray.push(<Badge status={item.status} minified key="Badge" size="s" />);

  return nodeArray;
}

export const ContextMenuExampleSide = () => {
  const [items, setItems] = useState(menuItems);
  const ref = useRef(null);

  const getLabel = (item: Item) => item.name;

  const onChange = (switchItem: Item) => {
    const newItems = items.map((item, index) => {
      if (getLabel(switchItem) === getLabel(item)) {
        return { ...items[index], switch: !items[index].switch };
      }
      return item;
    });

    setItems(newItems);
  };

  return (
    <StoryBookExample className={cnDocsDecorator('Section', [cnContextMenuExampleSide()])}>
      <Button iconLeft={Plus} ref={ref} />
      <ContextMenu
        items={items}
        getLabel={getLabel}
        anchorRef={ref}
        direction="downStartLeft"
        getLeftSideBar={renderLeftSide}
        getRightSideBar={(item) => renderRightSide(item, onChange)}
        possibleDirections={['upStartLeft', 'downStartLeft']}
      />
    </StoryBookExample>
  );
};
