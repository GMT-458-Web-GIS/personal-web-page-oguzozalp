// --- OpenLayers map initialization ---
window.addEventListener('load', () => {
  const map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([35.2433, 38.9637]), // Türkiye merkezi
      zoom: 6
    })
  });
});
