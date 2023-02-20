const title = document.getElementById("title").value;
const description = document.getElementById("description").value;

const comment = document.getElementById("comments").value;
const like = document.getElementById("likes").value;
const type = document.getElementById("type").value;
const form = document.querySelector("form");

const addMovie = async () => {
  const data = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    comments: document.getElementById("comments").value,
    likes: document.getElementById("likes").value,
    type: document.getElementById("type").value,
    actors: document.getElementById("actors").value,
    rating: document.getElementById("rating").value,
    director: document.getElementById("director").value,
    released: document.getElementById("released").value,
  };

  const res = await fetch("http://localhost:5000/api/add-movie", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await res.json();
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addMovie();
});
