document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        const imageContainer = document.querySelector('.image-container');
        imageContainer.style.display = 'none';
    });

    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(tab => tab.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});
