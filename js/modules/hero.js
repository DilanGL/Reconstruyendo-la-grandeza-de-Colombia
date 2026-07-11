// --- CONFIGURACIÓN DE RUTAS MULTIMEDIA HERO ---
const videoPath = "https://lh3.googleusercontent.com/d/1fDnezTwzmC2FRfkFpgq-q4WjAJXjhUOE=m22"; 
const imagePath = "https://lh3.googleusercontent.com/d/1Jh0CsZD9LDNPKhhmqVJndMGNRInKwAi3"; 

export function initHeroMedia() {
    const video = document.getElementById('hero-video');
    const image = document.getElementById('hero-img');
    
    if (!video || !image) return;

    image.src = imagePath;
    if (videoPath && videoPath !== "") {
        video.src = videoPath;
        video.load();
    }
    switchMedia('img');
}

export function switchMedia(type) {
    const imgElement = document.getElementById('hero-img');
    const videoWrapper = document.getElementById('hero-video-wrapper');
    const btnImg = document.getElementById('btn-show-img');
    const btnVideo = document.getElementById('btn-show-video');
    const caption = document.getElementById('media-caption');

    if (!imgElement || !videoWrapper || !btnImg || !btnVideo || !caption) return;

    if (type === 'img') {
        imgElement.classList.remove('hidden');
        videoWrapper.classList.add('hidden');
        btnImg.className = "px-3 py-1.5 text-xs font-bold rounded-lg transition-all bg-blue-600 text-white";
        btnVideo.className = "px-3 py-1.5 text-xs font-bold rounded-lg transition-all text-slate-400 hover:text-white";
        caption.textContent = "Mostrando imagen oficial del proyecto";
        
        const iframe = document.getElementById('hero-youtube');
        if (iframe) {
            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
    } else if (type === 'video') {
        imgElement.classList.add('hidden');
        videoWrapper.classList.remove('hidden');
        btnImg.className = "px-3 py-1.5 text-xs font-bold rounded-lg transition-all text-slate-400 hover:text-white";
        btnVideo.className = "px-3 py-1.5 text-xs font-bold rounded-lg transition-all bg-blue-600 text-white";
        caption.textContent = "Reproduciendo presentación oficial desde YouTube";
    }
}