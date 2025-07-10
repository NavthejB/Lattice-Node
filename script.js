        // Mobile Menu Functions
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            mobileMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('mobile-menu-btn-close');
        }

        function closeMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.toggle('mobile-menu-btn-close');
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            
            if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                
                if(mobileMenu.classList.contains('active')){
                    mobileMenuBtn.classList.toggle('mobile-menu-btn-close');
                }
                mobileMenu.classList.remove('active');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Back to top functionality
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Add scroll effect to header
        const navLinks = document.querySelector('.nav-links');
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 0) {
                header.classList.remove('header-transparent');
                header.classList.add('header-opaque');
                navLinks.classList.remove('nav-links-no-scroll');
                navLinks.classList.add('nav-links-scroll');
            } else {
                header.classList.remove('header-opaque');
                header.classList.add('header-transparent');
                navLinks.classList.remove('nav-links-scroll');
                navLinks.classList.add('nav-links-no-scroll');
            }
        });

        // Add animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.use-case').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        });

        // Service card hover effects
        const serviceCard = document.querySelectorAll(".service-card")
        const serviceP = [document.getElementById('service-card-p0'), 
                            document.getElementById('service-card-p1'), 
                            document.getElementById('service-card-p2')]

        serviceCard.forEach(function(card, index){
            card.addEventListener('mouseover', () => {
                let serviceCardArray = [0, 1, 2];
                serviceCardArray.splice(index, 1);
                serviceCardArray.forEach(function(val) {
                    if (serviceP[val]) {
                        serviceP[val].style.display = 'none';
                    }
                })
            })
        })

        serviceCard.forEach(function(card, index){
            card.addEventListener('mouseout', () => {
                let serviceCardArray = [0, 1, 2];
                serviceCardArray.splice(index, 1);
                serviceCardArray.forEach(function(val) {
                    if (serviceP[val]) {
                        serviceP[val].style.display = 'block';
                    }
                })
            })
        })

        // Handle window resize to close mobile menu
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                const mobileMenu = document.getElementById('mobileMenu');
                mobileMenu.classList.remove('active');
            }
        });