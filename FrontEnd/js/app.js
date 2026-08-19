const eventDate = new Date('2026-11-13T00:00:00-08:00').getTime();
const countdownElements = {
    days: document.getElementById('countdown-days'),
    hours: document.getElementById('countdown-hours'),
    minutes: document.getElementById('countdown-minutes'),
    seconds: document.getElementById('countdown-seconds'),
};

const formatNumber = (number) => String(number).padStart(2, '0');

const updateCountdown = () => {
    const distance = Math.max(eventDate - Date.now(), 0);
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    countdownElements.days.textContent = days;
    countdownElements.hours.textContent = formatNumber(hours);
    countdownElements.minutes.textContent = formatNumber(minutes);
    countdownElements.seconds.textContent = formatNumber(seconds);
};

updateCountdown();
setInterval(updateCountdown, 1000);

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const siteNav = document.getElementById('site-nav');

const updateNavbarBackground = () => {
    const mobileMenuIsOpen = !mobileMenu.classList.contains('hidden');
    const hasSolidBackground = window.scrollY > 10 || mobileMenuIsOpen;

    siteNav.classList.toggle('bg-transparent', !hasSolidBackground);
    siteNav.classList.toggle('bg-navy-500', hasSolidBackground);
};

const setMobileMenuState = (isOpen) => {
    mobileMenu.classList.toggle('hidden', !isOpen);
    mobileMenuButton.setAttribute('aria-expanded', String(isOpen));
    mobileMenuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    mobileMenuIcon.className = isOpen ? 'ri-close-line' : 'ri-menu-line';
    updateNavbarBackground();
};

mobileMenuButton.addEventListener('click', () => {
    setMobileMenuState(mobileMenu.classList.contains('hidden'));
});

const getScrollTargetTop = (target) => {
    const navHeight = siteNav.offsetHeight;
    const targetTop = target.getBoundingClientRect().top + window.scrollY;

    return Math.max(targetTop - navHeight - 12, 0);
};

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        if (!mobileMenu.classList.contains('hidden')) {
            setMobileMenuState(false);
        }

        window.requestAnimationFrame(() => {
            window.scrollTo({
                top: getScrollTargetTop(target),
                behavior: 'smooth',
            });

            window.history.pushState(null, '', targetId);
        });
    });
});

updateNavbarBackground();
window.addEventListener('scroll', updateNavbarBackground);
