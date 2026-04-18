// ===== Icon builders =====

function svgIcon(chipBg, innerSvg) {
  return `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><circle cx="24" cy="24" r="24" fill="${chipBg}"/>${innerSvg}</svg>`;
}

const ICON = {
  file: (src) => `<img src="${src}" alt="" />`,
  moon: (c, b) => svgIcon(b, `<path d="M30 15.5a8.5 8.5 0 1 0 0 17 6 6 0 0 1 0-17z" fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round"/>`),
  circle: (c, b) => svgIcon(b, `<circle cx="24" cy="24" r="7.5" fill="none" stroke="${c}" stroke-width="1.6"/>`),
  sunSmall: (c, b) => svgIcon(b, `<circle cx="24" cy="24" r="6" fill="none" stroke="${c}" stroke-width="1.6"/>`),
  sunMid: (c, b) => svgIcon(b, `<g stroke="${c}" stroke-width="1.6" stroke-linecap="round" fill="none"><circle cx="24" cy="24" r="5.5"/><path d="M24 13v2M24 33v2M13 24h2M33 24h2M16 16l1.4 1.4M30.6 30.6L32 32M16 32l1.4-1.4M30.6 17.4L32 16"/></g>`),
  sunBig: (c, b) => svgIcon(b, `<g stroke="${c}" stroke-width="1.6" stroke-linecap="round" fill="none"><circle cx="24" cy="24" r="5" fill="${c}"/><path d="M24 10.5v3.5M24 34v3.5M10.5 24H14M34 24h3.5M14 14l2.5 2.5M31.5 31.5L34 34M14 34l2.5-2.5M31.5 16.5L34 14"/></g>`),
  sprout: (c, b) => svgIcon(b, `<path d="M24 33v-9" stroke="${c}" stroke-width="1.6" stroke-linecap="round"/><path d="M24 24c-4.5 0-8-3-8-7 4 0 8 2.5 8 7z" fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round"/>`),
  bud: (c, b) => svgIcon(b, `<path d="M24 34v-5M20.5 29h7" stroke="${c}" stroke-width="1.6" stroke-linecap="round"/><path d="M19 22c0-4 2.5-7 5-7s5 3 5 7c0 3.5-2 6-5 6s-5-2.5-5-6z" fill="none" stroke="${c}" stroke-width="1.6"/>`),
  lotus: (c, b) => svgIcon(b, `<path d="M24 33c-6 0-10-3-10-6 3-1 7 1 10 6zm0 0c6 0 10-3 10-6-3-1-7 1-10 6zm0 0c0-4 2-8 0-13-2 5 0 9 0 13z" fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round"/>`),
  tree: (c, b) => svgIcon(b, `<path d="M24 35v-5" stroke="${c}" stroke-width="1.6" stroke-linecap="round"/><path d="M24 30c-5 0-9-4-9-8 0-3 2-5 4-5 1-3 3-4 5-4s4 1 5 4c2 0 4 2 4 5 0 4-4 8-9 8z" fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round"/>`),
  treeBig: (c, b) => svgIcon(b, `<path d="M24 36v-7" stroke="${c}" stroke-width="1.6" stroke-linecap="round"/><path d="M24 29c-6 0-11-4-11-9 0-3 2-5 4-5 1-4 4-6 7-6s6 2 7 6c2 0 4 2 4 5 0 5-5 9-11 9z" fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round"/>`),
};

// ===== Data =====

const PALETTE = [
  { textColor: '#a976b8', chipBg: '#ead8ef' },
  { textColor: '#6c6da8', chipBg: '#d7d8eb' },
  { textColor: '#4c85b3', chipBg: '#cfe0ed' },
  { textColor: '#ca9231', chipBg: '#f5e2bd' },
  { textColor: '#dc831c', chipBg: '#ffddb6' },
];

function makeOptions(defs) {
  return defs.map((d, i) => {
    const p = PALETTE[i];
    let iconHtml;
    if (d.iconFn) iconHtml = d.iconFn(p.textColor, p.chipBg);
    else if (d.iconWrap) iconHtml = `<span class="icon-circle" style="background:${p.chipBg}"><img src="${d.iconSrc}" alt=""/></span>`;
    else iconHtml = `<img src="${d.iconSrc}" alt=""/>`;
    return { id: d.id, label: d.label, textColor: p.textColor, chipBg: p.chipBg, iconHtml };
  });
}

