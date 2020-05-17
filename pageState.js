const PageState = (function () {
  const offerGroup = {
    of1: {
      name: "B&B World",
      srcPhoto: "imgs/b&b-world.jpg",
    },
    of2: {
      name: "Women's World",
      srcPhoto: "imgs/women's-world.jpg",
    },
    of3: {
      name: "Man's World",
      srcPhoto: "imgs/man's-world.jpg",
    },
    of4: {
      name: "World Pump",
      srcPhoto: "imgs/pump-world.jpg",
    },
    of5: {
      name: "Booty World",
      srcPhoto: "imgs/booty-world.jpg",
    },
    of6: {
      name: "Body Sculpt",
      srcPhoto: "imgs/body-sculpt.jpg",
    },
    of7: {
      name: "Cellu Stop",
      srcPhoto: "imgs/cellu-stop.jpg",
    },
    of8: {
      name: "Fat Burn",
      srcPhoto: "imgs/fat-burn.jpg",
    },
  };

  // Home State
  const homeState = function () {
    document.querySelector(
      ".container"
    ).innerHTML = ` <div class="content content-home">
    <div class="text-box">
      <div class="content-text-box">
        <h2>More then Fitness</h2>
        <p>
          Lorem ipsum dolor sit amet consecsstetur, adipisicing elit.
          Nostrum placeat dolor illsum vel iusto fugiat deserunt tempore a
          atque, aliquam quas eligendi tenetur recusandae maxime sed quis
          deleniti ea itaque.
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
    <div class="img-box">
      <img src="imgs/man.png" alt="man" />
    </div>
  </div>
  <video src="imgs/bg.mp4" autoplay muted loop type="mp4"></video>`;
  };

  // Group Training state
  const groupTraningState = function () {
    let groupOffers = "";
    for (const key in offerGroup) {
      groupOffers += `
      
      <div class="swiper-slide">
      <div class="type-img"><img src="${offerGroup[key].srcPhoto}" alt=""></img></div>
      <div class="type-footer">
        <p class="type-name">${offerGroup[key].name}</p>
        <a class="reservation-anchor" href="#">
          <p class="reservation-paragraf">Read More</p>
          <p class="arrow-right"><i class="fas fa-arrow-right"></i></p>
        </a>
      </div>
    </div>`;
    }

    document.querySelector(".container").innerHTML = `
    <div class="content content-group">
    <!-- Swiper -->
    <div class="swiper-container">
    <div class="swiper-wrapper">
    ${groupOffers}
    </div>
    <div class="swiper-pagination"></div>
    </div>
    </div>

    
    `;
  };
  // Personal Traning state
  const personalTraningState = function () {
    document.querySelector(".container").innerHTML = `
    <div class="content content-personal">PERSONAL</div>`;
  };
  // Join Us State
  //   const joinUsState = function () {
  //     document.querySelector(".container").innerHTML = `
  //     <div class="content content-join-us">
  //         <p> JOIN US <p>
  //     </div>`;
  //   };
  // Contact state
  const contactState = function () {
    document.querySelector(".container").innerHTML = `
    <div class="content content-contact">
    <h2 class="heading-form">Contact Us</h2>
    <p> Fill form to contact with us</p>
    <form >
        <div class="form-group">
          <div class="form-group-input-label">
            <input type="text" id="input-name" autocomplete="off" role="presentation" required>
            <label class="label">
              <span class="span-text">Name</span>
            </label>
            
          </div>
            
          <div id="alert-name" class="alert">Alert </div>

        </div>
        
        <div class="form-group">
        <div class="form-group-input-label">
          <input type="text" id="input-phone" autocomplete="off" role="presentation" required>
          <label class="label">
            <span class="span-text">Phone number</span>
          </label>
          
        </div>
          
        <div id="alert-phone" class="alert">Pleast write valid phone nubmer </div>

      </div>
       
      <div class="form-group">
        <div class="form-group-input-label">
          <input type="email" id="input-email" autocomplete="off" role="presentation" required>
          <label class="label">
            <span class="span-text">Email</span>
          </label>
        
        </div>
        
      <div id="alert-email" class="alert">Enter valid emial adress </div>

    </div>
    <div id="alert-submit" class="alert">Contact sended</div>
    <button type="submit" id="form-submit-btn">Submit</button>
    </form>
    </div>
    `;
  };
  return {
    home: function () {
      homeState();
    },
    groupTraning: function () {
      groupTraningState();
    },
    personalTraning: function () {
      personalTraningState();
    },
    // joinUs: function () {
    //   joinUsState();
    // },
    contact: function () {
      contactState();
    },
  };
})();
// Instantiate pageState
const page = PageState;

export { page };
