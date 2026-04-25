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

// Mirror of the entrance animation: elements continue leftward and blur out.
let isTransitioning = false;

function getTrackerAnimatedEls() {
  return [
    tracker.querySelector('.tracker-back'),
    tracker.querySelector('.tracker-title'),
    tracker.querySelector('.tracker-counter'),
    ...tracker.querySelectorAll('.mood-btn'),
    tracker.querySelector('.tracker-selected-icon'),
    tracker.querySelector('.tracker-q'),
    tracker.querySelector('.tracker-sub'),
    ...tracker.querySelectorAll('.tracker-actions .btn'),
  ].filter(Boolean);
}

function animateOutTracker(onComplete) {
  const els = getTrackerAnimatedEls();
  if (els.length === 0) { onComplete(); return; }
  // Kill any in-flight entrance tweens so exit starts cleanly.
  gsap.killTweensOf(els);
  gsap.to(els, {
    opacity: 0,
    x: -40,
    filter: 'blur(10px)',
    duration: 0.35,
    ease: 'power3.in',
    stagger: 0.04,
    onComplete,
  });
}

function transitionRender(updateState) {
  if (isTransitioning) return;
  isTransitioning = true;
  animateOutTracker(() => {
    updateState();
    renderTracker();
    isTransitioning = false;
  });
}

