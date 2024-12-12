const counterElement = document.getElementById('profile-view-counter');

// Fetch the profile view count
async function fetchProfileViews() {
    try {
        const response = await fetch('../assets/counter.json');
        const data = await response.json();
        counterElement.innerText = data.views;
        incrementProfileViews(data.views);
    } catch (error) {
        console.error('Error fetching profile views:', error);
    }
}

// Increment the profile view count
async function incrementProfileViews(currentViews) {
    const newViews = currentViews + 1;
    counterElement.innerText = newViews;

    // Save the new count to the JSON file (simulated here, requires a backend in production)
    console.log(`New view count: ${newViews}`);
}

// Initialize the counter
fetchProfileViews();
