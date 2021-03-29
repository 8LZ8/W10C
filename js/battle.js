var chosenPokemonName = Cookies.get("chosenPokemonName");
if (chosenPokemonName !== undefined) {
    Cookies.set("userPokemonSelection", chosenPokemonName);
    Cookies.set("userMaxHealth", 100);
    Cookies.set("userCurrentHealth", 100);

    Cookies.set("computerPokemonSelection", "Geodude");
    Cookies.set("computerMaxHealth", 100);
    Cookies.set("computerCurrentHealth", 100);
    Cookies.remove("chosenPokemonName");
}


