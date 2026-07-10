document.addEventListener("DOMContentLoaded", async function () {
    const apiUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
        ? 'http://localhost:5003/v1/content' 
        : 'https://api.csqna.com/v1/content';

    try {
        // Fetch content from backend API for all pages
        const response = await fetch(apiUrl);
        const result = await response.json();

        if (result.status && result.data) {
            const contentData = result.data;

            // Find all elements with data-content-key attribute
            const dynamicElements = document.querySelectorAll('[data-content-key]');
            
            dynamicElements.forEach(el => {
                const key = el.getAttribute('data-content-key');
                if (contentData[key]) {
                    // Replace content. Using innerHTML allows formatting (e.g. bold tags)
                    el.innerHTML = contentData[key];
                }
            });
        }
    } catch (error) {
        console.error("Failed to load dynamic CMS content", error);
    }
});
