(() => {
  const container = document.getElementById("road-map");
  const route = JSON.parse(document.getElementById("road-points").textContent);
  container.hidden = false;
  const map = L.map(container, {
    minZoom: 7,
    maxZoom: 14,
    scrollWheelZoom: false,
    zoomControl: false,
  });
  L.control.zoom({zoomInTitle: "拡大", zoomOutTitle: "縮小"}).addTo(map);
  L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png", {
    attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html">地理院タイル</a>',
  }).addTo(map);
  L.control.scale({imperial: false}).addTo(map);

  const coordinates = route.map(stop => stop.point);
  const line = L.polyline(coordinates, {
    color: "#9a4730", weight: 4, dashArray: "6 5", interactive: false,
  }).addTo(map);

  function showEntireRoad() {
    map.closePopup();
    map.fitBounds(line.getBounds(), {padding: [40, 28], animate: false});
  }
  showEntireRoad();
  const reset = document.getElementById("road-reset");
  reset.hidden = false;
  reset.addEventListener("click", showEntireRoad);

  route.forEach((stop, i) => {
    const endpoint = i === 0 || i === route.length - 1;
    L.circleMarker(stop.point, {
      radius: endpoint ? 5 : 2.5,
      color: "#703722", fillColor: "#fff8eb", fillOpacity: 1, weight: 2,
    }).addTo(map).bindTooltip(stop.name, {
      permanent: endpoint, direction: "right",
    });
  });

  for (const place of document.querySelectorAll(".road-place")) {
    const label = place.querySelector("h3 span").textContent;
    const symbol = place.querySelector(".road-symbol");
    const position = [Number(place.dataset.lat), Number(place.dataset.lng)];
    const marker = L.marker(position, {
      title: label, alt: label,
      icon: L.divIcon({className: "road-marker", html: symbol.cloneNode(true),
        iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -12]}),
    }).addTo(map);
    marker.bindPopup(() => {
      const popup = document.createElement("div");
      const title = document.createElement("strong");
      title.textContent = label;
      popup.append(title, place.querySelector(".road-address").cloneNode(true),
        place.querySelector(".road-description").cloneNode(true));
      return popup;
    });

    const show = place.querySelector("button");
    show.hidden = false;
    show.addEventListener("click", () => {
      map.setView(position, 13, {animate: false});
      marker.openPopup();
      container.scrollIntoView({block: "center"});
      marker.getElement().focus({preventScroll: true});
    });
  }
})();
