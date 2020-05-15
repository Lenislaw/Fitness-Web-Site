// UI Controller

const UICtrl = (function () {
  // Declare UISelectors in object
  const UISelectors = {
    home: "home",
    nav: "nav",
    navBarLinks: "nav ul li",
    sideNavToggle: ".toggle",
    navBarLinkGroupTraning: "group",
    navBarLinkPersnoalTraining: "personal",
    // navBarLinkJoinUs: "join-us",
    navBarLinkContact: "contact",
    hamburgerToggler: "hamburger-toggler",
    socialIcons: ".social-icon",
  };
  // Declare Animations in object
  const UIAnimations = {
    menuSlideIn: "menu-slide-in",
    menuSlideOut: "menu-slide-out",
    toggleClose: "toggle-close",
    socialAnimation: "animate__heartBeat",
  };
  // Declare Handlers in object
  const UIHandler = {
    home: document.getElementById(UISelectors.home),
    nav: document.querySelector(UISelectors.nav),
    toggle: document.querySelector(UISelectors.sideNavToggle),
    navBarLinks: document.querySelectorAll(UISelectors.navBarLinks),
    navBarLinkGroupTraning: document.getElementById(
      UISelectors.navBarLinkGroupTraning
    ),
    navBarLinkPersnoalTraining: document.getElementById(
      UISelectors.navBarLinkPersnoalTraining
    ),
    // navBarLinkJoinUs: document.getElementById(UISelectors.navBarLinkJoinUs),
    navBarLinkContact: document.getElementById(UISelectors.navBarLinkContact),

    socialLinks: document.querySelectorAll(UISelectors.socialIcons),
  };
  // Declare swiper
  const swiper = () => {
    const mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
        progressbarOpposite: true,
        dynamicMainBullets: 10,
      },
      autoplay: false,
    });
  };
  //  Declare handlers into variables
  const nav = UIHandler.nav;
  const toggle = UIHandler.toggle;
  return {
    // Navigation function
    navBarSlide: function () {
      // Navigation Slide-in or Slide-out
      if (!nav.classList.contains(UIAnimations.menuSlideIn)) {
        nav.classList.remove(UIAnimations.menuSlideOut);
        nav.classList.add(UIAnimations.menuSlideIn);
        toggle.classList.add(UIAnimations.toggleClose);
      } else {
        nav.classList.remove(UIAnimations.menuSlideIn);
        nav.classList.add(UIAnimations.menuSlideOut);
        toggle.classList.remove(UIAnimations.toggleClose);
      }
    },
    // Hide Navigation function
    navBarClose: () => {
      nav.classList.remove(UIAnimations.menuSlideIn);
      nav.classList.add(UIAnimations.menuSlideOut);
      toggle.classList.remove(UIAnimations.toggleClose);
    },
    // Add Animation to Social Icon
    shakeLinkAdd: (element) => {
      element.classList.add(UIAnimations.socialAnimation);
    },
    // Remove Animation from Social Icon
    shakeLinkRemove: (element) => {
      element.classList.remove(UIAnimations.socialAnimation);
    },
    // Get UISelectors function
    getUISelectors: () => {
      return UISelectors;
    },
    // Get UIHandler function
    getUIHandler: () => {
      return UIHandler;
    },
    // Init Slider
    initSlider: () => {
      swiper();
    },
  };
})();

// Declare UIController into variable
const ui = UICtrl;

// Export ui
export { ui };
