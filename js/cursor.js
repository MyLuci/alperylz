/* =============================================
   CUSTOM CURSOR - Alper Yıldız Portfolio
   Apply to all HTML pages
   ============================================= */

document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.custom-cursor');

    if (cursor) {
        let cursorInitialized = false;
        
        function updateCursorPosition(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }

        document.addEventListener('mousemove', (e) => {
            updateCursorPosition(e);
            
            // Show cursor on first movement
            if (!cursorInitialized) {
                cursorInitialized = true;
                cursor.style.display = 'block';
            }
        });

        // Add hover effects to interactive elements
        const hoverElements = document.querySelectorAll('a, button, .project-card, .nav-links li, input, textarea, select');
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });
    }
});
