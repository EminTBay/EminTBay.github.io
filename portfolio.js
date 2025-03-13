// AOS Animasyon başlatma
AOS.init({
    duration: 1000,
    once: true
});

// Küre için teknolojileri oluştur
const technologies = [
    { name: 'HTML5', type: 'icon', class: 'fab fa-html5', color: '#e34f26' },
    { name: 'CSS3', type: 'icon', class: 'fab fa-css3-alt', color: '#264de4' },
    // ...diğer teknolojiler...
];

document.addEventListener('DOMContentLoaded', function() {
    // AOS başlat
    AOS.init({
        duration: 1000,
        once: true
    });

    // Küreyi oluştur
    createSphere();
});

function createSphere() {
    const sphere = document.querySelector('.sphere');
    const items = document.querySelectorAll('.tech-item');
    const radius = 300;
    const total = items.length;

    items.forEach((item, i) => {
        const phi = Math.acos(-1 + (2 * i) / total);
        const theta = Math.sqrt(total * Math.PI) * phi;

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        item.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    });
}

// Küçük küre için teknolojileri oluştur
function createSmallSphere() {
    const sphere = document.querySelector('.carousel-3d-small');
    const radius = 100; // Daha küçük yarıçap
    
    // Teknolojiler dizisini küçült
    const smallTechnologies = [
        { type: 'icon', class: 'fab fa-html5', color: '#e34f26' },
        { type: 'icon', class: 'fab fa-css3-alt', color: '#264de4' },
        { type: 'icon', class: 'fab fa-js', color: '#f7df1e' },
        { type: 'icon', class: 'fab fa-python' },
        { type: 'icon', class: 'fab fa-git-alt', color: '#F05032' },
        { type: 'icon', class: 'fab fa-linux', color: '#FCC624' },
        // Daha az teknoloji ekleyin
    ];

    smallTechnologies.forEach((tech, i) => {
        const phi = Math.acos(-1 + (2 * i) / smallTechnologies.length);
        const theta = Math.sqrt(smallTechnologies.length * Math.PI) * phi;

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        const item = document.createElement('div');
        item.className = 'carousel-item-small';

        if (tech.type === 'icon') {
            const icon = document.createElement('i');
            icon.className = tech.class;
            if (tech.color) icon.style.color = tech.color;
            item.appendChild(icon);
        }

        item.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        sphere.appendChild(item);
    });
}

