document.addEventListener('DOMContentLoaded', function() {
    const studentInfo = document.getElementById('studentInfo');
    studentInfo.textContent = 'Student ID: 200556069 - Name: Jainam Thakkar';

    const apiKey = 'iUrbDfGNI14kHbdXXeTRtWlOhR6ARK98';  // Use your actual Giphy API key
    const tag = 'funny';  // Change this tag to whatever theme of GIFs you want to fetch
    const gifButton = document.getElementById('changeGifButton');
    const apiDataDiv = document.getElementById('apiData');
    const nameButton = document.getElementById('nameButton'); // Assuming there is a button in HTML for generating name

    // Function to fetch and display a new GIF
    function fetchAndDisplayGif() {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`;
        fetch(url)  
            .then(response => response.json())
            .then(data => {
                apiDataDiv.innerHTML = ''; // Clear previous GIF
                const img = new Image();
                img.src = data.data.images.original.url;
                img.alt = 'Giphy GIF';
                apiDataDiv.appendChild(img);
            })
            .catch(error => console.error('Error fetching data:', error));
    }


    // Event listeners
    gifButton.addEventListener('click', fetchAndDisplayGif);

    // Initial fetch to display a GIF when the page loads
    fetchAndDisplayGif();
    
});
