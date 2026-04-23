const API_URL = "https://api.tvmaze.com/" 


fetchData("https://api.tvmaze.com/shows/")

async function fetchData(){
    try{
        const showName = document.getElementById("showname").value.toLowercase();
        const response = await fetch(`https://api.tvmaze.com/shows/${showName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource")
        }

        const data = await response.json();
        console.log(data);
    }

    catch(error){
        console.error(error);
    }
}