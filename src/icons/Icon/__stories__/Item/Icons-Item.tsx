import React from 'react';

import { IconProps } from '../../Icon';
import {NeoIcon} from "neo-icon";

export type IconsItemProps = {
  icon: React.FC<IconProps>;
  name: string;
} & IconProps;

export const IconsItem: React.FC<IconsItemProps> = ({ icon, size, color ,customSize}) => {
  return (
    <div className="tpl-grid__fraction text text_align_center">
      {customSize !== null ?
        <NeoIcon icon={icon} customSize={customSize} color={color}/>
        :
        <NeoIcon icon={icon} size={size} color={color}/>
      }
      <div className="text_size_s text_view_secondary">{icon}</div>
    </div>
  );
};
