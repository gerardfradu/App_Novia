var map = L.map('map').setView([41.59, 1.52], 8);
var mapaSatelite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { attribution: 'Tiles &copy; Esri' });
var mapaCalles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' });
mapaSatelite.addTo(map);

var ubicaciones = [
    { nombre: "Montjuïc", lat: 41.363, lng: 2.152, texto: "Este es uno de mis sitios favoritos de todo el mundo ya que es donde te pedí que seas mi novia y empezó toda nuestra historia de amor. Me acuerdo lo nervioso que estaba cuando fuimos ahí ajajajja literalmente estaba temblando. Ese dia mi vida cambió por completo y empecé a vivir una vida perfecta con la mujer más guapa y perfecta de todo el mundo. Un 3/12/2024 empezó nuestra historia y durará para siempre ya que quiero estar para siempre contigo te amoooo.", imagen: "montjuic.png" },
    { nombre: "Martorell central", lat: 41.475, lng: 1.928, texto: "Este sitio es muy especial para mi ya que fue donde nos dimos nuestro primer beso y donde me hiciste la persona más feliz de este mundo. Estaba super nervioso pero tú me conseguiste calmar un poco y bueno salió como salió pero para mi fue perfecto. Despuès de darnos nuestro primer beso supe que 100% queria que seas mi novia, ojala poder congelar ese momento y no haber tenido que despedirme de ti. Te amooooo muchisimo.", imagen: "martorell.png" },
    { nombre: "Hotel W", lat: 41.368, lng: 2.190, texto: "Este sitio ha sido muy importante para nuestra relación ya que es el sitio donde te enamoraste de mí esa noche en la que estuvimos hablando sin parar y sin querer se nos hicieron las 2 de la mañana. Aparte de ese dia este es uno de mis sitios favoritos ya que fue donde te dije que quería que fueras mi prometida y te di el anillo, nunca había sido tan feliz como ese dia amor te amoooo.", imagen: "hotel_w.png" },
    { nombre: "Sant Feliu de Guíxols", lat: 41.780, lng: 3.030, texto: "Este sitio es 100% nuestro sitio favorito, han pasado tantas cosas ahí que no se ni por dónde empezar. Me acuerdo de lo feliz y ilusionado que estaba nuestro primer San Valentín juntos antes de irnos por primera vez a un hotel juntos y lo perfecto que fue todo. Aparte de eso este sitio es mi favorito ya que fue donde me arrodillé y te pedí de que te casaras conmigo, un recuerdo que voy a guardar para toda mi vida ya que es el día más feliz de toda mi vida Te amooo para siempre amor.", imagen: "sant_feliu.png" },
    { nombre: "Kso", lat: 41.474, lng: 1.927, texto: "Nuestro restaurante favorito sin dudas jajajjaaj!!! Me encanta ese sitio pero no solo por sus hamburguesas sino también porque voy contigo y me lo paso super bien siempre riendo y hablando de cualquier cosa. Para mi no solo son unas hamburguesas buenísimas sino que siempre que voy ahi me acuerdo de todos los momentos y recuerdos bonitos que tengo contigo te amooo muchisimo amor.", imagen: "kso.png" },
    { nombre: "Calella", lat: 41.617, lng: 2.666, texto: "Aquí fue donde hicimos nuestro primer viaje juntos y fue histórico!!! Aunque no te encontrabas muy bien (ya sabemos todos porque) me encanto pasar tantos días durmiendo juntos y poder despertarme cada día a tu lado. Hicimos cosas muy divertidas como por ejemplo ir a saltar en los hinchables en el agua o nuestros baños diarios en el jacuzzi del hotel. También me gusto mucho nuestras noches escuchando el karaoke tomando algo en el hotel con nuestros coctels ajjajaaj te amoooo", imagen: "calella.png" },
    { nombre: "Can casas", lat: 41.500, lng: 1.800, texto: "Quien me diría que pasaría más tiempo en Can Casas que en mi propia casa jajajaj. Pero en serio este es un sitio muy importante para mi donde tengo mil recuerdos super bonitos contigo. Me encanta ir a Can Casas contigo a pasar la tarde, ver series y llenar la mesa de patatas y hamburguesas del Popeyes jajajaja. Es un sitio que siempre llevaré en mi corazón, donde hemos pasado tardes y tardes, hemos celebrado aniversarios y muchísimas cosas más. Te Amoooooo", imagen: "can_casas.png" }
];

var marcadoresCreados = [];
ubicaciones.forEach(sitio => {
    var marcador = L.marker([sitio.lat, sitio.lng]).addTo(map);
    var contenido = `<div class='popup-container'>
                        <img src='imagenes/${sitio.imagen}' class='popup-imagen'>
                        <div class='popup-texto'>${sitio.texto}</div>
                     </div>`;
    marcador.bindPopup(contenido);
    marcadoresCreados.push({ nombre: sitio.nombre.toLowerCase(), marker: marcador });
});

// Leyenda interactiva
var leyenda = document.getElementById('leyenda');
document.getElementById('leyenda-cabecera').onclick = () => leyenda.classList.toggle('leyenda-plegada');
ubicaciones.forEach(sitio => {
    var li = document.createElement('li');
    li.innerText = "📍 " + sitio.nombre;
    li.onclick = () => { map.flyTo([sitio.lat, sitio.lng], 15); marcadoresCreados.find(m => m.nombre === sitio.nombre.toLowerCase()).marker.openPopup(); leyenda.classList.add('leyenda-plegada'); };
    document.getElementById('leyenda-lista').appendChild(li);
});

// Botones y Buscador
document.getElementById('btn-cambiar-mapa').onclick = function() { 
    if (map.hasLayer(mapaSatelite)) { map.removeLayer(mapaSatelite); map.addLayer(mapaCalles); this.innerHTML = "🌍 Cambiar a Satélite"; }
    else { map.removeLayer(mapaCalles); map.addLayer(mapaSatelite); this.innerHTML = "🗺️ Cambiar a Calles"; }
};
document.getElementById('btn-gps').onclick = () => map.locate({setView: true, maxZoom: 16});
map.on('locationfound', e => L.marker(e.latlng).addTo(map).bindPopup("¡Estás aquí, mi amor! ❤️").openPopup());