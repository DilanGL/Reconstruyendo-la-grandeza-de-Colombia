// --- CONFIGURACIÓN DE RUTAS MULTIMEDIA HERO ---
const videoPath = "https://lh3.googleusercontent.com/d/1fDnezTwzmC2FRfkFpgq-q4WjAJXjhUOE=m22"; 
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
            { nombre: "Versión 2.2", ruta: "https://drive.google.com/uc?export=download&id=16XbI-bqqjuPlIGlHeM57EFf-V82nv9i5", fecha: "Feb 2026" },
            { nombre: "Versión 2.1", ruta: "https://drive.google.com/uc?export=download&id=1ejIPlsMMEI-MdkkHkRpgawlR_AyOKr8t", fecha: "Ene 2025" },
            { nombre: "Versión 2.0", ruta: "https://drive.google.com/uc?export=download&id=1ZLRs69QvK2HG3z-uBkRoHA63mVwhjhMv", fecha: "Nov 2025" },
            { nombre: "Versión 1.5", ruta: "https://drive.google.com/uc?export=download&id=10rTd-KA-3NMn6w-BgmwbxorE7KGfBepk", fecha: "Oct 2025" }
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
            { nombre: "Analisis Estrategico", ruta: "https://drive.google.com/uc?export=download&id=1YyKd1AO5BcJTGgreCO73ah6foNo0lj4v", fecha: "" },
            { nombre: "Actores Clave", ruta: "https://drive.google.com/uc?export=download&id=1CeMEQ8g6uzfgiOMzYdCrOF2-Smn7s6Uo", fecha: "" },
            { nombre: "Obstaculos y Riesgos", ruta: "https://drive.google.com/uc?export=download&id=1BsK-9r3Nm7ejBVn2SAiS9lZLDxGO_zLZ", fecha: "" },
            { nombre: "Escenarios", ruta: "https://drive.google.com/uc?export=download&id=1SieNuN7mhjzK2JYSJGztAnJFNjiq2dh2", fecha: "" },
            { nombre: "Recursos", ruta: "https://drive.google.com/uc?export=download&id=1RH7F-yrdMxjwKLw5gyAMnCU841o2o12o", fecha: "" },
            { nombre: "Industria Creativa", ruta: "https://drive.google.com/uc?export=download&id=1lttZJQ3Jn_wX0HJ7qhVteg7HRSItVB-h", fecha: "" },
            { nombre: "Arte y Plataforma Cultural", ruta: "https://drive.google.com/uc?export=download&id=1_3Tcj_MHXu9iXyZb5jctOTdQWRAIV6mD", fecha: "" },
            { nombre: "Transformación del Transporte", ruta: "https://drive.google.com/uc?export=download&id=1b7VWWrhV3TBc7FPuymQFFWL3t156TSh4", fecha: "" },
            { nombre: "Reforma Politica", ruta: "https://drive.google.com/uc?export=download&id=1mReB5Ra-12oXwJ9TnSxG66k4w01u2333", fecha: "" }
            ]
        },
        { 
        id: "ensayos-cel-11-20", 
        titulo: "Ensayos 11-20 (Público)", 
        desc: "Principios filosóficos del proyecto.", 
        cat: "TÉCNICO",
        tipo: "pdf",
        versiones: [
            { nombre: "Atracción de Capital Humano", ruta: "https://drive.google.com/uc?export=download&id=1uVcY6nYwSirJZ9lhEK0n9X_PMpcmax97", fecha: "" },
            { nombre: "Estrategias Conductuales e Incentivos", ruta: "https://drive.google.com/uc?export=download&id=1Xjbr3HVE9BlGicpladVTz1pLqMHDDg8h", fecha: "" },
            { nombre: "Integración TLC y APE", ruta: "https://drive.google.com/uc?export=download&id=1aqZpUiYf_HxUgPXGGu98MTrUvVBXowuo", fecha: "" },
            { nombre: "Transformación Productiva Incentivada", ruta: "https://drive.google.com/uc?export=download&id=1l8dLHbPI8ZWeiIQUD0dof5X7u4q_5aPn", fecha: "" },
            { nombre: "Reforma Nacional RENT", ruta: "https://drive.google.com/uc?export=download&id=1UmKlXz-k6URIh9dWVdlqrk3uMXGshMRd", fecha: "" },
            { nombre: "Reforma Judicial", ruta: "https://drive.google.com/uc?export=download&id=1roJs_evPHg_-2efjUKMeYxqueoeNvEMF", fecha: "" },
            { nombre: "Cuestiones Criticas", ruta: "https://drive.google.com/uc?export=download&id=1Pln9ETgPV4v169FRa5VRaHq4eIUijm3C", fecha: "" },
            { nombre: "Activación de Licencias", ruta: "https://drive.google.com/uc?export=download&id=1qYV7mQtvHtDctKsk04e-RLyCP8xYsR6m", fecha: "" },
            { nombre: "Ordenamiento Juridico y Territorial", ruta: "https://drive.google.com/uc?export=download&id=1AUxT_Syaa7P9FUwNAcCUPDYLU1mqi3yV", fecha: "" },
            { nombre: "Blindaje Tactico", ruta: "https://drive.google.com/uc?export=download&id=1COBG8N3uY1FyVuzo50Dv8d4oP8HVOj3-" }
            ]
        }
    ];

