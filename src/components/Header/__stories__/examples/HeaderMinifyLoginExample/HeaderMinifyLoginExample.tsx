import './HeaderMinifyLoginExample.css';

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
  HeaderSearchBar,
} from '../../../Header';
import { SearchBarPropOnChange, SearchBarPropOnSearch } from '../../../SearchBar/HeaderSearchBar';

const cnExample = cn('HeaderMinifyLoginExample');

export function HeaderMinifyLoginExample() {
  const [value, setValue] = useState<string | null>(null);
  const [authorized, setAuthorized] = useState<boolean>(false);
  const handleChange: SearchBarPropOnChange = ({ value }) => setValue(value);
  // eslint-disable-next-line no-alert
  const handleSearch: SearchBarPropOnSearch = ({ value }) =>
    alert(`Произведен поиск, запрос - ${value} `);
  const handleLogin = () => setAuthorized(!authorized);

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
            <HeaderSearchBar
              placeholder="я ищу"
              label="поиск"
              value={value}
              onChange={handleChange}
              onSearch={handleSearch}
            />
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
              className={cnExample('Login', { authorized })}
              authorized={authorized}
              personName="Вадим Матвеев"
              personInfo="В другом офисе"
              personStatus="available"
              onClick={handleLogin}
              isMinified
            />
          </HeaderModule>
        </>
      }
    />
  );
}
