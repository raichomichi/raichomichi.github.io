const filter = document.querySelector('.workspace-filter');
const equipment = filter.querySelector('select');
const count = filter.querySelector('output');
const rows = document.querySelectorAll('.workspace-table tbody tr');

function updatePlaces() {
  let visible = 0;
  for (const row of rows) {
    row.hidden = equipment.value !== '' && !row.dataset.equipment.split(' ').includes(equipment.value);
    if (!row.hidden) visible++;
  }
  count.textContent = visible + '施設を表示';
}

filter.hidden = false;
equipment.addEventListener('change', updatePlaces);
window.addEventListener('pageshow', updatePlaces);
updatePlaces();
