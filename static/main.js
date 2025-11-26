// Mobile hamburger menu 
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

// Carousel with arrow 
const carouselImages = [
 "/static/images/tom-photo.jpeg",
  "/static/images/ferit1.jpeg",
  "/static/images/ferit2.jpeg"
];

let currentIndex = 0;
const imageElement = document.getElementById("carouselImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Efekt i animuar kur ndërron foto
function updateImage(index) {
  imageElement.classList.remove("fade-in");
  void imageElement.offsetWidth; 
  imageElement.src = carouselImages[index];
  imageElement.classList.add("fade-in");
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  updateImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  updateImage(currentIndex);
});

//Button navigation
 document.getElementById("scrollToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
 
  const btn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
    }
  });

  btn.style.display = "none";

  //Quote and location animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  });

  document.querySelectorAll('.scroll-left, .scroll-bottom').forEach(el => {
    observer.observe(el);
  });





