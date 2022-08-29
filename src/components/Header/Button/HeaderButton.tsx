import React from 'react';

import { cn } from '../../../utils/bem';
import { Button } from '../../Button/Button';

export const cnHeaderButton = cn('HeaderButton');

type ButtonProps = React.ComponentProps<typeof Button>;

type HeaderButtonProps = ButtonProps;

export const HeaderButton: React.FC<HeaderButtonProps> = (props) => {
  const { className, size, view, form, onlyIcon, ...otherProps } = props;
  return (
    <Button
      {...otherProps}
      className={cnHeaderButton(null, [className])}
      size={size || "m"}
      view={view || "clear"}
      form={form || "round"}
      onlyIcon={onlyIcon || true}
    />
  );
};
