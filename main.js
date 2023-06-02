// Get Slider Items | Array.from [ES6 Feature]
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

let slidesCount = sliderImages.length;

let currentSlide = 1;

let slideNumberElement = document.getElementById("slide-number");

let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// creating pagination
let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

for (let i = 1; i <= slidesCount; i++) {
  let paginationItem = document.createElement("li");

  paginationItem.setAttribute("data-index", i);

  //   paginationItem.appendChild(document.createTextNode(i));
  paginationItem.innerText = i;

  paginationElement.appendChild(paginationItem);
}

document.getElementById("indicators").appendChild(paginationElement);

// Get The New Created UL & LI
let createdPaginationUl = document.getElementById("pagination-ul");
let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// Loop Through All Bullet Items

paginationBullets.forEach(function (bullet) {
  bullet.addEventListener("click", function () {
    currentSlide = parseInt(this.getAttribute("data-index"));

    theChecker();
  });
});

/*
for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));

    theChecker();
  };
}
*/

// Trigger The Checker Function
theChecker();

function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

function theChecker() {
  slideNumberElement.innerText = `slide # ${currentSlide} of ${slidesCount}`;

  removeAllActive();

  sliderImages[currentSlide - 1].classList.add("active");

  createdPaginationUl.children[currentSlide - 1].classList.add("active");

  currentSlide == 1
    ? prevButton.classList.add("disabled")
    : prevButton.classList.remove("disabled");

  currentSlide == slidesCount
    ? nextButton.classList.add("disabled")
    : nextButton.classList.remove("disabled");
}

// Remove All Active Classes From Images and Pagination Bullets

function removeAllActive() {
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });

  paginationBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
