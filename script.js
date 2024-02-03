const factButton =document.getElementById("Mainbutton")
factButton.onclick = async()=>{
    console.log("started");
    const factObj = await getFacts()
    console.log(factObj);
    await factSetter(factObj);
}

const getFacts = ()=>{
    return new Promise(async(resolve, reject) => {
        const factGetter = await fetch("https://animechan.xyz/api/random")
        resolve(factGetter.json());
      });
}
const factSetter = async(factObj)=>{
    const factText = document.getElementById("fact-text");
    const animeText = document.getElementById("sub-header");
    factText.textContent = factObj.quote
    animeText.textContent = factObj.anime 
    return 1
}
fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error)); 