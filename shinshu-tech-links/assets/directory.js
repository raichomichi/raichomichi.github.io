const filter = document.getElementById("filter");
const regions = [...document.querySelectorAll(".region")];
const regionLinks = [...document.querySelectorAll(".region-nav a")];

function filterDirectory() {
  const topic = filter.elements.topic.value;
  let count = 0;

  for (const region of regions) {
    let matches = 0;
    for (const entry of region.querySelectorAll(".entry")) {
      entry.hidden = Boolean(topic) && !entry.dataset.topics.split(" ").includes(topic);
      if (!entry.hidden) matches++;
    }
    region.hidden = matches === 0;
    count += matches;
  }
  for (const link of regionLinks) {
    link.hidden = document.querySelector(link.hash).hidden;
  }
  document.getElementById("count").textContent = count ? count + "件を表示" : "条件に合う掲載先はありません";
}

filter.hidden = false;
filter.addEventListener("change", filterDirectory);
window.addEventListener("pageshow", filterDirectory);
filterDirectory();
