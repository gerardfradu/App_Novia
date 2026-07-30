// --- CONFIGURACIÓN DEL MAPA ---
var map = L.map('map').setView([41.59, 1.52], 8);
map.zoomControl.remove();
var mapaSatelite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');
var mapaCalles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
mapaSatelite.addTo(map);

// --- PANTALLA INICIAL ---
document.getElementById('btn-entrar').onclick = function() {
    document.getElementById('pantalla-bienvenida').classList.add('oculto');
};

// --- UBICACIONES Y MARCADORES (ACTUALIZADO DESDE EL EXCEL) ---
var ubicaciones = [
    {
        "nombre": "Montjuïc",
        "lat": 41.36900319,
        "lng": 2.15314996,
        "texto": "Este es uno de mis sitios favoritos de todo el mundo ya que es donde te pedí que seas mi novia y empezó toda nuestra historia de amor. Me acuerdo lo nervioso que estaba cuando fuimos ahí ajajajja literalmente estaba temblando. \nEse dia mi vida cambió por completo y empecé a vivir una vida perfecta con la mujer más guapa y perfecta de todo el mundo. Un 3/12/2024 empezó nuestra historia y durará para siempre ya que quiero estar para siempre contigo te amoooo.",
        "imagen": "Montjuic.png"
    },
    {
        "nombre": "Martorell central",
        "lat": 41.47897554,
        "lng": 1.9251742,
        "texto": "Este sitio es muy especial para mi ya que fue donde nos dimos nuestro primer beso y donde me hiciste la persona más feliz de este mundo. Estaba super nervioso pero tú me conseguiste calmar un poco y bueno salió como salió pero para mi fue perfecto.\nDespuès de darnos nuestro primer beso supe que 100% queria que seas mi novia, ojala poder congelar ese momento y no haber tenido que despedirme de ti.  Te amooooo muchisimo.",
        "imagen": "central.png"
    },
    {
        "nombre": "Hotel W",
        "lat": 41.36852187,
        "lng": 2.19079484,
        "texto": "Este sitio ha sido muy importante para nuestra relación ya que es el sitio donde te enamoraste de mí esa noche en la que estuvimos hablando sin parar y sin querer se nos hicieron las 2 de la mañana.\nAparte de ese dia este es uno de mis sitios favoritos ya que fue donde te dije que quería que fueras mi prometida y te di el anillo, nunca había sido tan feliz como ese dia amor te amoooo.",
        "imagen": "HotelW.png"
    },
    {
        "nombre": "Playa de Sant Feliu de Guíxols",
        "lat": 41.79078534,
        "lng": 3.04951387,
        "texto": "Recuerdo especial",
        "imagen": "Santfeliu.png"
    },
    {
        "nombre": "Kso",
        "lat": 41.79638843,
        "lng": 3.04812479,
        "texto": "Recuerdo especial",
        "imagen": "KSO.png"
    },
    {
        "nombre": "Calella",
        "lat": 41.61443922,
        "lng": 2.65144999,
        "texto": "Recuerdo especial",
        "imagen": "Callela.png"
    },
    {
        "nombre": "Can Casas",
        "lat": 41.48699236,
        "lng": 1.90081932,
        "texto": "Recuerdo especial",
        "imagen": "Cancasas.png"
    },
    {
        "nombre": "Playa las casetas",
        "lat": 41.25503174,
        "lng": 1.90600448,
        "texto": "Recuerdo especial",
        "imagen": "Playacasetas.png"
    },
    {
        "nombre": "Espai Mireia",
        "lat": 41.39309512,
        "lng": 2.09350873,
        "texto": "Recuerdo especial",
        "imagen": "default.png"
    },
    {
        "nombre": "Padel Martorell",
        "lat": 41.47539796,
        "lng": 1.92889766,
        "texto": "Quién diría que la señorita más guapa del mundo sería tan buena jugando al pádel😍😍😍😍😍",
        "imagen": "default.png"
    },
    {
        "nombre": "Casa dam",
        "lat": 41.48093367,
        "lng": 1.91300125,
        "texto": "Me encanta osea no sabes lo feliz que me hace ir contigo a jugar a pádel uno de mis hobbies favoritos y encima contigo 😍😍😍😍😍",
        "imagen": "CasaDam.png"
    },
    {
        "nombre": "Brasa y leña",
        "lat": 41.28261629,
        "lng": 1.98555604,
        "texto": "Un sitio de comilonas y conversaciones de 4 horas🙃❤️❤️❤️ y esque si me gusta mucho la comida de este restaurante pero me gusta mucho más las conversaciones y lo bien que nos lo pasamos de mientras que comemos aquí🙃😍😍😍\nAquí es uno de estos sitios que siento que pase lo pase soy feliz, con mi mujer y comida infinita 🤩😍\nEspero que pasen los años y pueda seguir disfrutando de la maravillosa y increíble mujer que eres bb😍😍😍😍\nTe amoooo😍❤️❤️❤️💍",
        "imagen": "BrasaLeña.png"
    },
    {
        "nombre": "Caldea",
        "lat": 42.50649852,
        "lng": 1.521801,
        "texto": "Ojalá poder estar todo el día jugando porque es uno de los momentos más felices de mis semanas😍😍😍😍",
        "imagen": "default.png"
    },
    {
        "nombre": "Andorra",
        "lat": 42.50646888,
        "lng": 1.52190146,
        "texto": "Te amooooo😍❤️❤️❤️💍",
        "imagen": "Andorra.png"
    },
    {
        "nombre": "Splau",
        "lat": 41.35064534,
        "lng": 2.07019077,
        "texto": "Recuerdo especial",
        "imagen": "Splau.png"
    },
    {
        "nombre": "Blanes",
        "lat": 41.67904114,
        "lng": 2.79835936,
        "texto": "Recuerdo especial",
        "imagen": "Blanes.png"
    },
    {
        "nombre": "Billar",
        "lat": 41.52945061,
        "lng": 1.74872146,
        "texto": "Recuerdo especial",
        "imagen": "default.png"
    },
    {
        "nombre": "Portaventura",
        "lat": 41.08861249,
        "lng": 1.1569207,
        "texto": "Recuerdo especial",
        "imagen": "Portaventura.png"
    },
    {
        "nombre": "Castillo Montjuic",
        "lat": 41.36318185,
        "lng": 2.16510859,
        "texto": "Recuerdo especial",
        "imagen": "default.png"
    },
    {
        "nombre": "Candlelight",
        "lat": 41.38656779,
        "lng": 2.1632626,
        "texto": "Recuerdo especial",
        "imagen": "candle.png"
    },
    {
        "nombre": "Playa vallcarca",
        "lat": 41.24090849,
        "lng": 1.86626889,
        "texto": "Recuerdo especial",
        "imagen": "Vallcarca.png"
    },
    {
        "nombre": "illusiona",
        "lat": 41.34752873,
        "lng": 2.07873675,
        "texto": "Recuerdo especial",
        "imagen": "bolos.png"
    },
    {
        "nombre": "mi casa",
        "lat": 41.54791666,
        "lng": 1.86243736,
        "texto": "Recuerdo especial",
        "imagen": "Micasa.png"
    },
    {
        "nombre": "Lloret de mar",
        "lat": 41.70012358,
        "lng": 2.84010138,
        "texto": "Recuerdo especial",
        "imagen": "Lloret.png"
    },
    {
        "nombre": "Laberinto de Horta",
        "lat": 41.44019687,
        "lng": 2.14561494,
        "texto": "Recuerdo especial",
        "imagen": "Fiestamarto.png"
    },
    {
        "nombre": "Fiesta martorell",
        "lat": 41.48275831,
        "lng": 1.91562316,
        "texto": "Recuerdo especial",
        "imagen": "default.png"
    },
    {
        "nombre": "Acuario",
        "lat": 41.37698511,
        "lng": 2.1843206,
        "texto": "Recuerdo especial",
        "imagen": "Acuario.png"
    },
    {
        "nombre": "Comarruga",
        "lat": 41.18142385,
        "lng": 1.52318996,
        "texto": "Recuerdo especial",
        "imagen": "Comarruga.png"
    },
    {
        "nombre": "Apartamento calafell",
        "lat": 41.18809208,
        "lng": 1.56754906,
        "texto": "Recuerdo especial",
        "imagen": "apartamentocalafell.png"
    },
    {
        "nombre": "Sinia",
        "lat": 41.480224,
        "lng": 1.911411,
        "texto": "Recuerdo especial",
        "imagen": "Sinia.png"
    },
    {
        "nombre": "Sitges",
        "lat": 41.23521007,
        "lng": 1.8021397,
        "texto": "Recuerdo especial",
        "imagen": "Sitges.png"
    }
];

