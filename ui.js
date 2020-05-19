// UI Controller
const UICtrl = (function () {
  // Utilities classes
  const UtilitiesClass = {
    block: "block",
    overflowHidden: "hidden",
  };
  // Declare UISelectors
  const UISelectors = {
    body: "body",
    home: "home",
    nav: "navigation",
    rel: "rel",
    navBarLinks: "nav ul li",
    sideNavToggle: ".toggle",
    navBarLinkAboutUs: "about",
    navBarLinkGroupTraning: "group",
    navBarLinkPersnoalTraining: "personal",
    navBarLinkContact: "contact",
    hamburgerToggler: "hamburger-toggler",
    socialIcons: ".social-icon",
    homeReadMore: "home-read-more",
    content: ".content",
    groupState: "group",
    slider: ".swiper-container",
    swiperPagination: ".swiper-pagination",
    readMore: ".read-more",
    modal: "modal",
    closeModalBtn: "close-btn",
    contactState: "contact",
    formNameInput: "input-name",
    alertName: "alert-name",
    formPhoneInput: "input-phone",
    alertPhone: "alert-phone",
    formEmailInput: "input-email",
    alertEmail: "alert-email",
    formSubmitBtn: "form-submit-btn",
    alertSubmit: "alert-submit",
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
    body: document.querySelector(UISelectors.body),
    home: document.getElementById(UISelectors.home),
    nav: document.getElementById(UISelectors.nav),
    rel: document.getElementById(UISelectors.rel),
    toggle: document.querySelector(UISelectors.sideNavToggle),
    navBarLinks: document.querySelectorAll(UISelectors.navBarLinks),
    navBarLinkAboutUs: document.getElementById(UISelectors.navBarLinkAboutUs),
    navBarLinkGroupTraning: document.getElementById(
      UISelectors.navBarLinkGroupTraning
    ),
    navBarLinkPersnoalTraining: document.getElementById(
      UISelectors.navBarLinkPersnoalTraining
    ),
    navBarLinkContact: document.getElementById(UISelectors.navBarLinkContact),
    socialLinks: document.querySelectorAll(UISelectors.socialIcons),
  };

  // Declare swiper
  const swiperGroup = () => {
    const mySwiper = new Swiper(UISelectors.slider, {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: UISelectors.swiperPagination,
        type: "bullets",
        clickable: true,
        progressbarOpposite: true,
        dynamicMainBullets: 10,
      },
      autoplay: true,
    });
  };
  const swiperPersonal = () => {
    var swiper = new Swiper(UISelectors.slider, {
      pagination: {
        el: UISelectors.swiperPagination,
        clickable: true,
      },
      autoplay: true,
    });
  };
  //  Declare handlers into variables
  const nav = UIHandler.nav;
  const toggle = UIHandler.toggle;
  const body = UIHandler.body;
  const rel = UIHandler.rel;
  return {
    // Navigation function
    navBarSlide: function () {
      // Navigation Slide-in or Slide-out
      if (!nav.classList.contains(UIAnimations.menuSlideIn)) {
        nav.classList.remove(UIAnimations.menuSlideOut);
        nav.classList.add(UIAnimations.menuSlideIn);
        toggle.classList.add(UIAnimations.toggleClose);
        rel.classList.toggle(UtilitiesClass.block);
        body.classList.toggle(UtilitiesClass.overflowHidden);
      } else {
        nav.classList.remove(UIAnimations.menuSlideIn);
        nav.classList.add(UIAnimations.menuSlideOut);
        toggle.classList.remove(UIAnimations.toggleClose);
        rel.classList.toggle(UtilitiesClass.block);
        body.classList.toggle(UtilitiesClass.overflowHidden);
      }
    },
    // Hide Navigation function
    navBarClose: () => {
      nav.classList.remove(UIAnimations.menuSlideIn);
      nav.classList.add(UIAnimations.menuSlideOut);
      toggle.classList.remove(UIAnimations.toggleClose);
      rel.classList.toggle(UtilitiesClass.block);
      body.classList.toggle(UtilitiesClass.overflowHidden);
    },
    // Add Animation to Social Icon
    shakeLinkAdd: (element) => {
      element.classList.add(UIAnimations.socialAnimation);
    },
    // Remove Animation from Social Icon
    shakeLinkRemove: (element) => {
      element.classList.remove(UIAnimations.socialAnimation);
    },
    // Create modal content
    createModal: (description) => {
      modal.innerHTML = description;
    },
    // Open modal
    openModal: (modal) => {
      modal.classList.toggle(UtilitiesClass.block);
    },
    // Close modal by click X
    closeModal: (modal) => {
      modal.classList.toggle(UtilitiesClass.block);
    },
    // Close modal by click outside modal
    clickOutside: (modal) => {
      modal.classList.toggle(UtilitiesClass.block);
    },
    // Add alert message under inputs
    alertMessage: (alert, type, input, message) => {
      alert.classList = `alert alert-${type}`;
      alert.innerText = message;
      setTimeout(function () {
        alert.classList = `alert`;
      }, 3000);
      input.value = "";
    },
    // Add alert message over submit button
    submitAlertMessage: (alert, type, message) => {
      alert.classList = `${type}`;
      alert.innerText = message;
      setTimeout(function () {
        alert.classList = "";
      }, 3000);
    },
    // Get UISelectors function
    getUISelectors: () => {
      return UISelectors;
    },
    // Get UIHandler function
    getUIHandler: () => {
      return UIHandler;
    },

    // Init Slider in GroupState
    initSliderGroup: () => {
      swiperGroup();
    },
    // Init Slider in PersonalState
    initSliderPorsonal: () => {
      swiperPersonal();
    },
  };
})();

// Declare UIController into variable
const ui = UICtrl;

// Export ui
export { ui };
