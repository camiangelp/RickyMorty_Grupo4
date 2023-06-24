async function callingAPI(){
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }
}

const buildCard = (character) => {
    const tempElement = document.createElement("div")
    const htmlCard = `<li>
                        <img src="${character.image}"/>
                        <h2>${character.name} </h2>
                        <p> ${character.species}</p>
                    </li>`

    tempElement.innerHTML = htmlCard
    const [renderedCard] = tempElement.children
    return renderedCard
}



async function printCharacters(characters){
    const list = document.querySelector(".cardsList")
    const cards = characters.map(buildCard)

    cards.forEach(card => {
        list.append(card)
    });
}


// -----------------Funcion que se autollama(Se crea y se ejecuta ahi mismo)---------------
(async () => {
    const characters = await callingAPI();
    printCharacters(characters)
})()