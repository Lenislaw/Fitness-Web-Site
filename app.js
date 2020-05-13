import { ui } from "./ui.js";

let navBarLinks = document.querySelectorAll("nav ul li");
let socialLinks = document.querySelectorAll(".social-icon");

const appCtrl = () => {
  // Add Event Listener to hamburger
  document
    .getElementById("hamburger-toggler")
    .addEventListener("click", ui.navBarSlide);
  // Add Event Listener to navbar links
  navBarLinks = Array.from(navBarLinks);
  navBarLinks.forEach((el) => {
    el.addEventListener("click", ui.navBarClose);
  });
  // Add Event Listener to social links
  socialLinks = Array.from(socialLinks);
  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
      const element = e.target;
      ui.shakeLinkAdd(element);
    });
  });
  socialLinks.forEach((link) => {
    link.addEventListener("mouseleave", (e) => {
      const element = e.target;
      ui.shakeLinkRemove(element);
    });
  });
};

appCtrl();