const MOODS = makeOptions([
  { id: 'm1', label: 'Ужасно',      iconSrc: 'assets/mood-1-terrible.svg' },
  { id: 'm2', label: 'Плохо',       iconSrc: 'assets/mood-2-bad.svg' },
  { id: 'm3', label: 'Нормально',   iconSrc: 'assets/mood-3-normal.svg' },
  { id: 'm4', label: 'Хорошо',      iconSrc: 'assets/mood-4-good.svg' },
  { id: 'm5', label: 'Великолепно', iconSrc: 'assets/mood-5-great.svg' },
]);

const ENERGY = makeOptions([
  { id: 'e1', label: 'Выгорел',    iconSrc: 'assets/шаг 2/выгорел.png',    iconWrap: true },
  { id: 'e2', label: 'Мало',       iconSrc: 'assets/шаг 2/мало.png',       iconWrap: true },
  { id: 'e3', label: 'Достаточно', iconSrc: 'assets/шаг 2/достаточно.png', iconWrap: true },
  { id: 'e4', label: 'Много',      iconSrc: 'assets/шаг 2/много.png',      iconWrap: true },
  { id: 'e5', label: 'Полон сил',  iconSrc: 'assets/шаг 2/полон сил.png',  iconWrap: true },
]);

const PHYSICAL = makeOptions([
  { id: 'p1', label: 'Ужасно',    iconSrc: 'assets/шаг 3/ужасно.png',    iconWrap: true },
  { id: 'p2', label: 'Плохо',     iconSrc: 'assets/шаг 3/плохо.png',     iconWrap: true },
  { id: 'p3', label: 'Нормально', iconSrc: 'assets/шаг 3/нормально.png', iconWrap: true },
  { id: 'p4', label: 'Хорошо',    iconSrc: 'assets/шаг 3/хорошо.png',    iconWrap: true },
  { id: 'p5', label: 'Полон сил', iconSrc: 'assets/шаг 3/полон сил.png', iconWrap: true },
]);

const REASONS_MOOD = [
  ['Друзья', 'Семья', 'Хобби'],
  ['Поездка', 'Отдых', 'Природа', 'Смех'],
  ['Выходной', 'Досуг', 'Покупки'],
  ['Музыка', 'Отдых', 'Природа', 'Музыка'],
  ['Выходной', 'Досуг', 'Покупки'],
  ['Музыка', 'Отдых', 'Природа', ''],
];

const REASONS_ENERGY = [
  ['Работа', 'Сон', 'Спорт'],
  ['Питание', 'Отдых', 'Дела', 'Стресс'],
  ['Учёба', 'Природа', 'Музыка'],
  ['Прогулка', 'Общение', 'Кофе', 'Хобби'],
  ['Вода', 'Йога', 'Книга'],
  ['Медитация', 'Душ', 'Смех', ''],
];

const REASONS_PHYSICAL = [
  ['Сон', 'Еда', 'Вода'],
  ['Спорт', 'Прогулка', 'Массаж', 'Сауна'],
  ['Усталость', 'Стресс', 'Погода'],
  ['Бодрость', 'Тепло', 'Тяжесть', 'Боль'],
  ['Кофе', 'Витамины', 'Душ'],
  ['Йога', 'Движение', 'Отдых', ''],
];

const STEPS = [
  {
    options: MOODS,
    reasons: REASONS_MOOD,
    titleSelect: 'Как ваше<br/><span class="accent-italic">настроение</span> сегодня?',
    titleConfirm: 'Что повлияло на <span class="accent-italic">настроение</span>?',
    modalTitle: 'Что повлияло<br/>на ваше <span class="accent-italic">настроение</span>?',
  },
  {
    options: ENERGY,
    reasons: REASONS_ENERGY,
    titleSelect: 'Сколько у вас<br/><span class="accent-italic">энергии</span> на разные дела?',
    titleConfirm: 'Что повлияло на <span class="accent-italic">энергию</span>?',
    modalTitle: 'Что повлияло<br/>на вашу <span class="accent-italic">энергию</span>?',
  },
  {
    options: PHYSICAL,
    reasons: REASONS_PHYSICAL,
    titleSelect: 'Как ваше <span class="accent-italic">физическое</span><br/>самочувствие сегодня?',
    titleConfirm: 'Что повлияло на <span class="accent-italic">самочувствие</span>?',
    modalTitle: 'Что повлияло<br/>на ваше <span class="accent-italic">самочувствие</span>?',
  },
];

