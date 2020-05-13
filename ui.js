class UI {
  constructor() {
    this.toggler = document.querySelector(".toggle");
    this.nav = document.querySelector("nav");
  }

  navBarSlide() {
    const nav = document.querySelector("nav");
    const toggler = document.querySelector(".toggle");

    if (!nav.classList.contains("menu-slide-in")) {
      nav.classList.remove("menu-slide-out");
      nav.classList.add("menu-slide-in");
      toggler.classList.add("toggle-close");
    } else {
      nav.classList.remove("menu-slide-in");
      nav.classList.add("menu-slide-out");
      toggler.classList.remove("toggle-close");
    }
  }
  navBarClose() {
    const nav = document.querySelector("nav");
    const toggler = document.querySelector(".toggle");

    nav.classList.remove("menu-slide-in");
    nav.classList.add("menu-slide-out");
    toggler.classList.remove("toggle-close");
  }
  shakeLinkAdd(element) {
    element.classList.add("animate__heartBeat");
  }
  shakeLinkRemove(element) {
    element.classList.remove("animate__heartBeat");
  }
}

const ui = new UI();

export { ui };
