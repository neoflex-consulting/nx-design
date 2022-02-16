import './HeaderButtonExample.css';

import React from 'react';

import { CommentChat } from '../../../../../icons/CommentChat/CommentChat';
import { Gift } from '../../../../../icons/Gift/Gift';
import { Bell } from '../../../../../icons/Bell/Bell';
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
            <HeaderButton iconLeft={Gift} />
          </HeaderModule>
          <HeaderModule indent="s">
            <HeaderButton iconLeft={CommentChat} />
          </HeaderModule>
          <HeaderModule indent="s">
            <HeaderButton iconLeft={Bell} />
          </HeaderModule>
        </>
      }
    />
  );
}
