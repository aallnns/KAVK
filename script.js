
        const buttons = document.querySelectorAll('.nav-button');
        function navigateToPage(event) {
            const page = event.target.getAttribute('data-page'); 
            window.location.href = `${page}.html`;
        }
        buttons.forEach(button => button.addEventListener('click', navigateToPage));
        function setActiveButton() {
            const currentPageUrl = window.location.href; 
            buttons.forEach(button => {
                const buttonPageUrl = button.getAttribute('data-page') + '.html';
                if (currentPageUrl.includes(buttonPageUrl)) {
                    button.classList.add('active'); 
                }
            });
        }
        let slideIndex = 0;
            showSlides();

            function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
            slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
        }
        // Викликаємо функцію при завантаженні сторінки
        window.addEventListener('load', setActiveButton);
