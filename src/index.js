import "./styles.css";
import gsap, { Power4 } from "gsap";

// COLOR PALETTE
const palette = [
  "#f2d074",
  "#e76051",
  "#6ebe90",
  "#64cac5",
  "#f6a052",
  "#f8c6c6"
];

// SELECTORS
const background = document.querySelector(".nav-left");
const links = document.querySelectorAll(".nav-link");
const contentImg = document.querySelectorAll(".content-img");
const rightBackground = document.querySelector(".nav-right");
const header = document.querySelector("header");
const trigger = document.querySelector(".trigger");

// ANIMATION ON TRIGGER (OPEN & CLOSE)
let isActive = false;

const tl = gsap.timeline({ paused: true });
tl.from(header, {
  duration: 0.5,
  y: "-100%",
  ease: Power4.easeInOut
})
  .from(links, {
    // delay: 0.5,
    y: 105,
    stagger: 0.05
  })
  .from(
    rightBackground,
    {
      opacity: 0
    },
    0.5
  );

trigger.addEventListener("click", () => {
  if (!isActive) {
    tl.play();
    trigger.style.rotate = "45deg";
    trigger.style = "border-color: white";
    isActive = true;
  } else {
    tl.reverse();
    trigger.style.rotate = "0deg";
    trigger.style = "border-color: black";
    isActive = false;
  }
});

//  LINKS ANIMATION and COLOR SWITCH
links.forEach((link, index) => {
  link.addEventListener("mouseover", () => {
    header.style.backgroundColor = palette[index];
    gsap.to(background, {
      duration: 0.35,
      background: palette[index]
    });

    gsap.to(contentImg[index], {
      duration: 0.35,
      opacity: 1
    });

    contentImg.forEach((img, ind) => {
      if (ind !== index) {
        gsap.to(img, {
          opacity: 0
        });
      }
    });
  });
});