// Sayfa yüklendiğinde küreyi oluştur
document.addEventListener('DOMContentLoaded', function() {
    createSphere();
    AOS.init({
        duration: 1000,
        once: true
    });
    createSmallSphere();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dil çevirileri
const translations = {
    tr: {
        // Menü
        home: 'Ana Sayfa',
        about: 'Hakkımda',
        skills: 'Teknolojiler', // Düzeltildi
        projects: 'Projeler',
        contact: 'İletişim',
        // Hero Section
        hello: 'Merhaba, Ben',
        role: 'Full Stack Geliştirici',
        description: 'Modern web teknolojileri ile kullanıcı dostu uygulamalar geliştiriyorum.',
        contactMe: 'İletişime Geç',
        // About Section
        aboutTitle: 'Hakkımda',
        aboutText: 'Yazılım dünyasına olan tutkum ve sürekli öğrenme isteğim ile modern web teknolojilerini kullanarak yaratıcı çözümler üretiyorum.',
        yearsExp: 'Yıl Deneyim',
        completedProjects: 'Tamamlanan Proje',
        happyClients: 'Mutlu Müşteri',
        // Skills Section
        skillsTitle: 'Teknolojiler',
        // Projects Section
        projectsTitle: 'Projeler',
        viewProject: 'Projeyi İncele',
        // Contact Section
        contactTitle: 'İletişim',
        name: 'Adınız',
        email: 'E-posta',
        message: 'Mesajınız',
        send: 'Gönder'
    },
    en: {
        // Menu
        home: 'Home',
        about: 'About',
        skills: 'Technologies', // Düzeltildi
        projects: 'Projects',
        contact: 'Contact',
        // Hero Section
        hello: 'Hello, I am',
        role: 'Full Stack Developer',
        description: 'I develop user-friendly applications using modern web technologies.',
        contactMe: 'Contact Me',
        // About Section
        aboutTitle: 'About Me',
        aboutText: 'With my passion for the software world and desire to learn continuously, I create creative solutions using modern web technologies.',
        yearsExp: 'Years Experience',
        completedProjects: 'Completed Projects',
        happyClients: 'Happy Clients',
        // Skills Section
        skillsTitle: 'Technologies',
        // Projects Section
        projectsTitle: 'Projects',
        viewProject: 'View Project',
        // Contact Section
        contactTitle: 'Contact',
        name: 'Your Name',
        email: 'Email',
        message: 'Message',
        send: 'Send'
    }
};

// Tema renkleri güncelleme
const themes = {
    dark: {
        '--primary': '#2ecc71',
        '--dark': '#1a1a1a',
        '--light': '#ffffff',
        '--gray': '#6c757d',
        '--bg': '#1a1a1a',
        '--text': '#ffffff',
        '--text-secondary': '#b3b3b3',
        '--nav-bg': 'rgba(26, 26, 26, 0.95)',
        '--card-bg': 'rgba(255, 255, 255, 0.05)',
        '--border': 'rgba(255, 255, 255, 0.1)',
        '--hover-bg': 'rgba(46, 204, 113, 0.1)'
    },
    light: {
        '--primary': '#27ae60',
        '--dark': '#2c3e50',
        '--light': '#ffffff',
        '--gray': '#95a5a6',
        '--bg': '#f8f9fa',
        '--text': '#2c3e50',
        '--text-secondary': '#636e72',
        '--nav-bg': 'rgba(255, 255, 255, 0.95)',
        '--card-bg': 'rgba(44, 62, 80, 0.05)',
        '--border': 'rgba(44, 62, 80, 0.1)',
        '--hover-bg': 'rgba(39, 174, 96, 0.1)'
    }
};

// Global değişken tanımlama
let currentLang = 'tr';
let currentTheme = 'dark';

// Tema değiştirme fonksiyonu
function changeTheme(theme) {
    currentTheme = theme;
    const root = document.documentElement;
    
    // CSS değişkenlerini güncelle
    Object.entries(themes[theme]).forEach(([property, value]) => {
        root.style.setProperty(property, value);
    });

    // Tema attribute'unu güncelle
    root.setAttribute('data-theme', theme);

    // Tema ikonunu güncelle
    const themeIcon = document.querySelector('#themeToggle i');
    themeIcon.classList.replace(
        theme === 'light' ? 'fa-moon' : 'fa-sun',
        theme === 'light' ? 'fa-sun' : 'fa-moon'
    );

    // Local storage'a kaydet
    localStorage.setItem('theme', theme);
    
    // Menü öğelerini güncelle
    updateNavbarElements(theme);
}

// Menü öğelerini güncelleme fonksiyonu
function updateNavbarElements(theme) {
    const navElements = {
        navbar: document.querySelector('.navbar'),
        links: document.querySelectorAll('.nav-link'),
        texts: document.querySelectorAll('.nav-text'),
        icons: document.querySelectorAll('.nav-link i'),
        brand: document.querySelector('.navbar-brand'),
        utilityBtns: document.querySelectorAll('.nav-utilities button'),
        collapse: document.querySelector('.navbar-collapse')
    };

    const colors = themes[theme];
    
    if (navElements.collapse) {
        navElements.collapse.style.background = theme === 'light' ? 
            'rgba(255, 255, 255, 0.98)' : 
            'rgba(26, 26, 26, 0.98)';
    }

    navElements.links.forEach(link => {
        link.style.color = colors['--text'];
    });

    navElements.utilityBtns.forEach(btn => {
        btn.style.color = colors['--text'];
    });
}

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    currentLang = lang;
    document.getElementById('currentLang').textContent = lang.toUpperCase();
    
    // Tüm çevirilebilir elementleri güncelle
    document.querySelectorAll('[data-tr]').forEach(element => {
        const key = element.getAttribute('data-tr');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Meta içerikleri güncelle
    document.querySelectorAll('[data-tr-content]').forEach(element => {
        const key = element.getAttribute('data-tr-content');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Buton ve form elementlerini güncelle
    document.querySelectorAll('[data-tr-value]').forEach(element => {
        const key = element.getAttribute('data-tr-value');
        if (translations[lang][key]) {
            element.value = translations[lang][key];
        }
    });

    // Local storage'a kaydet
    localStorage.setItem('language', lang);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Local storage'dan tema ve dil tercihi al
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedLang = localStorage.getItem('language') || 'tr';
    
    // Varsayılan tema ve dil ayarı
    changeTheme(savedTheme);
    changeLanguage(savedLang);
    
    // AOS başlatma
    AOS.init({
        duration: 1000,
        once: true
    });

    // Tema değiştirme butonu
    document.getElementById('themeToggle').addEventListener('click', () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        changeTheme(newTheme);
    });

    // Dil değiştirme butonu
    document.getElementById('languageToggle').addEventListener('click', () => {
        const newLang = currentLang === 'tr' ? 'en' : 'tr';
        changeLanguage(newLang);
    });
});

// Aktif menü takibi
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Scroll spy için
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});