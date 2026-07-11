import { cargarNavbar, cargarModulosRepositorio, openTab } from './modules/ui.js';
import { initHeroMedia, switchMedia } from './modules/hero.js';
import { selectSurvey, renderizarPendientes } from './modules/participacion.js';
// Importamos las utilidades generales de los módulos
import { initTabsGenericas, ModuloCarousel } from './modules/modulos-manager.js';

// --- VINCULACIÓN AL WINDOW PARA COMPATIBILIDAD CON ATRIBUTOS ONCLICK INLINE ---
window.openTab = openTab;
window.switchMedia = switchMedia;
window.selectSurvey = selectSurvey;

// --- ESCUCHA CENTRALIZADA AL CARGAR LA PÁGINA ---
window.addEventListener('load', () => {
    cargarNavbar();
    initHeroMedia();
    renderizarPendientes();
    cargarModulosRepositorio();

    // 🌟 INICIALIZACIÓN AUTOMÁTICA DE COMPONENTES DE MÓDULOS
    initTabsGenericas();

    if (document.getElementById('fuente-diapositivas')) {
        window.miCarrusel = new ModuloCarousel('fuente-diapositivas', 'slide-contenido', 'slide-contador');
    }

    document.body.classList.add("pt-24");

    const urlParams = new URLSearchParams(window.location.search);

    const surveyParam = urlParams.get('survey');
    if (surveyParam && ['new', 'known', 'pqrs'].includes(surveyParam)) {
        selectSurvey(surveyParam);
    }

    const tabParam = urlParams.get('tab');
    if (tabParam) {
        document.querySelectorAll('.tab-content').forEach(el => {
            if (!el.id.startsWith('survey-')) {
                el.classList.remove('active');
            }
        });

        document.querySelectorAll('.tab-link').forEach(el => {
            el.classList.remove("border-blue-600", "text-blue-600");
            el.classList.add("border-transparent", "text-slate-500");
        });

        const targetTab = document.getElementById(tabParam);
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