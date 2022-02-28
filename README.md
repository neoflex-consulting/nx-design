# [Дизайн-система NX Design](http://consta.gazprom-neft.ru/) | Библиотека интерфейсных компонентов

NX Design — дизайн-система для разработки интерфейсов, написана на [React](https://reactjs.org/), сделана и поддерживается в «Неофлекс».

**В этом репозитории — библиотека интерфейсных компонентов:** простые контролы, сложные блоки, темы и хуки. В другом репозитории — [библиотека графиков](https://github.com/gazprom-neft/consta-charts). Обе библиотеки представлены в виде компонентов и макетов в Figma.

## Что входит в дизайн-систему

### Библиотека компонентов

[Репозиторий](https://github.com/neoflex-consulting/nx-design) | [NPM](https://www.npmjs.com/package/@consta/uikit) | [Документация и стенд](https://consta-uikit.vercel.app/?path=/story/common-about--page) | [Макеты](https://www.figma.com/community/file/853774806786762374)

### Библиотека графиков

[Репозиторий](https://github.com/gazprom-neft/consta-charts) | [NPM](https://www.npmjs.com/package/@consta/charts) | [Документация и стенд](https://consta-charts.vercel.app/) | [Макеты](https://www.figma.com/community/file/982611119114314434)

<hr>

Подробности — на [на сайте дизайн-системы NX Design](http://consta.gazprom-neft.ru/)

Следите за новостями и релизами в [телеграм-канале дизайн-системы](https://t.me/consta_ui_releases)

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
