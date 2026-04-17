# Tracker Prototype — контекст проекта

## Стек
Чистый HTML + CSS + Vanilla JS, без сборки. Шрифт Euclid Circular A (куплен, лежит в `fonts/`).

## Запуск
`.claude/launch.json` → `npx -y serve -l 8123 .` → открывать http://localhost:8123

---

## Текущее состояние верстки

### Что работает
- **Экран 1.1** — выбор настроения (5 кнопок с иконками + подписи цветом настроения)
- **Экран 1.2** — подтверждение (иконка выбранного настроения, кнопки «Выбрать» / стрелка →, chevron назад)
- **Экран 1.3** — модалка причин (сетка кружков chipBg по настроению, скролл только у кружков, хедер/футер закреплены)
- Навигация через `data-screen="1.1|1.2|1.3"` на `.app`
- Statusbar и Appbar прибиты к верху (`flex-shrink: 0`)
- Tabbar прибит к низу (`flex-shrink: 0`)
- `.content` скроллится между ними (`flex: 1; min-height: 0; overflow-y: auto`)

### Текущий баг (не исправлен, прерван юзером)
`.app` имеет `width: 100%; max-width: 500px` — на широких экранах растягивается до 500px, но юзер считает это «фиксированной шириной». Нужно сделать **резиновый дизайн**: на мобильном — 100% ширины, на широком — тоже 100% но не более 500px. Возможно проблема не в `.app`, а в том, что внутренние элементы имеют хардкоженые ширины (например `width: 302px` у `.tracker-title`, `width: 343px` у `.mood-row`). Нужно заменить все фиксированные `px`-ширины на `%` или убрать.

---

## Файловая структура

```
tracker-prototype/
├── index.html          — разметка трёх экранов + модалка 1.3
├── styles.css          — все стили
├── script.js           — логика навигации и рендера
├── CONTEXT.md          — этот файл
├── assets/
│   ├── mood-1-terrible.svg .. mood-5-great.svg
│   ├── mood-modal.svg
│   ├── card-1.png .. card-4.png
│   ├── avatar.png
│   └── info.svg
├── fonts/
│   ├── Regular.woff2
│   ├── Medium.woff2
│   ├── Semibold.woff2
│   └── SemiboldItalic.woff2
└── .claude/
    └── launch.json
```

---

## JS — ключевые данные

```js
const MOODS = [
  { id: 'terrible', label: 'Ужасно',      textColor: '#a976b8', chipBg: '#ead8ef', icon: 'assets/mood-1-terrible.svg' },
  { id: 'bad',      label: 'Плохо',       textColor: '#6c6da8', chipBg: '#d7d8eb', icon: 'assets/mood-2-bad.svg' },
  { id: 'normal',   label: 'Нормально',   textColor: '#4c85b3', chipBg: '#cfe0ed', icon: 'assets/mood-3-normal.svg' },
  { id: 'good',     label: 'Хорошо',      textColor: '#ca9231', chipBg: '#f5e2bd', icon: 'assets/mood-4-good.svg' },
  { id: 'great',    label: 'Великолепно', textColor: '#dc831c', chipBg: '#ffddb6', icon: 'assets/mood-5-great.svg' },
];
```

---

## CSS — текущие ключевые правила

```css
/* Тело страницы */
html, body { margin: 0; padding: 0; height: 100%; overflow: hidden; }
body { background: var(--bg-primary); }

/* Фрейм приложения */
.app {
  width: 100%;
  max-width: 500px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Закреплённые верх/низ */
.statusbar, .appbar { flex-shrink: 0; z-index: 1; }
.tabbar             { flex-shrink: 0; z-index: 1; }
.home-indicator     { flex-shrink: 0; }

/* Скроллящийся контент */
.content {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  background: var(--bg-secondary);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
}

/* Модалка */
.modal { position: fixed; inset: 0; display: none; z-index: 100; }
.app[data-screen='1.3'] ~ .modal { display: flex; }
.modal-sheet { width: 100%; height: 100%; display: flex; flex-direction: column; }
.modal-grid-wrap { flex: 1; min-height: 0; overflow-y: auto; }
```

## CSS токены

```css
--bg-primary: #fff
--bg-secondary: #eaeff8
--bg-action: #ffb800
--fg-primary: #22263b
--fg-secondary: rgba(34,38,59,0.8)
--fg-tertiary: rgba(34,38,59,0.6)
--fg-accent: #344079
--border-secondary: rgba(52,64,121,0.2)
--radius-m: 16px
--radius-full: 1000px
--shadow-elev: 0 12px 24px -4px rgba(34,38,59,0.05)
```

---

## TODO

### Срочно (прерванная задача)
- **Сделать дизайн резиновым**: заменить все хардкоженые `px`-ширины внутри карточек, `.mood-row`, `.tracker-title` и т.д. на относительные (`%`, `max-width`, `clamp`). Юзер хочет чтобы на любой ширине до 500px макет масштабировался корректно, а не выглядел как 375px-фрейм внутри широкого экрана.

### Следующие шаги по продукту
1. **Шаг 2 — Энергия**: новые экраны 2.1/2.2 с иконками энергии, свой массив `ENERGY` с `REASONS`
2. **Шаг 3 — Физическое самочувствие**: аналогично
3. Кнопка стрелка → на экране 1.2 должна вести на шаг 2 (сейчас no-op / TODO)
