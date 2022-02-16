import './HeaderFullExample.css';

import React, { useState } from 'react';

import { CommentChat } from '../../../../../icons/CommentChat/CommentChat';
import { Bell } from '../../../../../icons/Bell/Bell';
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

const cnExample = cn('HeaderFullExample');

export function HeaderFullExample() {
  const [value, setValue] = useState<string | null>(null);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const handleChange: SearchBarPropOnChange = ({ value }) => setValue(value);
  // eslint-disable-next-line no-alert
  const handleSearch: SearchBarPropOnSearch = ({ value }) =>
    alert(`Произведен поиск, запрос - ${value} `);
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
            <HeaderButton iconLeft={Bell} />
          </HeaderModule>
          <HeaderModule indent="s">
            <HeaderButton iconLeft={CommentChat} />
          </HeaderModule>
          <HeaderModule indent="s">
            <HeaderLogin
              isLogged={isLogged}
              personName="Михаил Зерно"
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
