import React from 'react';

import {NeoIcon} from "neo-icon";

export type IconsItemProps = {
  icon: any;
  view: string;
  disabled: boolean;
  loading: boolean;
};

export const IconsItemButton: React.FC<IconsItemProps> = ({icon, view, disabled, loading}) => {

  return (
    disabled && <NeoIcon icon={icon} color={view == 'primary' ? 'white' : undefined} style={{opacity: loading ? 0 : disabled ? 0.3 : 1}}/>
    ||
    <NeoIcon icon={icon} color={view == 'primary' ? 'white' : undefined} style={{opacity: loading ? 0 : disabled ? 0.3 : 1}}/>
  );
};
