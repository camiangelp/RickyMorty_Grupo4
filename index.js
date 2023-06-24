async function callingAPI(){
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        console.log(data);
        const characters = data.results;
        characters.forEach(character => {
        });
    } catch (error) {
        console.log(error);
    }
}

document.querySelector(".button").addEventListener('click', callingAPI);