function renderTracker(opts = {}) {
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
      btn.addEventListener('click', (e) => selectOption(opt, e.currentTarget));
      row.appendChild(btn);
    });
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

  let entranceEls = getTrackerAnimatedEls();
  if (opts.excludeSelectedIcon) {
    entranceEls = entranceEls.filter((el) => !el.classList.contains('tracker-selected-icon'));
  }
  if (entranceEls.length) {
    gsap.fromTo(
      entranceEls,
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

function selectOption(opt, btnEl) {
  if (isTransitioning) return;
  isTransitioning = true;

  const srcIcon = btnEl.querySelector('.mood-ico');

  // Exit other select-phase elements in parallel with the press feedback.
  const otherEls = getTrackerAnimatedEls().filter((el) => el !== btnEl);
  gsap.killTweensOf(otherEls);
  gsap.to(otherEls, {
    opacity: 0,
    x: -40,
    filter: 'blur(10px)',
    duration: 0.35,
    ease: 'power3.in',
    stagger: 0.04,
  });

  // Press-down feedback on the tapped icon, then immediately fly to confirm header.
  gsap.killTweensOf(srcIcon);
  const pressTl = gsap.timeline();
  pressTl.to(srcIcon, { scale: 0.8, duration: 0.12, ease: 'power2.out' })
         .to(srcIcon, { scale: 1, duration: 0.18, ease: 'back.out(2)' });
  pressTl.eventCallback('onComplete', () => {
      const finalSrc = srcIcon.getBoundingClientRect();

      selections[stepIdx] = opt;
      phase = 'confirm';
      renderTracker({ excludeSelectedIcon: true });

      const dstIcon = tracker.querySelector('.tracker-selected-icon');
      const dstRect = dstIcon.getBoundingClientRect();

      // FLIP delta: from target to source center, plus scale (48 → 32).
      const dx = (finalSrc.left + finalSrc.width / 2) - (dstRect.left + dstRect.width / 2);
      const dy = (finalSrc.top + finalSrc.height / 2) - (dstRect.top + dstRect.height / 2);
      const startScale = finalSrc.width / dstRect.width;

      gsap.set(dstIcon, {
        opacity: 1,
        filter: 'none',
        x: dx,
        y: dy,
        scale: startScale,
        transformOrigin: '50% 50%',
      });

      // Smooth quadratic-bezier arc with fast start and a single soft bounce at landing.
      const ARC_PEAK_LIFT = 55;
      const ctrlX = dx / 2;
      const ctrlY = dy - 2 * ARC_PEAK_LIFT;
      const ARC_DURATION = 0.55;

      const driver = { t: 0 };
      gsap.to(driver, {
        t: 1,
        duration: ARC_DURATION,
        ease: 'back.out(1.4)',
        onUpdate: () => {
          const t = driver.t;
          const u = 1 - t;
          const x = u * u * dx + 2 * u * t * ctrlX;
          const y = u * u * dy + 2 * u * t * ctrlY;
          gsap.set(dstIcon, { x, y });
        },
        onComplete: () => {
          isTransitioning = false;
        },
      });
      gsap.to(dstIcon, {
        scale: 1,
        duration: ARC_DURATION,
        ease: 'back.out(1.6)',
      });
  });
}

function handleAction(action) {
  switch (action) {
    case 'prevStep':
      if (stepIdx > 0) {
        transitionRender(() => { stepIdx--; phase = 'confirm'; });
      }
      break;
    case 'backConfirm':
      transitionRender(() => { phase = 'select'; });
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
    transitionRender(() => { stepIdx++; phase = 'select'; });
  } else {
    finishFlow();
  }
}

function finishFlow() {
  if (isTransitioning) return;
  isTransitioning = true;
  // Mirror-exit the last-step elements first, then play the success FX.
  animateOutTracker(() => {
    isTransitioning = false;
    runSuccessFX();
  });
}

function runSuccessFX() {
  const h = trackerWrap.getBoundingClientRect().height;
  trackerWrap.style.maxHeight = h + 'px';
  void trackerWrap.offsetHeight;

  // Success composition: bg line + illustration + done icon
  const BG_LINE_D = 'M30.0051 65.0765L195.639 160.385C201.258 163.619 208.188 159.176 207.595 152.72L197.141 38.8394C196.444 31.2494 205.75 27.0771 210.953 32.6466L319.774 149.126C324.142 153.8 331.957 151.712 333.411 145.482L353.047 61.3373C354.431 55.4086 361.666 53.1365 366.191 57.21L466.005 147.076';
  tracker.innerHTML = `
    <div class="fx-wrap">
      <svg class="fx-bgline" viewBox="0 0 496 192" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <path d="${BG_LINE_D}" stroke="#344079" stroke-opacity="0.06" stroke-width="60" stroke-linecap="round" fill="none"/>
      </svg>
      <img class="fx-illu" src="assets/успех/illustartion_calm.png" alt="" />
      <div class="fx-done">
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle class="fx-circle" cx="24" cy="24" r="19" fill="none" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round"/>
          <path class="fx-check" d="M15 23.3529L22.4074 31L35 18" fill="none" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  `;

  const bglineEl = tracker.querySelector('.fx-bgline path');
  const circleEl = tracker.querySelector('.fx-circle');
  const checkEl  = tracker.querySelector('.fx-check');
  const doneEl   = tracker.querySelector('.fx-done');
  const illuEl   = tracker.querySelector('.fx-illu');

  const bgLen = bglineEl.getTotalLength();
  const circumference = 2 * Math.PI * 19;
  const checkLen = checkEl.getTotalLength();

  gsap.set(bglineEl, { strokeDasharray: bgLen, strokeDashoffset: bgLen });
  gsap.set(circleEl, { strokeDasharray: circumference, strokeDashoffset: circumference, opacity: 0 });
  gsap.set(checkEl,  { strokeDasharray: checkLen, strokeDashoffset: checkLen, opacity: 0 });
  gsap.set(doneEl, { y: -28, scale: 0.6, opacity: 0 });
  gsap.set(illuEl, { y: 60, opacity: 0 });

  // Realistic-look confetti via canvas-confetti (kirilv.com preset),
  // colors equally distributed across 4 brand tones from the mockup.
  const trackerRect = trackerWrap.getBoundingClientRect();
  const origin = {
    x: (trackerRect.left + trackerRect.width / 2) / window.innerWidth,
    y: (trackerRect.top + trackerRect.height / 2) / window.innerHeight,
  };
  const COLORS = ['#4E97F7', '#FF7A38', '#FFC400', '#FF5252'];
  const count = 200;
  // Fire each preset once per color so all 4 colors get equal share
  const fire = (particleRatio, opts) => {
    const perColor = Math.max(1, Math.floor((count * particleRatio) / COLORS.length));
    COLORS.forEach((c) => {
      confetti({
        origin,
        ...opts,
        colors: [c],
        particleCount: perColor,
      });
    });
  };
  // Soften the opening burst: lower initial velocity and stagger waves slightly.
  fire(0.25, { spread: 40, startVelocity: 38 });
  setTimeout(() => fire(0.2,  { spread: 60, startVelocity: 42 }), 80);
  setTimeout(() => fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 }), 160);
  setTimeout(() => fire(0.1,  { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 }), 240);
  setTimeout(() => fire(0.1,  { spread: 120, startVelocity: 45 }), 320);

  const tl = gsap.timeline({
    onComplete: () => {
      // Hold the success state briefly so the user can see the result,
      // then fade tracker with strong blur + scale for a clearly visible exit.
      gsap.to(tracker, {
        opacity: 0,
        scale: 0,
        filter: 'blur(100px)',
        transformOrigin: '50% 50%',
        duration: 1.4,
        delay: 0.35,
        ease: 'power2.inOut',
      });
      // Wrap collapse starts late so most of the scale/blur/opacity is visible
      // before the wrap height transition kicks in.
      gsap.delayedCall(0.35 + 0.95, () => trackerWrap.classList.add('is-hidden'));
    },
  });

  // All in-container animations 35% slower than the previous pass
  tl.to(bglineEl, { strokeDashoffset: 0, duration: 1.61, ease: 'power2.out' }, 0)
    .to(doneEl, { y: 0, scale: 1, opacity: 1, duration: 1.04, ease: 'back.out(2.2)' }, 0)
    .set(circleEl, { opacity: 1 }, 0.34)
    .to(circleEl, { strokeDashoffset: 0, duration: 0.945, ease: 'power2.inOut' }, 0.34)
    .set(checkEl, { opacity: 1 }, 0.61)
    .to(checkEl, { strokeDashoffset: 0, duration: 0.66, ease: 'power2.out' }, 0.61)
    // Illustration: slides up from below with a very smooth ease.
    .fromTo(illuEl,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out' },
      0.41
    );

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
    // Pad with hidden placeholder so a single custom chip aligns to the left slot.
    if (custom.length % 2 === 1) {
      row.appendChild(makeChip('', false));
    }
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
  // Reveal new custom chip: fade + de-blur with a single soft bounce.
  const newChip = document.querySelector('.modal-grid-row-custom .chip:not(:empty)');
  if (newChip) {
    gsap.fromTo(newChip,
      { opacity: 0, scale: 0.4, filter: 'blur(100px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.7, ease: 'back.out(2)', delay: 0.1 }
    );
  }
});

document.getElementById('modalClose').addEventListener('click', closeReasonsModal);
document.getElementById('modalContinue').addEventListener('click', () => {
  closeReasonsModal();
  goNextStep();
});

renderTracker();
