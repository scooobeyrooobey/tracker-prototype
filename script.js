const MOODS = [
  { id: 'terrible', label: 'Ужасно',      textColor: '#a976b8', chipBg: '#ead8ef', icon: 'assets/mood-1-terrible.svg' },
  { id: 'bad',      label: 'Плохо',       textColor: '#6c6da8', chipBg: '#d7d8eb', icon: 'assets/mood-2-bad.svg' },
  { id: 'normal',   label: 'Нормально',   textColor: '#4c85b3', chipBg: '#cfe0ed', icon: 'assets/mood-3-normal.svg' },
  { id: 'good',     label: 'Хорошо',      textColor: '#ca9231', chipBg: '#f5e2bd', icon: 'assets/mood-4-good.svg' },
  { id: 'great',    label: 'Великолепно', textColor: '#dc831c', chipBg: '#ffddb6', icon: 'assets/mood-5-great.svg' },
];

const REASONS = [
  ['Друзья', 'Семья', 'Хобби'],
  ['Поездка', 'Отдых', 'Природа', 'Смех'],
  ['Выходной', 'Досуг', 'Покупки'],
  ['Музыка', 'Отдых', 'Природа', 'Музыка'],
  ['Выходной', 'Досуг', 'Покупки'],
  ['Музыка', 'Отдых', 'Природа', ''],
];

const app = document.querySelector('.app');
const moodRow = document.getElementById('moodRow');
const selectedIcon12 = document.getElementById('selectedIcon12');
const modalIcon = document.getElementById('modalIcon');
const reasonsGrid = document.getElementById('reasonsGrid');

let selectedMood = null;

function setScreen(screen) {
  app.dataset.screen = screen;
}

function renderMoodRow() {
  moodRow.innerHTML = '';
  MOODS.forEach((m) => {
    const btn = document.createElement('button');
    btn.className = 'mood-btn';
    btn.type = 'button';
    btn.innerHTML = `
      <img src="${m.icon}" alt="" />
      <span class="label" style="color: ${m.textColor}">${m.label}</span>
    `;
    btn.addEventListener('click', () => selectMood(m));
    moodRow.appendChild(btn);
  });
}

function selectMood(mood) {
  selectedMood = mood;
  selectedIcon12.innerHTML = `<img src="${mood.icon}" alt="" />`;
  modalIcon.innerHTML = `<img src="${mood.icon}" alt="" />`;
  renderReasons();
  setScreen('1.2');
}

function renderReasons() {
  if (!selectedMood) return;
  reasonsGrid.innerHTML = '';
  REASONS.forEach((row) => {
    const rowEl = document.createElement('div');
    rowEl.className = 'modal-grid-row';
    row.forEach((label) => {
      const chip = document.createElement('div');
      chip.className = 'chip';
      chip.style.background = selectedMood.chipBg;
      if (label) chip.textContent = label;
      rowEl.appendChild(chip);
    });
    reasonsGrid.appendChild(rowEl);
  });
}

document.getElementById('btnChoose').addEventListener('click', () => setScreen('1.3'));
document.getElementById('btnSkip').addEventListener('click', () => {
  // TODO: связать со следующим шагом (шаг 2 энергии)
});
document.getElementById('back12').addEventListener('click', () => setScreen('1.1'));
document.getElementById('modalClose').addEventListener('click', () => setScreen('1.2'));

renderMoodRow();
