async function callingAPI(){
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        const characters = data.results;
        characters.forEach(character => {
            console.log(character.name);
        });
    } catch (error) {
        console.log(error);
    }
}

callingAPI();
