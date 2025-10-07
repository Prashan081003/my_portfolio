   // Generate stars
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = (Math.random() * 3 + 2) + 's';
            starsContainer.appendChild(star);
        }

        // Email Modal Functions
        function showEmailModal() {
            document.getElementById('emailModal').classList.add('show');
            document.getElementById('modalOverlay').classList.add('show');
        }

        function closeModal() {
            document.getElementById('emailModal').classList.remove('show');
            document.getElementById('modalOverlay').classList.remove('show');
        }

        function copyEmail() {
            const email = 'aryaprashan@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                const emailDiv = document.querySelector('.email-address');
                const originalText = emailDiv.textContent;
                emailDiv.textContent = '✓ Copied!';
                setTimeout(() => {
                    emailDiv.textContent = originalText;
                }, 2000);
            });
        }

        // Close modal when clicking overlay
        document.getElementById('modalOverlay').addEventListener('click', closeModal);

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });