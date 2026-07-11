import { modulosRepositorio } from '../data/biblioteca.js';

// --- NUEVA SECCIÓN: CARGA DINÁMICA DE MÓDULOS DE NAVEGACIÓN ---
export function cargarModulosRepositorio() {
    const grid = document.getElementById('grid-archivos');
    if (!grid) return;

    grid.innerHTML = '';
    modulosRepositorio.forEach(item => {
        grid.innerHTML += `
            <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
                <div>
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:text-white transition-colors ${item.colorIcono}">
                        <i class="fa-solid ${item.icono} text-lg"></i>
                    </div>
                    <span class="text-xs font-semibold tracking-wider uppercase ${item.colorBoton}">${item.modulo}</span>
                    <h2 class="text-xl font-bold text-slate-900 mt-1 mb-2">${item.titulo}</h2>
                    <p class="text-slate-600 text-sm leading-relaxed">
                        ${item.descripcion}
                    </p>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${item.colorBadge}">
                        ${item.tag}
                    </span>
                    <a href="${item.enlaceHtml}" class="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${item.colorBoton}">
                        Explorar <i class="fa-solid fa-arrow-right text-xs ml-1 transition-transform group-hover:translate-x-1"></i>
                    </a>
                </div>
            </div>
        `;
    });
}

// --- LÓGICA DE PESTAÑAS (TABS) ---
export function openTab(evt, tabName) {
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
    const targetTab = document.getElementById(tabName);
    if (targetTab) targetTab.classList.add("active");
    
    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add("border-blue-600", "text-blue-600");
        evt.currentTarget.classList.remove("border-transparent", "text-slate-500");
    }
}

// --- CONTROL DEL MENÚ DE NAVEGACIÓN EN MÓVILES ---
export function toggleMobileMenu() {
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

// --- CARGA ASÍNCRONA DE LA BARRA DE NAVEGACIÓN ---
export async function cargarNavbar() {
    const contenedor = document.getElementById('navbar-container');
    if (!contenedor) return;

    try {
        const respuesta = await fetch('components/navbar.html');
        if (!respuesta.ok) throw new Error("No se pudo cargar el menú");
        const htmlNav = await respuesta.text();
        
        contenedor.innerHTML = htmlNav;

        const rutaActual = window.location.pathname;
        let paginaActiva = "index";
        
        if (rutaActual.includes("vision.html")) paginaActiva = "vision";
        else if (rutaActual.includes("repositorio.html")) paginaActiva = "repositorio";
        else if (rutaActual.includes("participacion.html")) paginaActiva = "participacion";

        const enlaceActivo = contenedor.querySelector(`[data-link="${paginaActiva}"]`);
        if (enlaceActivo) {
            enlaceActivo.classList.remove('text-slate-600');
            enlaceActivo.classList.add('text-blue-600');
        }
        
        // Listener para el menú móvil dinámico recién inyectado
        const menuBtn = document.getElementById('menu-mobile-btn');
        if (menuBtn) {
            menuBtn.addEventListener('click', toggleMobileMenu);
        }
    } catch (error) {
        console.error("Error al montar la navegación:", error);
    }
}