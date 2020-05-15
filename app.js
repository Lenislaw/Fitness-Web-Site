// Iport script with app UI
import { ui } from "./ui.js";
import { page } from "./pageState.js";

const appCtrl = (function (ui, page) {
  // Private
  //Get window width onload
  const InitWindowWidth = window.innerWidth;
  // Get selectros and Handler form UI and put into variable
  const UISelectors = ui.getUISelectors();
  const UIHandler = ui.getUIHandler();

  // Add Events Listeners
  const LoadEventListeners = () => {
    // Declare handlers
    let navBarLinks = UIHandler.navBarLinks;

    const navBarLinkGroupTraining = UIHandler.navBarLinkGroupTraning;
    const navBarLinkPersonalTraining = UIHandler.navBarLinkPersnoalTraining;
    // const navBarLinkJoinUs = UIHandler.navBarLinkJoinUs;
    const navBarLinkContact = UIHandler.navBarLinkContact;
    const home = UIHandler.home;

    let socialLinks = UIHandler.socialLinks;

    // Add event to hamburger menu
    document
      .getElementById(UISelectors.hamburgerToggler)
      .addEventListener("click", ui.navBarSlide);

    // Add Event Listener to navbar links

    navBarLinks = Array.from(navBarLinks);
    navBarLinks.forEach((el) => {
      el.addEventListener("click", ui.navBarClose);
    });

    home.addEventListener("click", (e) => {
      let state = "";

      if (e.target.id === "home" || e.target.parentElement.id === "home") {
        state = "home";
        changeState(state);
      }
    });

    navBarLinkGroupTraining.addEventListener("click", (e) => {
      let state = e.target.parentElement.id;
      changeState(state);
    });
    navBarLinkPersonalTraining.addEventListener("click", (e) => {
      const state = e.target.parentElement.id;
      changeState(state);
    });
    // navBarLinkJoinUs.addEventListener("click", (e) => {
    //   const state = e.target.parentElement.id;
    //   changeState(state);
    // });
    navBarLinkContact.addEventListener("click", (e) => {
      const state = e.target.parentElement.id;
      changeState(state);
    });
    // Add Event Listener to social links
    socialLinks = Array.from(socialLinks);
    // Event Listener for Add animation
    socialLinks.forEach((link) => {
      link.addEventListener("mouseenter", (e) => {
        const element = e.target;
        ui.shakeLinkAdd(element);
      });
    });
    // Event Listener fro remove animation
    socialLinks.forEach((link) => {
      link.addEventListener("mouseleave", (e) => {
        const element = e.target;
        ui.shakeLinkRemove(element);
      });
    });
  };
  // const currentWidnowWidth = () => {
  //   const currentWidnowWidth = window.innerWidth;

  //   return currentWidnowWidth;
  // };
  // const choseSliderSize = (windowWidth) => {
  //   if (windowWidth < 651) {
  //     ui.initSlider(1);
  //   }
  //   if (windowWidth > 650) {
  //     ui.initSlider(2);
  //   }
  //   if (windowWidth > 1024) {
  //     ui.initSlider(3);
  //   }

  //   if (windowWidth > 1400) {
  //     ui.initSlider(4);
  //   }
  // };
  const changeState = (state) => {
    if (state === UISelectors.home) {
      page.home();
      LoadEventListeners();
    }
    if (state === UISelectors.navBarLinkGroupTraning) {
      page.groupTraning();
      ui.initSlider();
      LoadEventListeners();
    }
    if (state === UISelectors.navBarLinkPersnoalTraining) {
      page.personalTraning();
      LoadEventListeners();
    }
    // if (state === UISelectors.navBarLinkJoinUs) {
    //   page.joinUs();
    //   LoadEventListeners();
    // }
    if (state === UISelectors.navBarLinkContact) {
      page.contact();
      LoadEventListeners();
    }
  };

  // Public
  return {
    init: function () {
      page.home();
      LoadEventListeners();
    },
  };
})(ui, page);

// Init app
appCtrl.init();
window.addEventListener("click", (e) => {
  console.log(e.target);
});
