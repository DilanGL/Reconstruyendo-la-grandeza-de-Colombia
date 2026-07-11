export function selectSurvey(type) {
    const targetTab = document.getElementById(`survey-${type}`);
    const targetCard = document.getElementById(`option-${type}`);
    
    if (!targetTab || !targetCard) return;

    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.survey-card').forEach(el => {
        el.classList.remove('selected', 'border-blue-600');
        el.style.borderColor = 'transparent';
    });
    
    targetTab.classList.add('active');
    targetCard.classList.add('selected');
    
    if (type === 'new') {
        targetCard.classList.add('border-blue-600');
    } else if (type === 'known') {
        targetCard.style.borderColor = '#9333ea';
    } else if (type === 'pqrs') {
        targetCard.style.borderColor = '#059669';
    }

    const iframe = targetTab.querySelector('iframe');
    if (iframe && iframe.getAttribute('data-src') && !iframe.getAttribute('src')) {
        iframe.setAttribute('src', iframe.getAttribute('data-src'));
    }
}

export async function renderizarPendientes() {
    try {
        const respuesta = await fetch('pendientes.json');
        if (!respuesta.ok) return;
        
        const pendientes = await respuesta.json();
        if (pendientes.length === 0) return;

        const panel = document.createElement('div');
        panel.className = "fixed bottom-4 right-4 z-50 bg-slate-950 text-white p-4 rounded-2xl shadow-2xl max-w-xs border border-slate-800 font-sans text-xs space-y-3 animate-fade-in";
        
        let htmlContenido = `
            <div class="flex justify-between items-center border-b border-slate-800 pb-2">
                <span class="font-bold tracking-wide uppercase text-blue-500 flex items-center gap-1.5">
                    <i class="fa-solid fa-list-check"></i> Pendientes de Diseño
                </span>
                <button id="close-pendientes-btn" class="text-slate-500 hover:text-white transition-colors">✕</button>
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

        // Agrega el evento para cerrar el modal de pendientes de diseño de forma limpia
        document.getElementById('close-pendientes-btn').addEventListener('click', () => panel.remove());

    } catch (error) {
        console.log("Modo producción o pendientes vacíos.");
    }
}