// --- FUNCIÓN AUXILIAR PARA GENERAR RUTA DE VISTA PREVIA ---
// Toma la URL de descarga y extrae el ID para transformarlo en enlace de visualización
function obtenerRutaVer(rutaDescarga) {
    try {
        const urlObj = new URL(rutaDescarga);
        const id = urlObj.searchParams.get("id");
        if (id) {
            return `https://drive.google.com/file/d/${id}/preview`;
        }
    } catch (e) {
        console.error("Error procesando la URL de Drive:", e);
    }
    return rutaDescarga;
}

// --- LÓGICA DEL HERO MULTIMEDIA ---
function initHeroMedia() {
    const video = document.getElementById('hero-video');
    const image = document.getElementById('hero-img');
    
    if (!video || !image) return;

    // Asignar recursos base en segundo plano
    image.src = imagePath;
    if (videoPath && videoPath !== "") {
        video.src = videoPath;
        video.load();
    }
    
    // Forzamos a que la página inicie mostrando la IMAGEN por defecto
    switchMedia('img');
}

function switchMedia(type) {
    const imgElement = document.getElementById('hero-img');
    const videoWrapper = document.getElementById('hero-video-wrapper');
    const btnImg = document.getElementById('btn-show-img');
    const btnVideo = document.getElementById('btn-show-video');
    const caption = document.getElementById('media-caption');

    if (!imgElement || !videoWrapper || !btnImg || !btnVideo || !caption) return;

    if (type === 'img') {
        // Mostrar Imagen, Ocultar Video
        imgElement.classList.remove('hidden');
        videoWrapper.classList.add('hidden');

        // Alternar diseño de botones
        btnImg.className = "px-3 py-1.5 text-xs font-bold rounded-lg transition-all bg-blue-600 text-white";
        btnVideo.className = "px-3 py-1.5 text-xs font-bold rounded-lg transition-all text-slate-400 hover:text-white";
        
        caption.textContent = "Mostrando imagen oficial del proyecto";
        
        // Pausar el video de YouTube al salir usando la API de YouTube enviando un postMessage
        const iframe = document.getElementById('hero-youtube');
        if (iframe) {
            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }

    } else if (type === 'video') {
        // Mostrar Video, Ocultar Imagen
        imgElement.classList.add('hidden');
        videoWrapper.classList.remove('hidden');

        // Alternar diseño de botones
        btnImg.className = "px-3 py-1.5 text-xs font-bold rounded-lg transition-all text-slate-400 hover:text-white";
        btnVideo.className = "px-3 py-1.5 text-xs font-bold rounded-lg transition-all bg-blue-600 text-white";
        
        caption.textContent = "Reproduciendo presentación oficial desde YouTube";
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

        const rutaInicialDescarga = archivo.versiones[0].ruta;
        const rutaInicialVer = obtenerRutaVer(rutaInicialDescarga);

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
                        <a id="ver-${archivo.id}" href="${rutaInicialVer}" target="_blank" class="flex-1 inline-flex justify-center items-center px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors">
                            <i class="fa-solid fa-eye mr-2"></i> Ver
                        </a>
                        <a id="descargar-${archivo.id}" href="${rutaInicialDescarga}" download class="flex-1 inline-flex justify-center items-center px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-lg transition-colors">
                            <i class="fa-solid fa-download mr-2"></i> Bajar
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
}

// --- MODIFICADO PARA COMPORTARSE BIEN EN EL SELECT ---
function cambiarVersion(select, id) {
    const rutaDescarga = select.value;
    const rutaVer = obtenerRutaVer(rutaDescarga);
    
    document.getElementById(`ver-${id}`).href = rutaVer;
    document.getElementById(`descargar-${id}`).href = rutaDescarga;
}

// --- CONTROL DEL MENÚ DE NAVEGACIÓN EN MÓVILES ---
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    
    if (!menu) return;

    // Alternar la clase 'hidden' de Tailwind para mostrar/ocultar
    menu.classList.toggle('hidden');
    
    // Cambiar el icono entre las tres barras (bars) y una X (xmark)
    if (menu.classList.contains('hidden')) {
        icon.classList.replace('fa-xmark', 'fa-bars');
    } else {
        icon.classList.replace('fa-bars', 'fa-xmark');
    }
}