var marcadoresCreados = [];

// Crear marcadores en el mapa
ubicaciones.forEach(sitio => {
    if (sitio.lat && sitio.lng) {
        var marcador = L.marker([sitio.lat, sitio.lng]).addTo(map);
        var textoFormateado = sitio.texto.replace(/\n/g, '<br>');
        marcador.bindPopup(`<div class='popup-container'><img src='imagenes/${sitio.imagen}' class='popup-imagen'><div class='popup-texto'>${textoFormateado}</div></div>`);
        marcadoresCreados.push({ nombre: sitio.nombre.toLowerCase(), marker: marcador, lat: sitio.lat, lng: sitio.lng });
    }
});

// --- LEYENDA ---
var leyenda = document.getElementById('leyenda');
document.getElementById('leyenda-cabecera').onclick = (e) => { leyenda.classList.toggle('leyenda-plegada'); e.stopPropagation(); };

ubicaciones.forEach(sitio => {
    var li = document.createElement('li');
    li.innerText = "📍 " + sitio.nombre;
    li.onclick = (e) => {
        var item = marcadoresCreados.find(m => m.nombre === sitio.nombre.toLowerCase());
        if (item) {
            map.flyTo([item.lat, item.lng], 15);
            item.marker.openPopup();
        }
        leyenda.classList.add('leyenda-plegada');
        e.stopPropagation();
    };
    document.getElementById('leyenda-lista').appendChild(li);
});

