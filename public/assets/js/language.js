document.addEventListener('DOMContentLoaded', function() {
    const languageSwitcher = document.querySelector('.language-switcher');

    // Function to set the language and redirect
    function setLanguage(lang) {
        localStorage.setItem('language', lang);
        redirectToLanguage(lang);
    }

    // Function to redirect to the correct language version
    function redirectToLanguage(lang) {
        const currentPage = window.location.pathname.split('/').pop();
        let newPage;

        switch (currentPage) {
            case 'index.html':
            case 'index_en.html':
            case 'index_de.html':
                newPage = `index_${lang}.html`;
                break;
            case 'about.html':
            case 'about_en.html':
            case 'about_de.html':
                newPage = `about_${lang}.html`;
                break;
            case 'offer.html':
            case 'offer_en.html':
            case 'offer_de.html':
                newPage = `offer_${lang}.html`;
                break;
            default:
                newPage = `index_${lang}.html`;
        }
        
        if (lang === 'pl') {
            if (currentPage.includes('_')) {
                newPage = currentPage.split('_')[0] + '.html';
            } else {
                newPage = currentPage;
            }
        }

        if (window.location.pathname.indexOf(newPage) === -1) {
            window.location.href = newPage;
        }
    }

    // Check for saved language on page load; default to German (de)
    const currentPage = window.location.pathname.split('/').pop();
    const savedLang = localStorage.getItem('language');
    
    // If no saved language, default to German (de)
    if (!savedLang) {
        if (/_en\.html$/i.test(currentPage)) {
            localStorage.setItem('language', 'en');
        } else if (/_de\.html$/i.test(currentPage)) {
            localStorage.setItem('language', 'de');
        } else if (currentPage === 'index.html' || !currentPage.includes('_')) {
            // Default to German for main pages
            localStorage.setItem('language', 'de');
            redirectToLanguage('de');
            return;
        } else {
            localStorage.setItem('language', 'pl');
        }
    } else {
        // If there's a saved language, redirect to it
        redirectToLanguage(savedLang);
    }

    // Add click listeners to language switcher links
    if (languageSwitcher) {
        const links = languageSwitcher.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const lang = this.getAttribute('href').split('_').pop().split('.').shift();
                
                if (this.getAttribute('href') === 'index.html') {
                    setLanguage('pl');
                } else if (lang === 'en' || lang === 'de') {
                    setLanguage(lang);
                }
            });
        });
    }
});