// --- CARGA ASÍNCRONA DE LA BARRA DE NAVEGACIÓN ---
async function cargarNavbar() {
    const contenedor = document.getElementById('navbar-container');
    if (!contenedor) return;

    try {
        // 1. Buscar el archivo HTML independiente
        const respuesta = await fetch('components/navbar.html');
        if (!respuesta.ok) throw new Error("No se pudo cargar el menú");
        const htmlNav = await respuesta.text();
        
        // 2. Inyectarlo en la página
        contenedor.innerHTML = htmlNav;

        // 3. Resaltar la página activa automáticamente
        const rutaActual = window.location.pathname;
        let paginaActiva = "index"; // Por defecto
        
        if (rutaActual.includes("vision.html")) paginaActiva = "vision";
        else if (rutaActual.includes("repositorio.html")) paginaActiva = "repositorio";
        else if (rutaActual.includes("participacion.html")) paginaActiva = "participacion";

        const enlaceActivo = contenedor.querySelector(`[data-link="${paginaActiva}"]`);
        if (enlaceActivo) {
            enlaceActivo.classList.remove('text-slate-600');
            enlaceActivo.classList.add('text-blue-600');
        }
    } catch (error) {
        console.error("Error al montar la navegación:", error);
    }
}

// --- CONTROL DEL MENÚ DE NAVEGACIÓN EN MÓVILES ---
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    if (!menu) return;

    menu.classList.toggle('hidden');
    if (menu.classList.contains('hidden')) {
        icon.classList.replace('fa-xmark', 'fa-bars');
    } else {
        icon.classList.replace('fa-bars', 'fa-xmark');
    }
}

// --- PORTAL DE PARTICIPACIÓN (CONTROL DE PESTAÑAS Y CARGA PEREZOSA) ---
function selectSurvey(type) {
    const targetTab = document.getElementById(`survey-${type}`);
    const targetCard = document.getElementById(`option-${type}`);
    
    // Si no existen estos elementos en la página actual, detenemos la función
    if (!targetTab || !targetCard) return;

    // 1. Desactivar todas las pestañas y quitar selecciones previas
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.survey-card').forEach(el => {
        el.classList.remove('selected', 'border-blue-600');
        el.style.borderColor = 'transparent';
    });
    
    // 2. Activar la pestaña y tarjeta seleccionada
    targetTab.classList.add('active');
    targetCard.classList.add('selected');
    
    // 3. Aplicar colores según el perfil
    if (type === 'new') {
        targetCard.classList.add('border-blue-600');
    } else if (type === 'known') {
        targetCard.style.borderColor = '#9333ea';
    } else if (type === 'pqrs') {
        targetCard.style.borderColor = '#059669';
    }

    // 4. LA MEJORA: Carga Perezosa (Lazy Loading) del iFrame
    const iframe = targetTab.querySelector('iframe');
    // Si el iframe tiene un 'data-src' pero no tiene un 'src' aún, lo cargamos
    if (iframe && iframe.getAttribute('data-src') && !iframe.getAttribute('src')) {
        iframe.setAttribute('src', iframe.getAttribute('data-src'));
    }
}

