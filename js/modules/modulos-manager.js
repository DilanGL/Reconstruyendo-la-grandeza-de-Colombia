export function initTabsGenericas() {
    document.querySelectorAll('[data-tabs-group]').forEach((grupo) => {
        const botones = Array.from(grupo.querySelectorAll('[data-tab-target]'));
        const paneles = Array.from(grupo.querySelectorAll('[data-tab-panel]'));

        if (!botones.length || !paneles.length) return;

        botones.forEach((boton) => {
            boton.addEventListener('click', () => {
                botones.forEach((btn) => {
                    btn.classList.remove('border-blue-600', 'text-blue-600');
                    btn.classList.add('border-transparent', 'text-slate-500');
                });

                paneles.forEach((panel) => panel.classList.add('hidden'));

                boton.classList.remove('border-transparent', 'text-slate-500');
                boton.classList.add('border-blue-600', 'text-blue-600');

                const target = boton.getAttribute('data-tab-target');
                const panelActivo = grupo.querySelector(`[data-tab-panel="${target}"]`);
                if (panelActivo) {
                    panelActivo.classList.remove('hidden');
                }
            });
        });

        if (botones[0]) {
            botones[0].click();
        }
    });
}

export class ModuloCarousel {
    constructor(sourceId, contentId, counterId) {
        this.sourceContainer = document.getElementById(sourceId);
        this.contentContainer = document.getElementById(contentId);
        this.counterElement = document.getElementById(counterId);
        this.slides = this.sourceContainer ? Array.from(this.sourceContainer.children) : [];
        this.currentIndex = 0;

        if (this.slides.length) {
            this.render();
        }
    }

    render() {
        if (!this.contentContainer || !this.slides.length) return;

        const slide = this.slides[this.currentIndex];
        this.contentContainer.innerHTML = slide ? slide.innerHTML : '';

        if (this.counterElement) {
            this.counterElement.textContent = `${this.currentIndex + 1}/${this.slides.length}`;
        }
    }

    navegar(direction) {
        if (!this.slides.length) return;

        this.currentIndex = (this.currentIndex + direction + this.slides.length) % this.slides.length;
        this.render();
    }
}