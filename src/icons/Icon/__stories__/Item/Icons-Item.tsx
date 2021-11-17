import React from 'react';

import {NeoIcon} from "neo-icon";

export type IconPropSize = 'xxs' | 'xs' | 's' | 'm' | 'l';

export type IconsItemProps = {
  icon: any;
  size: IconPropSize;
  color: string;
  customSize: number;
};

export const IconsItem: React.FC<IconsItemProps> = ({ icon, size, color ,customSize}) => {
  return (
    <div className="tpl-grid__fraction text text_align_center" style={{fill: color}}>
      {customSize !== 0 && customSize !== null ?
        <NeoIcon icon={icon} customSize={customSize.toString()}/>
        :
        <NeoIcon icon={icon} size={size}/>
      }
      <div className="text_size_s text_view_secondary">{icon}</div>
    </div>
  );
};
