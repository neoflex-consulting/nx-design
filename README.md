# [Дизайн-система NX Design](http://consta.gazprom-neft.ru/) | Библиотека интерфейсных компонентов

NX Design — дизайн-система для разработки интерфейсов, написана на [React](https://reactjs.org/), сделана и поддерживается в «Неофлекс».

**В этом репозитории — библиотека интерфейсных компонентов:** простые контролы, сложные блоки, темы и хуки.

## Что входит в дизайн-систему

### Библиотека компонентов

[Репозиторий](https://github.com/neoflex-consulting/nx-design) | [NPM](https://www.npmjs.com/package/nx-design) | [Документация и стенд](http://cloud2:6006/?path=/docs/common-about--page)

# Как использовать

## Установите пакет

```
yarn add nx-design
```

## Сборка пакета

```
yarn build
```

## Начните работу с библиотекой

Чтобы начать работу с библиотекой интерфейсных компонентов, подключите тему:

```tsx
import { Theme, presetGpnDefault } from 'nx-design/Theme';
import { Button } from 'nx-design/Button';

const App = () => (
  <Theme preset={presetGpnDefault}>
    <Button label="Кнопка" />
  </Theme>
);
```

[Что такое темы и как с ними работать](https://consta-uikit.vercel.app/?path=/docs/thematization-what-are-themes--page)

## Документация и стенд

На стенде можно менять параметры и смотреть, как меняются компоненты. Документация — во вкладке у каждого компонента.

[Вперёд, к стенду](http://cloud2:6006/)

## Лицензия

Дизайн-систему можно использовать бесплатно, она распространяется «Неофлекс» на условиях открытой [лицензии MIT](https://consta.gazprom-neft.ru/static/licence_mit.pdf).
