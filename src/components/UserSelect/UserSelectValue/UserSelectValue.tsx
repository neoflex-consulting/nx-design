import './UserSelectValue.css';

import React from 'react';

import { Close } from '../../../icons/Close/Close';
import { cn } from '../../../utils/bem';
import { User } from '../../User/User';

type UserValueProps = {
  label: string;
  size: 's' | 'm' | 'l';
  subLabel?: string;
  avatarUrl?: string;
  handleRemove?: (e: React.SyntheticEvent) => void;
  multiple?: boolean;
  disabled?: boolean;
  children?: never;
};

export const cnUserSelectValue = cn('UserSelectValue');

export const UserSelectValue: React.FC<UserValueProps> = (props) => {
  const { size, label, subLabel, disabled, handleRemove, avatarUrl, multiple } = props;

  return (
    <User
      className={cnUserSelectValue({ multiple, size })}
      avatarUrl={avatarUrl}
      name={label}
      info={subLabel}
      size={size}
      view={multiple ? 'ghost' : 'clear'}
      iconRight={!disabled && multiple ? Close : undefined}
      onIconRightClick={!disabled && multiple ? handleRemove : undefined}
    />
  );
};
