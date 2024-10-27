window.addEventListener('load', () => {
    // Wait for the fade-out of the loading screen
    setTimeout(() => {
        // Hide the loading screen
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.display = 'none';

        // Show the homepage content after the loading screen fades out
        const homepage = document.getElementById('homepage');
        homepage.classList.remove('hidden');
        
        // Fade in the homepage content
        setTimeout(() => {
            homepage.style.opacity = 1;
        }, 100); // Slight delay to avoid jump
    }, 3000); // Time matches the delay of the loading screen fade out
});