const MAX_OWN_LEN = 15;

// ===== State =====

let stepIdx = 0;
let phase = 'select'; // 'select' | 'confirm'
const selections = [null, null, null];
const customReasonsByStep = [[], [], []];

// ===== Elements =====

const trackerWrap = document.getElementById('trackerWrap');
const tracker = document.getElementById('tracker');
const modal = document.getElementById('modal');
const modalIcon = document.getElementById('modalIcon');
const modalTitleEl = document.getElementById('modalTitle');
const reasonsGrid = document.getElementById('reasonsGrid');
const modalAdd = document.getElementById('modalAdd');
const modalAddIcon = document.getElementById('modalAddIcon');
const ownInput = document.getElementById('ownInput');
const ownHelper = document.getElementById('ownHelper');
const ownField = ownInput.parentElement;
const btnAddSubmit = document.getElementById('btnAddSubmit');

// ===== Tracker render =====

const ICO_BACK = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 6l-6 6 6 6" stroke="#22263b" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`;
const ICO_NEXT = `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 4l6 6-6 6" stroke="#344079" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`;
const ICO_CHECK = `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10l4 4 8-8" stroke="#344079" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`;

function renderTracker() {
  const step = STEPS[stepIdx];

  if (phase === 'select') {
    const backBtn = stepIdx > 0
      ? `<button class="tracker-back" data-action="prevStep" aria-label="Назад">${ICO_BACK}</button>`
      : '';
    tracker.innerHTML = `
      ${backBtn}
      <div class="tracker-title">${step.titleSelect}</div>
      <span class="tracker-counter">${stepIdx + 1}/3</span>
      <div class="mood-row"></div>
    `;
    const row = tracker.querySelector('.mood-row');
    step.options.forEach((opt) => {
      const btn = document.createElement('button');
      btn.className = 'mood-btn';
      btn.type = 'button';
      btn.innerHTML = `<span class="mood-ico">${opt.iconHtml}</span><span class="label" style="color: ${opt.textColor}">${opt.label}</span>`;
      btn.addEventListener('click', () => selectOption(opt));
      row.appendChild(btn);
    });
    // Right-to-left entrance with blur for title
    const titleEl = tracker.querySelector('.tracker-title');
    if (titleEl) {
      gsap.fromTo(
        titleEl,
        { opacity: 0, x: 40, filter: 'blur(10px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.6, ease: 'power3.out', clearProps: 'filter' }
      );
    }
    // Right-to-left entrance with blur for mood buttons
    const moodBtns = row.querySelectorAll('.mood-btn');
    gsap.fromTo(
      moodBtns,
      { opacity: 0, x: 40, filter: 'blur(10px)' },
      {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.07,
        clearProps: 'filter',
      }
    );
  } else {
    const sel = selections[stepIdx];
    const isLast = stepIdx === STEPS.length - 1;
    const rightBtn = isLast
      ? `<button class="btn btn-outline btn-done" data-action="done">${ICO_CHECK}<span>Готово</span></button>`
      : `<button class="btn btn-outline btn-square" data-action="skipNext" aria-label="Далее">${ICO_NEXT}</button>`;
    const primaryCls = isLast ? 'btn-w-half' : 'btn-wide';
    tracker.innerHTML = `
      <button class="tracker-back" data-action="backConfirm" aria-label="Назад">${ICO_BACK}</button>
      <div class="tracker-selected-icon">${sel.iconHtml}</div>
      <div class="tracker-q">${step.titleConfirm}</div>
      <div class="tracker-sub">Это поможет в работе с рефлексией</div>
      <div class="tracker-actions">
        <button class="btn btn-primary ${primaryCls}" data-action="choose">Выбрать</button>
        ${rightBtn}
      </div>
    `;
  }

  if (phase === 'confirm') {
    const confirmEls = [
      tracker.querySelector('.tracker-selected-icon'),
      tracker.querySelector('.tracker-q'),
      tracker.querySelector('.tracker-sub'),
      ...tracker.querySelectorAll('.tracker-actions .btn'),
    ].filter(Boolean);
    gsap.fromTo(
      confirmEls,
      { opacity: 0, x: 40, filter: 'blur(10px)' },
      {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.07,
        clearProps: 'filter',
      }
    );
  }

  tracker.querySelectorAll('[data-action]').forEach((el) => {
    el.addEventListener('click', () => handleAction(el.dataset.action));
  });
}

function selectOption(opt) {
  selections[stepIdx] = opt;
  phase = 'confirm';
  renderTracker();
}

function handleAction(action) {
  switch (action) {
    case 'prevStep':
      if (stepIdx > 0) { stepIdx--; phase = 'confirm'; renderTracker(); }
      break;
    case 'backConfirm':
      phase = 'select';
      renderTracker();
      break;
    case 'choose':
      openReasonsModal();
      break;
    case 'skipNext':
      goNextStep();
      break;
    case 'done':
      finishFlow();
      break;
  }
}

function goNextStep() {
  if (stepIdx < STEPS.length - 1) {
    stepIdx++;
    phase = 'select';
    renderTracker();
  } else {
    finishFlow();
  }
}

function finishFlow() {
  const h = trackerWrap.getBoundingClientRect().height;
  trackerWrap.style.maxHeight = h + 'px';
  void trackerWrap.offsetHeight;

  // Center checkmark inside the tracker
  tracker.innerHTML = `
    <div class="fx-wrap" style="position:relative;width:100%;height:${h}px;display:flex;align-items:center;justify-content:center;overflow:visible;">
      <svg viewBox="0 0 120 120" style="width:80px;height:80px;display:block;">
        <circle class="fx-disc" cx="60" cy="60" r="0" fill="#FFB800"/>
        <path class="fx-check" d="M42 60 l13 13 l26 -26" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  `;

  const disc = tracker.querySelector('.fx-disc');
  const check = tracker.querySelector('.fx-check');
  const checkLen = check.getTotalLength();
  gsap.set(check, { strokeDasharray: checkLen, strokeDashoffset: checkLen });

  // Confetti — fullscreen overlay so pieces can fly beyond the card
  const trackerRect = trackerWrap.getBoundingClientRect();
  const originX = trackerRect.left + trackerRect.width / 2;
  const originY = trackerRect.top + trackerRect.height / 2;

  const confetti = document.createElement('div');
  confetti.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden;';
  document.body.appendChild(confetti);

  const palette = ['#FFB800', '#FFD766', '#FFC947', '#FFA500', '#FFE6A3', '#E89F00'];
  const PIECES = 70;
  const pieces = [];
  for (let i = 0; i < PIECES; i++) {
    const el = document.createElement('div');
    const w = 6 + Math.random() * 8;
    const hPiece = w * (0.4 + Math.random() * 0.9);
    const isCircle = Math.random() < 0.15;
    el.style.cssText = `position:absolute;left:${originX}px;top:${originY}px;width:${w}px;height:${hPiece}px;background:${palette[i % palette.length]};border-radius:${isCircle ? '50%' : '1.5px'};margin-left:${-w / 2}px;margin-top:${-hPiece / 2}px;will-change:transform,opacity;`;
    confetti.appendChild(el);
    pieces.push(el);
  }

  pieces.forEach((el) => {
    // Burst angle — biased upward for a natural fountain
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.25;
    const velocity = 180 + Math.random() * 360;
    const dx = Math.cos(angle) * velocity;
    const dyUp = Math.sin(angle) * velocity;
    const fall = 500 + Math.random() * 500;
    const rotStart = Math.random() * 360;
    const rotEnd = rotStart + (Math.random() - 0.5) * 1400;
    const dur = 1.7 + Math.random() * 1.1;

    gsap.set(el, { rotation: rotStart, scale: 0.75 + Math.random() * 0.7 });
    gsap.to(el, {
      keyframes: [
        { x: dx * 0.55, y: dyUp * 0.55, duration: dur * 0.38, ease: 'power1.out' },
        { x: dx, y: dyUp + fall, duration: dur * 0.62, ease: 'power2.in' },
      ],
    });
    gsap.to(el, { rotation: rotEnd, duration: dur, ease: 'none' });
    gsap.to(el, { opacity: 0, duration: dur * 0.35, delay: dur * 0.65, ease: 'power1.in' });
  });

  const tl = gsap.timeline({
    onComplete: () => {
      gsap.to(tracker, { opacity: 0, filter: 'blur(8px)', duration: 0.35, ease: 'power2.in' });
      gsap.delayedCall(0.12, () => trackerWrap.classList.add('is-hidden'));
    },
  });
  tl.to(disc, { attr: { r: 44 }, duration: 0.55, ease: 'back.out(1.8)' }, 0)
    .to(check, { strokeDashoffset: 0, duration: 0.4, ease: 'power2.out' }, 0.35)
    .to({}, { duration: 1.6 });

  gsap.delayedCall(3.2, () => confetti.remove());
}

// ===== Reasons modal =====

function openReasonsModal() {
  const step = STEPS[stepIdx];
  const sel = selections[stepIdx];
  const isLast = stepIdx === STEPS.length - 1;
  modalTitleEl.innerHTML = step.modalTitle;
  modalIcon.innerHTML = sel.iconHtml;
  document.getElementById('modalContinue').textContent = isLast ? 'Готово' : 'Продолжить';
  renderReasons();
  modal.classList.add('is-open');

  // Bottom-to-top entrance with blur for all modal elements
  const els = [
    modal.querySelector('.modal-icon'),
    modal.querySelector('.modal-title'),
    modal.querySelector('.modal-close'),
    ...modal.querySelectorAll('.modal-grid .chip'),
    ...modal.querySelectorAll('.modal-bottom .btn'),
  ].filter(Boolean);
  gsap.fromTo(
    els,
    { opacity: 0, y: 40, filter: 'blur(10px)' },
    {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.45,
      ease: 'power3.out',
      stagger: 0.0225,
      delay: 0.25,
      clearProps: 'filter',
    }
  );
}

function closeReasonsModal() {
  modal.classList.remove('is-open');
}

function makeChip(label, selected) {
  const sel = selections[stepIdx];
  const chip = document.createElement('div');
  chip.className = 'chip' + (selected ? ' selected' : '');
  chip.style.background = sel.chipBg;
  if (label) {
    chip.textContent = label;
    chip.addEventListener('click', () => chip.classList.toggle('selected'));
  }
  return chip;
}

function renderReasons() {
  const step = STEPS[stepIdx];
  const custom = customReasonsByStep[stepIdx];
  reasonsGrid.innerHTML = '';

  if (custom.length) {
    const row = document.createElement('div');
    row.className = 'modal-grid-row modal-grid-row-custom';
    custom.forEach((label) => row.appendChild(makeChip(label, true)));
    reasonsGrid.appendChild(row);
  }

  step.reasons.forEach((row) => {
    const rowEl = document.createElement('div');
    rowEl.className = 'modal-grid-row';
    row.forEach((label) => rowEl.appendChild(makeChip(label, false)));
    reasonsGrid.appendChild(rowEl);
  });
}

// ===== Add own modal =====

function openAddOwn() {
  const sel = selections[stepIdx];
  modalAddIcon.innerHTML = sel.iconHtml;
  ownInput.value = '';
  updateOwnValidation();
  modalAdd.classList.add('is-open');
  ownInput.focus();

  // Bottom-to-top entrance with blur for all modal elements
  const els = [
    modalAdd.querySelector('.modal-icon'),
    modalAdd.querySelector('.modal-title'),
    modalAdd.querySelector('.modal-close'),
    modalAdd.querySelector('.text-field'),
    modalAdd.querySelector('.modal-add-footer .btn'),
  ].filter(Boolean);
  gsap.fromTo(
    els,
    { opacity: 0, y: 40, filter: 'blur(10px)' },
    {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.45,
      ease: 'power3.out',
      stagger: 0.0225,
      delay: 0.25,
      clearProps: 'filter',
    }
  );
}

function closeAddOwn() {
  modalAdd.classList.remove('is-open');
  ownInput.blur();
}

function updateOwnValidation() {
  const value = ownInput.value;
  const len = [...value].length;
  const tooLong = len > MAX_OWN_LEN;
  const empty = value.trim().length === 0;
  ownField.classList.toggle('is-error', tooLong);
  ownHelper.textContent = tooLong ? `Не больше ${MAX_OWN_LEN} символов` : '';
  btnAddSubmit.disabled = tooLong || empty;
}

// ===== Wiring =====

document.getElementById('btnAddOwn').addEventListener('click', openAddOwn);
document.getElementById('modalAddClose').addEventListener('click', closeAddOwn);
ownInput.addEventListener('input', updateOwnValidation);
document.getElementById('addOwnForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const value = ownInput.value.trim();
  if (!value || [...value].length > MAX_OWN_LEN) return;
  customReasonsByStep[stepIdx].unshift(value);
  renderReasons();
  closeAddOwn();
});

document.getElementById('modalClose').addEventListener('click', closeReasonsModal);
document.getElementById('modalContinue').addEventListener('click', () => {
  closeReasonsModal();
  goNextStep();
});

renderTracker();
