// --- BASE DE DATOS DEL REPOSITORIO DE DOCUMENTOS ---
export const bibliotecaArchivos = [
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
        { font: "Cuestiones Criticas", ruta: "https://drive.google.com/uc?export=download&id=1Pln9ETgPV4v169FRa5VRaHq4eIUijm3C", fecha: "" },
        { nombre: "Activación de Licencias", ruta: "https://drive.google.com/uc?export=download&id=1qYV7mQtvHtDctKsk04e-RLyCP8xYsR6m", fecha: "" },
        { nombre: "Ordenamiento Juridico y Territorial", ruta: "https://drive.google.com/uc?export=download&id=1AUxT_Syaa7P9FUwNAcCUPDYLU1mqi3yV", fecha: "" },
        { nombre: "Blindaje Tactico", ruta: "https://drive.google.com/uc?export=download&id=1COBG8N3uY1FyVuzo50Dv8d4oP8HVOj3-" }
        ]
    }
];

// --- NUEVA DATA COMPLEMENTARIA PARA EL MENÚ GENERAL ---
export const modulosRepositorio = [
    {
        modulo: "Módulo 1",
        titulo: "Visión, Objetivos y Pilares",
        descripcion: "Fundamentación ética e institucional inspirada en estándares de excelencia (Noruega y Suiza) para el desarrollo a largo plazo.",
        tag: "Introducción",
        icono: "fa-compass",
        colorBadge: "bg-indigo-100 text-indigo-800",
        colorIcono: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600",
        colorBoton: "text-indigo-600 hover:text-indigo-700",
        enlaceHtml: "modulo1.html"
    },
    {
        modulo: "Módulo 2.1",
        titulo: "Análisis Estratégico Contextual",
        descripcion: "Evaluación rigurosa del panorama político, económico y social en los ámbitos nacional e internacional.",
        tag: "Diagnóstico",
        icono: "fa-globe",
        colorBadge: "bg-violet-100 text-violet-800",
        colorIcono: "bg-violet-50 text-violet-600 group-hover:bg-violet-600",
        colorBoton: "text-violet-600 hover:text-violet-700",
        enlaceHtml: "modulo2-1.html"
    },
    {
        modulo: "Módulo 2.2",
        titulo: "Infraestructura y Territorio",
        descripcion: "Redes de transporte multimodal (SIAV), optimización de licencias mediante el Observatorio Nacional e integración con los POT.",
        tag: "SIAV / POT",
        icono: "fa-map-location-dot",
        colorBadge: "bg-blue-100 text-blue-800",
        colorIcono: "bg-blue-50 text-blue-600 group-hover:bg-blue-600",
        colorBoton: "text-blue-600 hover:text-blue-700",
        enlaceHtml: "modulo2-2.html"
    },
    {
        modulo: "Módulo 2.3",
        titulo: "Justicia Preventiva y RENT",
        descripcion: "Auditoría de procesos educativos mediante RENT, control fiscal automatizado por Inteligencia Artificial y cerco reputacional.",
        tag: "RENT / IA",
        icono: "fa-microchip",
        colorBadge: "bg-emerald-100 text-emerald-800",
        colorIcono: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600",
        colorBoton: "text-emerald-600 hover:text-emerald-700",
        enlaceHtml: "../modulos/modulo2-3.html"
    },
    {
        modulo: "Módulo 2.4",
        titulo: "Financiación y Sostenibilidad",
        descripcion: "Modelo de autonomía para la Ciudad Universitaria, retención de equity en startups y monetización de patentes globales.",
        tag: "Sostenibilidad",
        icono: "fa-chart-line",
        colorBadge: "bg-amber-100 text-amber-800",
        colorIcono: "bg-amber-50 text-amber-600 group-hover:bg-amber-600",
        colorBoton: "text-amber-600 hover:text-amber-700",
        enlaceHtml: "modulo2-4.html"
    }
];

// --- FUNCIÓN AUXILIAR ---
export function obtenerRutaVer(rutaDescarga) {
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