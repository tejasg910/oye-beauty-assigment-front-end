// Add event listener to each page link

const pageLinks = document.querySelectorAll(".page-link");
window.onload = function () {
  getPagination(10, 1);
};
async function getPagination(size = 10, page = 1) {
  const data = await fetch(
    `http://localhost:5000/api/get-paginated?page=${page}&size=${size}`
  );

  const res = await data.json();

  const arr = res.data;

  const mainSection = document.getElementById("mainsection");

  mainSection.innerHTML = "";

  if (res.success && arr.length > 0) {
    arr.forEach((item) => {
      mainSection.innerHTML += `<div class="movie-box">

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
    });
  } else {
    mainSection.innerHTML = "<h3>No Data Found</h3>";
  }
}

pageLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    // Remove the active class from all links
    pageLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Add the active class to the clicked link
    this.classList.add("active");

    // Get the page number from the data-page attribute
    const page = this.dataset.page;

    // Do something with the page number, such as fetching new data from the server

    getPagination(10, page);
  });
});
