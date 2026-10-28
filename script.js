
  const track = document.getElementById("carouselTrack");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  let currentIndex = 0;

  function getVisibleCards() {
    if (window.innerWidth <= 500) return 1;
    if (window.innerWidth <= 900) return 2;
    return 4;
  }

  function moveCarousel() {
    const cards = track.querySelectorAll(".product-card");
    if (!cards.length) return;

    const visibleCards = getVisibleCards();
    const maxIndex = Math.max(0, cards.length - visibleCards);

    currentIndex = Math.min(currentIndex, maxIndex);

    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;

    track.style.transform =
      `translateX(-${currentIndex * (cardWidth + gap)}px)`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === maxIndex;
  }

  nextBtn.addEventListener("click", () => {
    const maxIndex = Math.max(
      0,
      track.children.length - getVisibleCards()
    );

    if (currentIndex < maxIndex) {
      currentIndex++;
      moveCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      moveCarousel();
    }
  });

  window.addEventListener("resize", moveCarousel);

  moveCarousel();


      const videoTrack = document.getElementById("videoTrack");
    const videoPrev = document.getElementById("videoPrev");
    const videoNext = document.getElementById("videoNext");

    let videoIndex = 0;

    function getVisibleVideos() {
        if (window.innerWidth <= 500) return 1;
        if (window.innerWidth <= 900) return 2;
        return 4;
    }

    function updateVideoCarousel() {
        const cards = videoTrack.querySelectorAll(".video-card");
        if (!cards.length) return;

        const maxIndex = Math.max(
            0,
            cards.length - getVisibleVideos()
        );

        videoIndex = Math.min(videoIndex, maxIndex);

        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(videoTrack).gap) || 0;

        videoTrack.style.transform =
            `translateX(-${videoIndex * (cardWidth + gap)}px)`;

        videoPrev.disabled = videoIndex === 0;
        videoNext.disabled = videoIndex === maxIndex;
    }

    videoNext.addEventListener("click", () => {
        const maxIndex = Math.max(
            0,
            videoTrack.children.length - getVisibleVideos()
        );

        if (videoIndex < maxIndex) {
            videoIndex++;
            updateVideoCarousel();
        }
    });

    videoPrev.addEventListener("click", () => {
        if (videoIndex > 0) {
            videoIndex--;
            updateVideoCarousel();
        }
    });

    window.addEventListener("resize", updateVideoCarousel);

    updateVideoCarousel();

 const hotspots = document.querySelectorAll('.hotspot');

hotspots.forEach(spot => {
  const dot = spot.querySelector('.dot');

  dot.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = spot.classList.contains('active');

    // pehle sab band karo
    hotspots.forEach(s => s.classList.remove('active'));

    // agar pehle se open nahi tha to ab kholo
    if (!isOpen) spot.classList.add('active');
  });
});

// bahar click karne par sab band
document.addEventListener('click', () => {
  hotspots.forEach(s => s.classList.remove('active'));
});    

// const scrollArrow = document.getElementById("scrollArrow");


// scrollArrow.addEventListener("click", function () {

//     if (window.scrollY < document.documentElement.scrollHeight - window.innerHeight - 50) {

//         // Go to bottom
//         window.scrollTo({
//             top: document.documentElement.scrollHeight,
//             behavior: "smooth"
//         });

//     } else {

//         // Go to top
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         });

//     }

// });

const scrollArrow = document.getElementById("scrollArrow");

function isAtBottom() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  return scrollTop >= maxScroll - 50;
}

function updateArrow() {
  scrollArrow.classList.toggle("up", isAtBottom());
}

scrollArrow.addEventListener("click", function () {
  if (isAtBottom()) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  }
});

window.addEventListener("scroll", updateArrow);
window.addEventListener("resize", updateArrow);
updateArrow();


const beanHotspots = document.querySelectorAll(
  ".bean-feature-visual .hotspot"
);

const viewedBeanSpots = new Set();

beanHotspots.forEach((spot, index) => {
  spot.addEventListener("mouseenter", () => {
    viewedBeanSpots.add(index);
    spot.querySelector(".pin").style.background = "#10b981";

    if (viewedBeanSpots.size === beanHotspots.length) {
      console.log("Product tour complete!");
    }
  });
});
