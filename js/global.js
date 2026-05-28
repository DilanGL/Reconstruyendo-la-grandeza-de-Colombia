// --- CONFIGURACIÓN DE RUTAS MULTIMEDIA HERO ---
const videoPath = "https://lh3.googleusercontent.com/d/1fDnezTwzmC2FRfkFpgq-q4WjAJXjhUOE"; 
const imagePath = "https://lh3.googleusercontent.com/d/1Jh0CsZD9LDNPKhhmqVJndMGNRInKwAi3"; 

// --- BASE DE DATOS DEL REPOSITORIO ---
const bibliotecaArchivos = [
    { 
        id: "modulos-cel", 
        titulo: "Módulos (Público)", 
        desc: "Análisis del contexto nacional e internacional.", 
        cat: "ESTRATEGIA",
        tipo: "pdf",
        versiones: [
            { nombre: "Versión 2.4", ruta: "https://drive.google.com/uc?export=download&id=1iaOLRGaz3_ZMEdrp_mrtvn0O13yCVjeR", fecha: "May 2026" },
            { nombre: "Versión 2.3", ruta: "https://drive.google.com/uc?export=download&id=1GUbU8iRmBX9wC8hcCW4j8oyfau79BMkr", fecha: "Abr 2026" },
            { nombre: "Versión 2.2", ruta: "https://drive.google.com/uc?export=download&id=16XbI-bqqjuPlIGlHeM57EFf-V82nv9i5", fecha: "Feb 2026" }
        ]
    },
    { 
        id: "ensayos-cel-1-10", 
        titulo: "Ensayos 1-10 (Público)", 
        desc: "Infraestructura y Red de Metros.", 
        cat: "TÉCNICO",
        tipo: "pdf",
        versiones: [
            { nombre: "Vision y Pilares", ruta: "https://drive.google.com/uc?export=download&id=12r3-ytfTGv1F8wzR9CE3ed0KNXzyAYGx", fecha: "" },
            { nombre: "Analisis Estrategico", ruta: "https://drive.google.com/uc?export=download&id=1YyKd1AO5BcJTGgreCO73ah6foNo0lj4v", fecha: "" }
        ]
    },
    { 
        id: "ensayos-cel-11-20", 
        titulo: "Ensayos 11-20 (Público)", 
        desc: "Principios filosóficos del proyecto.", 
        cat: "FILOSOFÍA",
        tipo: "pdf",
        versiones: [
            { nombre: "Atracción de Capital Humano", ruta: "https://drive.google.com/uc?export=download&id=1uVcY6nYwSirJZ9lhEK0n9X_PMpcmax97", fecha: "" }
        ]
    }
];

// --- LÓGICA DEL HERO MULTIMEDIA ---
function initHeroMedia() {
    const video = document.getElementById('hero-video');
    const image = document.getElementById('hero-img');
    
    if (!video || !image) return;

    // Asignar recursos base en segundo plano
    image.src = imagePath;
    if (videoPath && videoPath !== "") {
        video.querySelector('source').src = videoPath;
        video.load();
    }
    
    // Forzamos a que la página inicie mostrando la IMAGEN por defecto
    switchMedia('img');
}

function switchMedia(type) {
    const video = document.getElementById('hero-video');
    const image = document.getElementById('hero-img');
    const placeholder = document.getElementById('controls-placeholder');
    const caption = document.getElementById('media-caption');
    const btnImg = document.getElementById('btn-show-img');
    const btnVideo = document.getElementById('btn-show-video');

    if (!video || !image) return;

    if (type === 'video') {
        // Validar si hay un video configurado
        if (!videoPath || videoPath === "") {
            alert("No hay un video configurado en este momento.");
            return;
        }

        // Mostrar video y ocultar imagen
        image.classList.add('hidden');
        video.classList.remove('hidden');
        
        // Estilos del selector (Video activo en Azul, Imagen inactiva en Gris)
        btnVideo.className = "px-3 py-1.5 text-xs font-bold rounded-lg transition-all bg-blue-600 text-white";
        btnImg.className = "px-3 py-1.5 text-xs font-bold rounded-lg transition-all text-slate-400 hover:text-white";

        // Inyectar los controles flotantes del video (se movieron aquí)
        placeholder.innerHTML = `
            <div class="absolute inset-0 flex flex-col justify-between p-4 video-controls-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div class="flex justify-end">
                    <span class="bg-blue-600/80 backdrop-blur-sm text-[10px] text-white uppercase font-bold px-2 py-1 rounded">Video Proyectivo</span>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex space-x-3">
                        <button onclick="togglePlay()" class="w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center backdrop-blur-md text-white">
                            <i id="play-icon" class="fa-solid fa-pause"></i>
                        </button>
                        <button onclick="toggleMute()" class="w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center backdrop-blur-md text-white">
                            <i id="volume-icon" class="fa-solid fa-volume-xmark"></i>
                        </button>
                    </div>
                    <button onclick="toggleFullScreen()" class="w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center backdrop-blur-md text-white">
                        <i class="fa-solid fa-expand"></i>
                    </button>
                </div>
            </div>
        `;
        
        caption.innerText = "Reproduciendo video. Pasa el cursor por encima para ver los controles.";
        video.play().catch(() => console.log("Autoplay esperando interacción"));

    } else {
        // Si elige Imagen
        video.pause();
        video.classList.add('hidden');
        image.classList.remove('hidden');
        placeholder.innerHTML = ''; // Limpiar controles para que no estorben sobre la imagen

        // Estilos del selector (Imagen activa en Azul, Video inactivo en Gris)
        btnImg.className = "px-3 py-1.5 text-xs font-bold rounded-lg transition-all bg-blue-600 text-white";
        btnVideo.className = "px-3 py-1.5 text-xs font-bold rounded-lg transition-all text-slate-400 hover:text-white";

        caption.innerText = "Mostrando imagen oficial del Plan Estratégico.";
    }
}

