document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.dataset.theme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
    });
    console.log(themeToggle)

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

//landing section time out

setTimeout(() => {
    document.getElementById('landing').classList.add('fade-out');
    setTimeout(() => {
        document.getElementById('landing').style.display = 'none';
        document.getElementById('home').style.opacity = "1";
        document.getElementById('home').style.pointerEvents = "auto";
    }, 500);
}, 1000);