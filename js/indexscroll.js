gsap.registerPlugin(ScrollTrigger);


gsap.to(".description", {
  y: -80,
  duration: 1,
  scrollTrigger: {
    trigger: ".description",
    start: "top 100%",
    end: "center 70%",
    scrub: 1,
    toggleActions: "restart pause resume reset",
    markers: false,
  }
})
gsap.to(".description-title", {
  y: -80,
  duration: .5,
  scrollTrigger: {
    trigger: ".description-title",
    start: "top 100%",
    end: "center 70%",
    scrub: .5,
    toggleActions: "restart pause resume reset",
    markers: false,
  }
})