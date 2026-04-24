const API_URL = "https://api.tvmaze.com/" 

// PLEASE WRITE YOUR MOVIE REVIEW HERE IN THE FORMAT BELOW THANK YEW -B.Y.
const reviewers = [
  {
    movie: "Movie Name",
    review: "MOVIE REVIEW GOES HERE. This is a placeholder review. Please replace it with your actual review of the movie.",
    reviewer: "Movie Reviewer"
  },
  {
    movie: "Movie Name",
    review: "MOVIE REVIEW GOES HERE. This is a placeholder review. Please replace it with your actual review of the movie.",
    reviewer: "Movie Reviewer"
  },
  {
    movie: "Movie Name",
    review: "MOVIE REVIEW GOES HERE. This is a placeholder review. Please replace it with your actual review of the movie.",
    reviewer: "Movie Reviewer"
  }
  // Add more reviews as needed :) -B.Y.
];

fetchData("https://api.tvmaze.com/shows/")

async function fetchData(){
    try{
        const showName = document.getElementById("showname").value.toLowerCase();
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
