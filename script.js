function roar() {
    document.getElementById("message").innerText = "ROOOOOAAAR! The space dino says hi! 🌌🦖";
}

function launch() {
    document.getElementById("message").innerText = "3... 2... 1... BLAST OFF! 🚀✨";
    
    let rocket = document.createElement("div");
    rocket.innerText = "🚀";
    rocket.style.position = "absolute";
    
    // ADJUSTED: Rocket starts above the planet ground (which is 150px high)
    rocket.style.bottom = "150px"; 
    
    rocket.style.left = Math.random() * (window.innerWidth - 50) + "px";
    rocket.style.fontSize = "50px";
    rocket.style.transition = "bottom 2s ease-in";
    
    document.body.appendChild(rocket);
    
    // Launch it!
    setTimeout(() => {
        rocket.style.bottom = "120%";
    }, 50);
    
    // Clean up
    setTimeout(() => {
        rocket.remove();
    }, 2000);
}
    // Clean up the rocket after it flies off screen so the webpage doesn't get cluttered
    setTimeout(() => {
        rocket.remove();
    }, 2000);
}
