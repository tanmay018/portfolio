let intro = document.querySelector(".intro");
let logo = document.querySelector(".load-head");
let logoSpan = document.querySelectorAll(".logo");
let circle = document.querySelector("#circleMouse");
var tl = gsap.timeline();

const scroll = new LocomotiveScroll({
  //locomotive code
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  multiplier: 0.3,
});

window.addEventListener("mousemove", function (details) {
  //mouse circle move
  let xValue = details.pageX;
  let yValue = details.pageY;

  setTimeout(function () {
    circle.style.top = yValue + "px";
    circle.style.left = xValue + "px";
  }, 100);
});


window.addEventListener("DOMContentLoaded", function () {
  //loading screen code
  setTimeout(function () {
    logoSpan.forEach(function (span, index) {
      setTimeout(function () {
        span.classList.add("active");
      }, (index + 1) * 400);
    });
    setTimeout(function () {
      logoSpan.forEach(function (span, index) {
        setTimeout(function () {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (index + 1) * 50);
      });
    }, 2000);

    setTimeout(function () {
      //function runs after loading
      intro.style.top = "-100vh";

      $(".tlt").textillate("start");

      tl.from("#logo", {
        duration: 2,
        ease: "Expo.easeInOut",
        opacity: 0,
        y: -10,
      })
        .from(
          "#text-move",
          {
            duration: 2,
            ease: "Expo.easeInOut",
            opacity: 0,
            y: -10,
          },
          "-=1"
        )
        .from(
          "#proj",
          {
            duration: 2,
            ease: "Expo.easeInOut",
            opacity: 0,
            y: -10,
          },
          "-=1.5"
        )
        .from(
          "#abt",
          {
            duration: 2,
            ease: "Expo.easeInOut",
            opacity: 0,
            y: -10,
          },
          "-=1.5"
        )
        .from(
          "#scroll",
          {
            duration: 2,
            ease: "Expo.easeInOut",
            opacity: 0,
            x: 10,
          },
          "-=2"
        );
    }, 2500);
  });
});

let imageItems = [...document.querySelectorAll(".img-wrap")];                    //my work code
let titles = [...document.querySelectorAll("h2")];

let options = {
  rootMargin: "0px",
  threshold: 0.2,
};

let setItemActive = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
};

let observer = new IntersectionObserver(setItemActive, options);

imageItems.forEach((item, index) => {
  item.children[0].style.backgroundImage = `url(./img/${index + 1}.png)`;
  if (index % 2 == 0) {
    item.style.left = "55%";
    
  } else {
    item.style.left = "5%";
  }
  observer.observe(item);
});

titles.forEach((title, index) => {
  if (index % 2 == 0) {
    title.style.left = "52%";
    $(".proj").textillate("start");
  } else {
    title.style.left = "7%";
    $(".proj").textillate("start");
  }
  observer.observe(title);
});

$(".tlt").textillate({
  //textilate code
  autoStart: false,
  in: {
    effect: "fadeInUp",
  },
  loop: true,
  out: {
    effect: "fadeOutRight",
  },
});

$(".proj").textillate({
  //textilate code
  autoStart: false,
  in: {
    effect: "fadeInUp",
  },
  loop: true,
  out: {
    effect: "fadeOutRight",
  },
});

