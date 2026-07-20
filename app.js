var map = L.map('map').setView([41.59, 1.52], 8);
var mapaSatelite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { attribution: 'Tiles © Esri' });
var mapaCalles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' });
mapaSatelite.addTo(map);

var ubicaciones = [
    { nombre: "Montjuïc", lat: 41.36900, lng: 2.15315, texto: "Este es uno de mis sitios favoritos...", imagen: "Montjuïc.png" },
    { nombre: "Martorell central", lat: 41.47898, lng: 1.92517, texto: "Recuerdo especial", imagen: "default.png" },
    { nombre: "Hotel W", lat: 41.36852, lng: 2.19079, texto: "Recuerdo especial", imagen: "default.png" },
    { nombre: "Playa de Sant Feliu de Guíxols", lat: 41.79079, lng: 3.04951, texto: "Recuerdo especial", imagen: "default.png" },
    { nombre: "Kso", lat: 41.79639, lng: 3.04812, texto: "Recuerdo especial", imagen: "default.png" },
    { nombre: "Calella", lat: 41.61444, lng: 2.65145, texto: "Recuerdo especial", imagen: "default.png" },
    { nombre: "Can Casas", lat: 41.48699, lng: 1.90082, texto: "Recuerdo especial", imagen: "default.png" },
    { nombre: "Playa las casetas", lat: 41.25503, lng: 1.90600, texto: "Recuerdo especial", imagen: "default.png" },
    { nombre: "Espai Mireia", lat: 41.39310, lng: 2.09351, texto: "Recuerdo especial", imagen: "default.png" },
    { nombre: "Padel Martorell ", lat: 41.47540, lng: 1.92890, texto: "Recuerdo especial", imagen: "default.png" },
    { nombre: "Casa dam", lat: 41.48093, lng: 1.91300, texto: "Recuerdo especial", imagen: "default.png" },
    { nombre: "Brasa y leña", lat: 41.28262, lng: 1.98556, texto: "Recuerdo especial", imagen: "default.png" },
    { nombre: "Caldea", lat: 42.50650, lng: 1.52180, texto: "Recuerdo especial", imagen: "default.png" },
    { nombre: "Andorra", lat: 42.50647, lng: 1.52190, texto: "Recuerdo especial", imagen: "default.png" },
    { nombre: "Splau", lat: 41.35065, lng: 2.07019, texto: "Recuerdo especial", imagen: "default.png" },
    { nombre: "Blanes", lat: 41.67904, lng: 2.79836, texto: "Recuerdo especial", imagen: "default.png" },
    { nombre: "Billar", lat: 41.52945, lng: 1.74872, texto: "Recuerdo especial", imagen: "default.png" }
];

var marcadoresCreados = [];
ubicaciones.forEach(sitio => {
    var marcador = L.marker([sitio.lat, sitio.lng]).addTo(map);
    var contenido = `<div class='popup-container'><img src='imagenes/${sitio.imagen}' class='popup-imagen'><div class='popup-texto'>${sitio.texto}</div></div>`;
    marcador.bindPopup(contenido);
    marcadoresCreados.push({ nombre: sitio.nombre.toLowerCase(), marker: marcador });
});

// Leyenda
var leyenda = document.getElementById('leyenda');
document.getElementById('leyenda-cabecera').onclick = () => leyenda.classList.toggle('leyenda-plegada');
ubicaciones.forEach(sitio => {
    var li = document.createElement('li');
    li.innerText = "📍 " + sitio.nombre;
    li.onclick = () => { map.flyTo([sitio.lat, sitio.lng], 15); marcadoresCreados.find(m => m.nombre === sitio.nombre.toLowerCase()).marker.openPopup(); leyenda.classList.add('leyenda-plegada'); };
    document.getElementById('leyenda-lista').appendChild(li);
});

// Buscador
document.getElementById('buscador-input').addEventListener('input', function(e) {
    var filtro = e.target.value.toLowerCase();
    var resultados = document.getElementById('buscador-resultados');
    resultados.innerHTML = '';
    if (filtro.length > 0) {
        ubicaciones.filter(s => s.nombre.toLowerCase().includes(filtro)).forEach(sitio => {
            var li = document.createElement('li');
            li.textContent = "🔍 " + sitio.nombre;
            li.onclick = () => { map.flyTo([sitio.lat, sitio.lng], 15); marcadoresCreados.find(m => m.nombre === sitio.nombre.toLowerCase()).marker.openPopup(); resultados.innerHTML = ''; document.getElementById('buscador-input').value = ''; };
            resultados.appendChild(li);
        });
    }
});

// Botones
document.getElementById('btn-cambiar-mapa').onclick = function() { 
    if (map.hasLayer(mapaSatelite)) { map.removeLayer(mapaSatelite); map.addLayer(mapaCalles); this.innerHTML = "🌍 Cambiar a Satélite"; }
    else { map.removeLayer(mapaCalles); map.addLayer(mapaSatelite); this.innerHTML = "🗺️ Cambiar a Calles"; }
};
document.getElementById('btn-gps').onclick = () => map.locate({setView: true, maxZoom: 16});
map.on('locationfound', e => L.marker(e.latlng).addTo(map).bindPopup("¡Estás aquí, mujer más guapa del mundo ❤️").openPopup());