// --- BUSCADOR ---
document.getElementById('buscador-input').addEventListener('input', function(e) {
    var filtro = e.target.value.toLowerCase();
    var resultados = document.getElementById('buscador-resultados');
    resultados.innerHTML = '';
    if (filtro.length > 0) {
        ubicaciones.filter(s => s.nombre.toLowerCase().includes(filtro)).forEach(sitio => {
            var li = document.createElement('li');
            li.textContent = "🔍 " + sitio.nombre;
            li.onclick = (e) => { 
                var item = marcadoresCreados.find(m => m.nombre === sitio.nombre.toLowerCase());
                if (item) {
                    map.flyTo([item.lat, item.lng], 15); 
                    item.marker.openPopup(); 
                }
                resultados.innerHTML = ''; 
                document.getElementById('buscador-input').value = ''; 
                e.stopPropagation(); 
            };
            resultados.appendChild(li);
        });
    }
});

// --- BOTONES MAPA Y GPS ---
document.getElementById('btn-cambiar-mapa').onclick = function() { 
    if (map.hasLayer(mapaSatelite)) { map.removeLayer(mapaSatelite); map.addLayer(mapaCalles); this.innerHTML = "🌍 Cambiar a Satélite"; }
    else { map.removeLayer(mapaCalles); map.addLayer(mapaSatelite); this.innerHTML = "🗺️ Cambiar a Calles"; }
};
document.getElementById('btn-gps').onclick = () => map.locate({setView: true, maxZoom: 16});
map.on('locationfound', e => L.marker(e.latlng).addTo(map).bindPopup("¡Estás aquí, la persona más bonita del mundo!").openPopup());

// --- LÓGICA DEL JUEGO VERDAD O RETO 🍹 ---
var modoActual = 'chill';

// Botón de cubata para desplegar menú
document.getElementById('btn-cubata').onclick = function(e) {
    document.getElementById('menu-juego').classList.toggle('oculto');
    e.stopPropagation();
};

// Preguntas y retos por categoría
var juegoDatos = {
    chill: {
        verdades: [
            "¿Qué fue lo primero que pensaste cuando me viste?",
            "¿Cuál es tu recuerdo favorito de nosotros?",
            "¿Qué canción te recuerda siempre a mí?"
        ],
        retos: [
            "Dame un abrazo de 30 segundos sin hablar.",
            "Dime 3 cosas que te gusten de mí mirándome a los ojos.",
            "Déjame hacerte cosquillas durante 10 segundos."
        ]
    },
    beber: {
        verdades: [
            "¿Alguna vez has disimulado que no estabas borracho/a frente a mí?",
            "¿Qué trago o copa no volverías a beber en tu vida?"
        ],
        retos: [
            "Bebe 2 tragos de tu copa.",
            "Tómate un chupito/trago sin usar las manos.",
            "Elige a alguien para beber juntos un trago."
        ]
    },
    extremo: {
        verdades: [
            "¿Qué secreto picante nunca me habías contado?",
            "¿Qué parte de mi cuerpo es tu favorita y por qué?"
        ],
        retos: [
            "Hazme un masaje en la espalda durante 2 minutos.",
            "Bésame en el cuello durante 15 segundos.",
            "Susúrrame algo provocativo al oído."
        ]
    },
    ultra: {
        verdades: [
            "¿Cuál es tu mayor fantasía no cumplida conmigo?",
            "¿Qué lugar atrevido elegirías para tener una cita romántica?"
        ],
        retos: [
            "Un beso apasionado de 20 segundos.",
            "Quítate una prenda de ropa.",
            "Vérteme un trago despacio y tómalo directamente."
        ]
    }
};

function abrirJuego(modo) {
    modoActual = modo;
    var nombresModos = { chill: "🍃 Chill", beber: "🍻 Beber", extremo: "🔥 Extremo", ultra: "💀 Ultra Extremo" };
    document.getElementById('titulo-modo').innerText = nombresModos[modo];
    document.getElementById('texto-reto').innerText = "Elige: ¿Verdad o Reto?";
    document.getElementById('modal-juego').classList.remove('oculto');
    document.getElementById('menu-juego').classList.add('oculto');
}

function cerrarJuego() {
    document.getElementById('modal-juego').classList.add('oculto');
}

function obtenerVerdad() {
    var lista = juegoDatos[modoActual].verdades;
    var aleatorio = lista[Math.floor(Math.random() * lista.length)];
    document.getElementById('texto-reto').innerText = "🤔 VERDAD:\n" + aleatorio;
}

function obtenerReto() {
    var lista = juegoDatos[modoActual].retos;
    var aleatorio = lista[Math.floor(Math.random() * lista.length)];
    document.getElementById('texto-reto').innerText = "⚡ RETO:\n" + aleatorio;
}