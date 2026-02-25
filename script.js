document.addEventListener('DOMContentLoaded', () => {
    // ---- Language Toggle Logic ----
    const langToggleBtn = document.getElementById('lang-toggle');
    const currentLangText = langToggleBtn.querySelector('.current-lang');
    let isGujarati = false;

    langToggleBtn.addEventListener('click', () => {
        isGujarati = !isGujarati;
        
        if (isGujarati) {
            document.body.classList.add('locale-gu-active');
            currentLangText.textContent = 'GU';
        } else {
            document.body.classList.remove('locale-gu-active');
            currentLangText.textContent = 'EN';
        }
    });

    // ---- Sticky Navbar ----
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 14, 0.9)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(19, 19, 26, 0.6)';
            navbar.style.boxShadow = 'none';
        }
    });

    // ---- Scroll Reveal Animation ----
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    };

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => observer.observe(el));

    // ---- Smooth Scrolling for Anchors ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                window.scrollTo({
                    top: targetElement.offsetTop - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});
