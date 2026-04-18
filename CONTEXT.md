# Tracker Prototype — контекст проекта

## Стек
Чистый HTML + CSS + Vanilla JS, без сборки и зависимостей. Шрифт Euclid Circular A лежит в `fonts/` (Regular/Medium/Semibold/SemiboldItalic, `.woff2`).

## Запуск
`.claude/launch.json` → `npx -y serve -l 8123 .` → http://localhost:8123

---

## Архитектура

Всё управляется одной state-машиной в [script.js](script.js):

```js
let stepIdx = 0;              // 0..2 — текущий шаг
let phase = 'select';         // 'select' | 'confirm'
const selections = [null, null, null];
const customReasonsByStep = [[], [], []];
```

`renderTracker()` перерисовывает карточку трекера в зависимости от `stepIdx` и `phase`. Данные шагов — массив `STEPS` с `options`, `reasons`, тайтлами. Опции собираются через `makeOptions(defs)` + единый `PALETTE` из 5 пар цветов (textColor/chipBg).

Иконки:
- **Шаг 1 (настроение)** — SVG из `assets/mood-*.svg` (с фоном внутри svg)
- **Шаг 2 (энергия)** — PNG из `assets/шаг 2/*.png`, оборачиваются в `.icon-circle` с `chipBg` (флаг `iconWrap: true`)
- **Шаг 3 (самочувствие)** — PNG из `assets/шаг 3/*.png`, так же с `iconWrap`

---

## Экраны и флоу

### Карточка трекера (`.tracker-wrap` внутри `.content`)

**Select-фаза:** 5 круглых кнопок равномерно растянуты (`left:16px; right:16px; display:flex; flex:1`), счётчик `1/3` в правом верхнем, кнопка «назад» слева на шагах 2/3.

**Confirm-фаза:** иконка выбранного + вопрос + сабтайтл + две кнопки внизу:
- Шаги 1, 2 — жёлтая «Выбрать» растягивается (`flex:1`), справа `btn-square` со стрелкой ширина 56px; gap 8px; боковые отступы 16px
- Шаг 3 — обе кнопки равной ширины (`flex:1`), gap 16px, отступы по бокам 16px; правая кнопка — `btn-done` с чекмарком и текстом «Готово»

### Модалка причин (`#modal`)
- iOS-стиль bottom sheet: `transform: translateY(100%)` → `translateY(0)`, `cubic-bezier(0.32, 0.72, 0, 1)`, длительность 0.42s
- Затемнённая подложка `rgba(34,38,59,0.4)` сверху, через которую виден статусбар фонового экрана
- Сетка кружков-причин (honeycomb) со сдвигом рядов через `margin-bottom: -9px`, `mix-blend-mode: multiply`
- Выбранный кружок — `background: var(--fg-accent)` (тёмно-синий #344079) + `color: #fff`
- Кастомная строка добавленных пользователем вариантов получает класс `.modal-grid-row-custom` с `margin-bottom: 8px` (без наложения на обычную сетку)
- Нижняя кнопка: «Продолжить» на шагах 1, 2; «Готово» на шаге 3

### Модалка «Добавить своё» (`#modalAdd`)
- Открывается поверх модалки причин с той же iOS-анимацией
- Инпут получает `.focus()` при открытии (клавиатура на моб. устройствах всплывает сразу)
- Макс. 15 символов, ошибка показывается через `.is-error` + красный `#f06a6a`
- После submit — новый кружок добавляется сверху сетки в выбранном состоянии

### Завершение (finishFlow)
На шаге 3 «Готово» (или в карточке трекера, или в модалке) вызывает `finishFlow()`:
1. Меряем высоту `trackerWrap`, пишем inline `maxHeight: Nnpx`
2. Force reflow (`void offsetHeight`)
3. Добавляем класс `.is-hidden` с `max-height: 0 !important; opacity: 0; padding: 0`
4. CSS-транзишн плавно схлопывает карточку, контент снизу подъезжает вверх

### Layout-каркас
- `html, body { overflow: hidden; height: 100% }`
- `.app` — flex-колонка во всю высоту; `.statusbar`, `.appbar`, `.tabbar` с `flex-shrink: 0`
- `.content` — `flex:1; min-height:0; overflow-y:auto`, скруглён сверху на 32px
- Home-indicator удалён; вместо него белый padding-bottom 34px на `.tabbar` и `.modal-bottom`

---

## Файловая структура

```
tracker-prototype/
├── index.html          — разметка + две модалки
├── styles.css          — все стили
├── script.js           — state-машина, рендер, валидация
├── CONTEXT.md          — этот файл
├── assets/
│   ├── mood-1..5-*.svg
│   ├── mood-modal.svg
│   ├── card-1..4.png
│   ├── avatar.png
│   ├── info.svg
│   ├── tabbar-icon1.png, tabbar-icon2.png, tabbar-icon-3.png
│   ├── шаг 2/{выгорел,мало,достаточно,много,полон сил}.png
│   └── шаг 3/{ужасно,плохо,нормально,хорошо,полон сил}.png
├── fonts/              — Euclid Circular A в .woff2
└── .claude/launch.json — конфиг dev-сервера
```

---

## CSS-токены

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

Палитра шагов (одна и та же на всех трёх):

```js
[
  { textColor: '#a976b8', chipBg: '#ead8ef' }, // 1
  { textColor: '#6c6da8', chipBg: '#d7d8eb' }, // 2
  { textColor: '#4c85b3', chipBg: '#cfe0ed' }, // 3
  { textColor: '#ca9231', chipBg: '#f5e2bd' }, // 4
  { textColor: '#dc831c', chipBg: '#ffddb6' }, // 5
]
```

---

## Готово / возможные следующие шаги

Прототип закрывает флоу трёх шагов: настроение → энергия → самочувствие, с модалками причин и добавлением своих вариантов, плавным сворачиванием карточки в конце.

Потенциальные улучшения:
- Анимация смены шагов внутри карточки (сейчас мгновенный перерендер)
- Сохранение выбранных причин в state (сейчас отмеченные чипы живут только в DOM)
- Финальный экран / action после `finishFlow`
