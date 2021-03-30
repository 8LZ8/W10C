// Collaborated with Ramy and also referred back to assignments and demos; used examples that were given.
// Created a function that redraws the battle.html page from the information set in the cookies which gets triggered when called.
function redraw() {
    // Updates the elements on the page from the cookies that have been set.
    document.getElementById("choosenPokemonName").textContent = Cookies.get("userPokemonSelection");
    document.getElementById("health").textContent = `Health ${Cookies.get("userCurrentHealth")}`;
    document.getElementById("enemyHealth").textContent = `Health ${Cookies.get("computerCurrentHealth")}`;
    
    // Update the chosen pokemon image.
    if (Cookies.get("userPokemonSelection") === "Bulbasaur" ) {
        document.getElementById("clickedPokemon").setAttribute("src", "img/bulbasaur.png");
        document.getElementById("clickedPokemon").setAttribute("alt", "Bulbasaur");
    } else if (Cookies.get("userPokemonSelection") === "Charmander" ) {
        document.getElementById("clickedPokemon").setAttribute("src", "img/charmander.png");
        document.getElementById("clickedPokemon").setAttribute("alt", "Charmander");
    } else if (Cookies.get("userPokemonSelection") === "Squirtle" ) {
        document.getElementById("clickedPokemon").setAttribute("src", "img/squirtle.png");
        document.getElementById("clickedPokemon").setAttribute("alt", "Squirtle");
    }    

    // Displays text for the winner or loser.
    if (Cookies.get("computerCurrentHealth") <= 0) {
        document.getElementById("victoryText").innerHTML = "You won!";
        document.getElementById("victoryText").classList.remove("invisible");
    } else if (Cookies.get("userCurrentHealth") <= 0) {
        document.getElementById("victoryText").innerHTML = "You lost!";
        document.getElementById("victoryText").classList.remove("invisible");
    }
}

// Created a function (attack) that modifies both players health cookies. It is triggered when the user clicks on attack (onclick).
function attack() {
    // If the user or the computer is at 0 health or less than both parties cannot attack.
    if (Cookies.get("computerCurrentHealth") <= 0 || Cookies.get("userCurrentHealth") <= 0) {
        return;
    }
    
    // User attacks and lowers the computers health.
    var computerHealth = Cookies.get("computerCurrentHealth") - 8;
    Cookies.set("computerCurrentHealth", computerHealth);

    // Computer attacks and lowers the user's health. The computer can only attack if it is not at 0.
    if (computerHealth > 0) {
        var health = Cookies.get("userCurrentHealth") - 5;
        Cookies.set("userCurrentHealth", health);
    }

    // Call upon redraw; updates the screen because the health cookies have been changed.
    redraw();
}

// Once the page is loaded the following code is ran.
// Get a chosenPokemonName from the cookie.
var chosenPokemonName = Cookies.get("chosenPokemonName");
// If statement runs once a pokemon is chosen.
if (chosenPokemonName !== undefined) {
    // Cookies are set for the new pokemon choice.
    Cookies.set("userPokemonSelection", chosenPokemonName);
    Cookies.set("userMaxHealth", 100);
    Cookies.set("userCurrentHealth", 100);
    // Cookies are set for the enemy pokemon.
    Cookies.set("computerPokemonSelection", "Geodude");
    Cookies.set("computerMaxHealth", 100);
    Cookies.set("computerCurrentHealth", 100);
    // A Cookie is removed once a pokemon is chosen so that we know the user has not selected a new pokemon.
    Cookies.remove("chosenPokemonName");
}
// Call upon redraw to update the screen.
redraw();
