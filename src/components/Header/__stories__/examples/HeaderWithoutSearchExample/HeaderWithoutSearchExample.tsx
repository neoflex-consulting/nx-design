import './HeaderWithoutSearchExample.css';

import React, { useState } from 'react';

import { IconCommentChat } from '../../../../../icons/IconCommentChat/IconCommentChat';
import { IconBell } from '../../../../../icons/IconBell/IconBell';
import { cn } from '../../../../../utils/bem';
import { Typography } from '../../../../Typography/Typography';
import {
  Header,
  HeaderButton,
  HeaderLogin,
  HeaderLogo,
  HeaderMenu,
  HeaderModule,
} from '../../../Header';

const cnExample = cn('HeaderWithoutSearchExample');

export function HeaderWithoutSearchExample() {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const handleLogin = () => setIsLogged(!isLogged);

  const menuItems = [
    {
      label: 'Проекты',
      href: '#projects',
      active: true,
    },
    {
      label: 'Задачи',
      href: '#tasks',
    },
    {
      label: 'Еще',
      // eslint-disable-next-line no-alert
      onClick: () => alert('Еще'),
    },
  ];

  return (
    <Header
      className={cnExample()}
      leftSide={
        <>
          <HeaderModule>
            <HeaderLogo>
              <Typography as="p" size="l" weight="bold">
                Logotype
              </Typography>
            </HeaderLogo>
          </HeaderModule>
          <HeaderModule indent="l">
            <HeaderMenu items={menuItems} />
          </HeaderModule>
        </>
      }
      rightSide={
        <>
          <HeaderModule indent="s">
            <HeaderButton iconLeft={IconCommentChat} />
          </HeaderModule>
          <HeaderModule indent="s">
            <HeaderButton iconLeft={IconBell} />
          </HeaderModule>
          <HeaderModule indent="s">
            <HeaderLogin
              isLogged={isLogged}
              personName="Вадим Матвеев"
              personInfo="В другом офисе"
              personStatus="available"
              onClick={handleLogin}
              className={cnExample('Login', { isLogged })}
            />
          </HeaderModule>
        </>
      }
    />
  );
}
