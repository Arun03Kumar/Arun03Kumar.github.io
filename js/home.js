let tween = gsap
  .to(".moving-text", {
    xPercent: -100,
    repeat: -1,
    duration: 8,
    ease: "linear",
  })
  .totalProgress(0.5);

gsap.set(".moving-name", { xPercent: -50 });

gsap.to(".moving-name", {
  scrollTrigger: {
    trigger: document.documentElement,
    scrub: 1,
    start: 0,
    end: window.innerHeight,
    onUpdate: (e) => (direction = e.direction * -1),
  },
  x: "-400px",
});

let imgContainer = document.querySelector(".img-container");
let imgContainerImg = document.querySelector(".img-container-img");
let sliderContainer = document.querySelector(".slider-container");
sliderContainer.addEventListener("mouseenter", (e) => {
  imgContainer.style.display = "block";
  imgContainerImg.style.display = "block";
  document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    imgContainer.style.left = x + 10 + "px";
    imgContainer.style.top = y + "px";
  });
});

sliderContainer.addEventListener("mouseout", (e) => {
  imgContainer.style.display = "none";
  imgContainerImg.style.display = "none";
  document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    imgContainer.style.left = x + 10 + "px";
    imgContainer.style.top = y + "px";
  });
});
