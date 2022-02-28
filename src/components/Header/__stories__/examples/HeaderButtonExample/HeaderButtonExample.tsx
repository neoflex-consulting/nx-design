import './HeaderButtonExample.css';

import React from 'react';

import { IconCommentChat } from '../../../../../icons/IconCommentChat/IconCommentChat';
import { IconGift } from '../../../../../icons/IconGift/IconGift';
import { IconBell } from '../../../../../icons/IconBell/IconBell';
import { cn } from '../../../../../utils/bem';
import { Header, HeaderButton, HeaderModule } from '../../../Header';

const cnExample = cn('HeaderButtonExample');

export function HeaderButtonExample() {
  return (
    <Header
      className={cnExample()}
      rightSide={
        <>
          <HeaderModule indent="s">
            <HeaderButton iconLeft={IconGift} />
          </HeaderModule>
          <HeaderModule indent="s">
            <HeaderButton iconLeft={IconCommentChat} />
          </HeaderModule>
          <HeaderModule indent="s">
            <HeaderButton iconLeft={IconBell} />
          </HeaderModule>
        </>
      }
    />
  );
}
