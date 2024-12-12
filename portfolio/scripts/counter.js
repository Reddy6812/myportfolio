const counterElement = document.getElementById('profile-view-counter');

// Fetch profile view count
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

    // Simulate updating the counter (requires backend in production)
    console.log(`New profile views: ${newViews}`);
}

// Initialize
fetchProfileViews();
