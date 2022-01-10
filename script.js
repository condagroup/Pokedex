
document.getElementById("search").addEventListener("click",()=>{
    document.getElementById("ImageOfPokemon").classList.add("object-cover")
    
    document.getElementById("ImageOfPokemon").src =  "https://thumbs.gfycat.com/DelectableRashAmazonparrot-size_restricted.gif"; 
    const nameOfThePokemon = document.getElementById("pokename").value.toLowerCase();
    getDataAndUpdate(nameOfThePokemon)
})

async function getDataAndUpdate(name) {
    
    
    try {
        const url = "https://pokeapi.co/api/v2/pokemon/"+name;
        const responce = await fetch(url)
        const data = await responce.json();
        
        
        const url1 = "https://pokeapi.co/api/v2/pokemon-species/"+name;
        const responce1 = await fetch(url1)
        const data1 = await responce1.json();
        
        await document.getElementById("ImageOfPokemon").classList.remove("object-cover")
        const flavor_text_entries = data1["flavor_text_entries"][0]["flavor_text"]
    
        const image = data["sprites"]["other"]["official-artwork"]["front_default"]
    
        document.getElementById("ImageOfPokemon").src =  await image;
        const text = `
        <h1 class="capitalize text-xl">${data["name"]}</h1>
        <h1 class="mt-4">HT:${data["height"]}</h1>
        <h1>WT:${data["weight"]}</h1>
        <p class="mt-4">${flavor_text_entries.replace("\f", "\n")}</p>
        `;
        document.getElementById("InfoText").innerHTML = text

    } catch (error) {
        const text1 = `
            <h1>Unknown...</h1>
            <h1>Enter a valid name</h1>
        `;
        document.getElementById("InfoText").innerHTML = text1
        
    }
}