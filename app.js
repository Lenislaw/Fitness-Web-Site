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
  // Add event listeners for dynamic content
  const LoadDynamicEventListeners = (state) => {
    // Handlers for elements from contact
    const content = document.querySelector(UISelectors.content);
    const submitAlert = document.getElementById(UISelectors.alertSubmit);
    const inputName = document.getElementById(UISelectors.formNameInput);
    const alertName = document.getElementById(UISelectors.alertName);
    const inputPhone = document.getElementById(UISelectors.formPhoneInput);
    const alertPhone = document.getElementById(UISelectors.alertPhone);
    const inputEmail = document.getElementById(UISelectors.formEmailInput);
    const alertEmail = document.getElementById(UISelectors.alertEmail);
    console.log(inputEmail);
    console.log(alertEmail);
    //Chose website state
    if (state === UISelectors.home) {
    }
    if (state === UISelectors.navBarLinkGroupTraning) {
    }
    if (state === UISelectors.navBarLinkPersnoalTraining) {
    }
    if (state === UISelectors.contactState) {
      // Add event listener
      content.addEventListener("focusout", (e) => {
        if (e.target.id === UISelectors.formNameInput) {
          // Get input value
          const inputNameValue = inputName.value;

          // Validate data in input
          validateNameInput(inputNameValue, inputName, alertName);
        }
        if (e.target.id === UISelectors.formPhoneInput) {
          // Get input value
          const inputPhoneValue = inputPhone.value;

          // Validate data in input
          validatePhoneInput(inputPhoneValue, inputPhone, alertPhone);
        }
        if (e.target.id === UISelectors.formEmailInput) {
          //Get input value
          const inputEmailValue = inputEmail.value;

          // Validate data in input
          validateEmialInput(inputEmailValue, inputEmail, alertEmail);
        }
        e.stopPropagation();
      });
      // Disable submit by enter
      content.addEventListener("keypress", (e) => {
        if (e.keyCode === 13) {
          window.event.returnValue = false;
          const type = "error";
          const message = "You can submit only by click button!";
          ui.submitAlertMessage(submitAlert, type, message);
        }
      });
      // Add click event to submit button
      content.addEventListener("click", (e) => {
        // Handler for submit alert
        const submitAlert = e.target.previousElementSibling;

        if (e.target.id === UISelectors.formSubmitBtn) {
          // IF statement to check all inputs are valid
          if (
            inputName.value.length > 1 &&
            inputPhone.value.length > 1 &&
            inputEmail.value.length > 5
          ) {
            // Variables for ui function
            const type = "success";
            const message = "Contact sended successful!";

            // Show alert function
            ui.submitAlertMessage(submitAlert, type, message);

            // Clear inputs
            inputName.value = "";
            inputPhone.value = "";
            inputEmail.value = "";

            e.preventDefault();
            // Move to home state
            setTimeout(() => {
              home.click();
            }, 2000);
          }
        }
      });
    }
  };
  // reg exp for name input
  const validateNameInput = (inputNameValue, input, alert) => {
    const re = /^[a-zA-Z]{2,10}$/;

    if (!re.test(inputNameValue)) {
      const message = "Name must be between 2 and 10 characters!";
      const type = "error";
      if (input.length > 10) {
        input.value = "";
      }
      ui.alertMessage(alert, type, input, message);
    } else {
      console.log("Valid name input sucess");
    }
  };
  // reg exp for phone input
  const validatePhoneInput = (inputPhoneValue, input, alert) => {
    console.log(inputPhoneValue);
    const re = /([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
    if (!re.test(inputPhoneValue)) {
      const message =
        "Please enter valid phone number example: +11 111 111 111";
      const type = "error";
      input.value = "";
      ui.alertMessage(alert, type, input, message);
    } else {
      console.log("VALID");
    }
  };
  // reg exp for emial input
  const validateEmialInput = (inputEmailValue, input, alert) => {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (!re.test(inputEmailValue)) {
      const message = "Please enter valid emial adres";
      const type = "error";
      ui.alertMessage(alert, type, input, message);

      // Name must be between 2 and 10 characters!
    } else {
      console.log("VALID");
    }
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
      LoadDynamicEventListeners(state);
    }
    if (state === UISelectors.navBarLinkGroupTraning) {
      page.groupTraning();
      ui.initSlider();
    }
    if (state === UISelectors.navBarLinkPersnoalTraining) {
      page.personalTraning();
      LoadDynamicEventListeners(state);
    }
    // if (state === UISelectors.navBarLinkJoinUs) {
    //   page.joinUs();
    //   LoadEventListeners();
    // }
    if (state === UISelectors.navBarLinkContact) {
      page.contact();
      LoadDynamicEventListeners(state);
    }
  };

  // Public
  return {
    init: function () {
      page.home();
      LoadEventListeners();
      LoadDynamicEventListeners("contact");
    },
  };
})(ui, page);

// Init app
appCtrl.init();
