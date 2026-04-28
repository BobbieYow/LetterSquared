const API_URL = "https://api.tvmaze.com/" 

// PLEASE WRITE YOUR MOVIE REVIEW HERE IN THE FORMAT BELOW THANK YEW -B.Y.
const reviewers = [
  {
    movie: "The Princess Bride",
    review: "Sword fights, true love, revenge, and rodents of unusual size all coexist in a story that somehow feels both like a parody and the real thing at once. Its my favorite movie of all time and I own it on VHS.",
    reviewer: "Bobbie Y."
  },
  {
    movie: "How to Train Your Dragon",
    review: "This movie remains one of Dreamwork’s most stellar films. From the voice acting, to animation, and the themes of ignorance, understanding, and trust - all of these aspects soar to amazing heights in How to Train Your Dragon.",
    reviewer: "Dawson Chiu"
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
  },
  {
    movie: "Movie Name",
    review: "MOVIE REVIEW GOES HERE. This is a placeholder review. Please replace it with your actual review of the movie.",
    reviewer: "Movie Reviewer"
  },
  {
    movie: "Project Hail Mary",
    review: "- Fantastic movie 10 out of 10 would watch again, also I have heard the movie did a great job of remaining true to the book. I think this is something that is going to make people really excited about space and that’s a beautiful thing! I got to see it in IMAX and the visuals were stunning and I don’t think I’ll ever get over it.",
    reviewer: "Katelynn Shelton"
  },
  {
    movie: "Bring Her Back",
    review: "- The SADDEST horror film of all time possibly, oh my god.",
    reviewer: "Katelynn's friend Ellie"
  },

  // Add more reviews as needed :) -B.Y.
];

fetchData("https://api.tvmaze.com/shows/")

async function fetchData(){
    try{
        const showName = document.getElementById("searchInput").value.toLowerCase();
        const response = await fetch(`https://api.tvmaze.com/shows/${searchInput}`);

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