function togglePlay() {
    const video = document.getElementById('hero-video');
    const playIcon = document.getElementById('play-icon');
    if (video.paused) {
        video.play();
        playIcon.classList.replace('fa-play', 'fa-pause');
    } else {
        video.pause();
        playIcon.classList.replace('fa-pause', 'fa-play');
    }
}

function toggleMute() {
    const video = document.getElementById('hero-video');
    const volIcon = document.getElementById('volume-icon');
    video.muted = !video.muted;
    if (video.muted) {
        volIcon.classList.replace('fa-volume-high', 'fa-volume-xmark');
    } else {
        volIcon.classList.replace('fa-volume-xmark', 'fa-volume-high');
    }
}

function toggleFullScreen() {
    const video = document.getElementById('hero-video');
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
}

// --- LÓGICA DE PESTAÑAS (TABS) ---
function openTab(evt, tabName) {
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("border-blue-600", "text-blue-600");
        tabLinks[i].classList.add("border-transparent", "text-slate-500");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("border-blue-600", "text-blue-600");
    evt.currentTarget.classList.remove("border-transparent", "text-slate-500");
}

// --- CARGA DINÁMICA DE BIBLIOTECA ---
function cargarBiblioteca() {
    const grid = document.getElementById('grid-archivos');
    if (!grid) return;

    grid.innerHTML = '';
    bibliotecaArchivos.forEach(archivo => {
        const iconClass = 'fa-file-pdf text-red-500';
        const bgColor = 'bg-red-50';

        const opcionesVersiones = archivo.versiones.map(v => `
            <option value="${v.ruta}">${v.nombre} ${v.fecha ? `(${v.fecha})` : ''}</option>
        `).join('');

        const rutaInicial = archivo.versiones[0].ruta;

        grid.innerHTML += `
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow flex flex-col h-full">
                <div class="flex items-start justify-between mb-4">
                    <div class="w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center"><i class="fa-solid ${iconClass} text-xl"></i></div>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded">${archivo.cat}</span>
                </div>
                <h3 class="text-lg font-bold text-slate-900 mb-2">${archivo.titulo}</h3>
                <p class="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">${archivo.desc}</p>
                <div class="pt-4 border-t border-slate-50 space-y-3">
                    <select class="w-full text-xs border border-slate-200 rounded-lg p-2" onchange="cambiarVersion(this, '${archivo.id}')">
                        ${opcionesVersiones}
                    </select>
                    <div class="flex gap-2">
                        <a id="ver-${archivo.id}" href="${rutaInicial}" target="_blank" class="flex-1 inline-flex justify-center items-center px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors">
                            <i class="fa-solid fa-eye mr-2"></i> Ver
                        </a>
                        <a id="descargar-${archivo.id}" href="${rutaInicial}" download class="flex-1 inline-flex justify-center items-center px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-lg transition-colors">
                            <i class="fa-solid fa-download mr-2"></i> Bajar
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
}

function cambiarVersion(select, id) {
    const ruta = select.value;
    document.getElementById(`ver-${id}`).href = ruta;
    document.getElementById(`descargar-${id}`).href = ruta;
}

// --- SELECCIÓN DE ENCUESTAS ---
function selectSurvey(type) {
    const optNew = document.getElementById('option-new');
    const optKnown = document.getElementById('option-known');
    const surveyNew = document.getElementById('survey-new');
    const surveyKnown = document.getElementById('survey-known');

    if (type === 'new') {
        optNew.classList.add('selected');
        optKnown.classList.remove('selected');
        surveyNew.classList.add('active');
        surveyKnown.classList.remove('active');
    } else {
        optKnown.classList.add('selected');
        optNew.classList.remove('selected');
        surveyKnown.classList.add('active');
        surveyNew.classList.remove('active');
    }
}

// Ejecución al cargar la página
window.addEventListener('load', () => {
    initHeroMedia();
    cargarBiblioteca();
});
