import './ComponentsGridItem.css';

import React from 'react';

import { Typography } from '../../../../components/Typography/Typography';
import { cn } from '../../../cn';

const cnComponentsGridItem = cn('ComponentsGridItem');

type ComponentsGridItemProps = {
  name: string;
  description?: string;
  href: string;
  children?: never;
};

export const ComponentsGridItem: React.FC<ComponentsGridItemProps> = ({
  name,
  description,
  href,
}) => {
  return (
    <div className={cnComponentsGridItem()}>
      <Typography size="l" as="a" view="link" href={href} target="blank">
        {name}
      </Typography>
      {description && <Typography size="s">{description}</Typography>}
    </div>
  );
};
