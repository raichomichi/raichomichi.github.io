const meetings = document.querySelectorAll('.meeting-note[data-end]');
let nextUpdate;

function updateMeetingDates() {
  clearTimeout(nextUpdate);
  const now = Date.now();
  let nextChange = Infinity;
  for (const meeting of meetings) {
    const start = Date.parse(meeting.dataset.start);
    const end = Date.parse(meeting.dataset.end);
    const heading = meeting.querySelector('strong');
    if (now < start) {
      heading.textContent = '開催予定';
      nextChange = Math.min(nextChange, start);
    } else if (now < end) {
      heading.textContent = '開催時間内';
      nextChange = Math.min(nextChange, end);
    } else {
      heading.textContent = '過去の開催案内';
    }
  }
  if (Number.isFinite(nextChange)) {
    nextUpdate = setTimeout(updateMeetingDates, Math.min(nextChange - now, 2147483647));
  }
}

window.addEventListener('pageshow', updateMeetingDates);
document.addEventListener('visibilitychange', updateMeetingDates);
updateMeetingDates();