async function renderizarPendientes() {
    try {
        // Al ser un archivo local, el fetch es instantáneo y no requiere APIs externas
        const respuesta = await fetch('pendientes.json');
        if (!respuesta.ok) return; // Si borras el archivo en producción, simplemente no muestra nada
        
        const pendientes = await respuesta.json();
        if (pendientes.length === 0) return;

        // Creamos el contenedor fijo en la esquina inferior con Tailwind
        const panel = document.createElement('div');
        panel.className = "fixed bottom-4 right-4 z-50 bg-slate-950 text-white p-4 rounded-2xl shadow-2xl max-w-xs border border-slate-800 font-sans text-xs space-y-3 animate-fade-in";
        
        let htmlContenido = `
            <div class="flex justify-between items-center border-b border-slate-800 pb-2">
                <span class="font-bold tracking-wide uppercase text-blue-500 flex items-center gap-1.5">
                    <i class="fa-solid fa-list-check"></i> Pendientes de Diseño
                </span>
                <button onclick="this.parentElement.parentElement.remove()" class="text-slate-500 hover:text-white transition-colors">✕</button>
            </div>
            <div class="max-h-52 overflow-y-auto space-y-2 pr-1 text-[11px]">
        `;

        pendientes.forEach(item => {
            const barraColor = item.prioridad === 'Alta' ? 'border-red-500' : 'border-yellow-500';
            htmlContenido += `
                <div class="p-2.5 bg-slate-900 rounded-xl border-l-2 ${barraColor} border-opacity-80">
                    <div class="flex justify-between font-semibold text-[10px] text-slate-400 mb-1">
                        <span>Pestaña: ${item.seccion}</span>
                        <span class="uppercase text-[9px] tracking-wider px-1.5 py-0.5 rounded ${item.prioridad === 'Alta' ? 'bg-red-950 text-red-400' : 'bg-yellow-950 text-yellow-400'}">${item.prioridad}</span>
                    </div>
                    <p class="text-slate-300 leading-relaxed font-medium">${item.descripcion}</p>
                </div>
            `;
        });

        htmlContenido += `</div>`;
        panel.innerHTML = htmlContenido;
        document.body.appendChild(panel);

    } catch (error) {
        // Silencioso: si el archivo no existe o está vacío, el usuario final no notará nada
        console.log("Modo producción o pendientes vacíos.");
    }
}

// Ejecución al cargar la página
window.addEventListener('load', () => {
        cargarNavbar();
        initHeroMedia();
        cargarBiblioteca();
        renderizarPendientes();

        document.body.classList.add("pt-24");

    const urlParams = new URLSearchParams(window.location.search);

    // 1. CONTROL DE ENCUESTAS (?survey=)
    const surveyParam = urlParams.get('survey');
    if (surveyParam && ['new', 'known', 'pqrs'].includes(surveyParam)) {
        selectSurvey(surveyParam);
    }

    // 2. CONTROL DE PESTAÑAS DE VISIÓN Y PROPUESTAS (?tab=)
    const tabParam = urlParams.get('tab');
    if (tabParam) {
        // Desactivar todos los contenidos de pestañas activos
        document.querySelectorAll('.tab-content').forEach(el => {
            if (!el.id.startsWith('survey-')) {
                el.classList.remove('active');
            }
        });

        // Desactivar todos los estilos de los enlaces/botones de pestañas
        document.querySelectorAll('.tab-link').forEach(el => {
            el.classList.remove("border-blue-600", "text-blue-600");
            el.classList.add("border-transparent", "text-slate-500");
        });

        // Intentar activar el contenedor correspondiente
        const targetTab = document.getElementById(tabParam);
        // Intentar activar el botón correspondiente
        const targetBtn = document.getElementById(`tab-btn-${tabParam}`);

        if (targetTab) {
            targetTab.classList.add('active');
        }
        
        if (targetBtn) {
            targetBtn.classList.remove("border-transparent", "text-slate-500");
            targetBtn.classList.add("border-blue-600", "text-blue-600");
        }
    }
});
