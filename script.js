// Function to make text appear when a dinosaur is clicked
function roar() {
    document.getElementById("message").innerText = "ROOOOOAAAR! The space dino says hi! 🌌🦖";
}

// Function to blast a rocket when the button is clicked
function launch() {
    document.getElementById("message").innerText = "3... 2... 1... BLAST OFF! 🚀✨";
    
    // Create a new rocket emoji
    let rocket = document.createElement("div");
    rocket.innerText = "🚀";
    
    // Set up where the rocket starts (at the bottom)
    rocket.style.position = "absolute";
    rocket.style.bottom = "-50px";
    
    // Pick a random spot horizontally on the screen
    rocket.style.left = Math.random() * (window.innerWidth - 50) + "px";
    rocket.style.fontSize = "50px";
    rocket.style.transition = "bottom 2s ease-in"; // 2-second flight time
    
    // Add it to the page
    document.body.appendChild(rocket);
    
    // Tell it to fly up!
    setTimeout(() => {
        rocket.style.bottom = "120%";
    }, 50);
    
    // Clean up the rocket after it flies off screen so the webpage doesn't get cluttered
    setTimeout(() => {
        rocket.remove();
    }, 2000);
}
