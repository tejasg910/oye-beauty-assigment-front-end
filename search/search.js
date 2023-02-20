const search = document.getElementById("search");
const form = document.querySelector("form");
const mainSection = document.getElementById("mainsection");
async function getData() {
  const input = document.getElementById("id").value;
  const data = await fetch(`http://localhost:5000/api/get-single?id=${input}`);

  const res = await data.json();

  const item = res.data;

  if (res.success === true) {
    mainSection.innerHTML = `<div class="movie-box">

                <div class="content">
                    <h3 class="title">${item.title}</h3>
                    <div class="gener">
                        <p class="movie-type">${item.type}</p>
                        <p><span><i class="fa-regular fa-heart"></i>${item.likes}</span><span><i
                                    class="fa-regular fa-comment"></i>${item.comments}</span></p>

                    </div>
                    <div class="description">
                        <p>${item.description}
                        </p>
                    </div>
                    <div class="director">
                        <p>Director: ${item.director}
                        </p>
                    </div>
                    <div class="actors">
                        <p>Actor: ${item.actors}
                        </p>
                    </div>
                    <div class="rating">
                        <p>Rating: ${item.rating}
                        </p>
                    </div>
                    <div class="released">
                        <p>Released: ${item.released}
                        </p>
                    </div>
                    <div class="watch-btn">
                        <button>Watch Now</button>
                    </div>

                </div>
            </div>`;
  } else {
    console.log("something went wrong ");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getData();
});
