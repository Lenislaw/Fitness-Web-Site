const PageState = (function () {
  // Offer Group object    // can switch it for fetch API in future
  const offerGroup = {
    of1: {
      name: "B&B World",
      srcPhoto: "imgs/b&b-world.jpg",
      id: 0,
      description:
        "B&B World is about Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eum autem deleniti blanditiis molestiae quasi tempore earum facere illum repellendus ab, magni, doloremque porro ratione nemo sequi quis fugiat aspernatur! ",
    },
    of2: {
      name: "Women's World",
      srcPhoto: "imgs/women's-world.jpg",
      id: 1,
      description:
        "Women's World is about Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eum autem deleniti blanditiis molestiae quasi tempore earum facere illum repellendus ab, magni, doloremque porro ratione nemo sequi quis fugiat aspernatur! ",
    },
    of3: {
      name: "Man's World",
      srcPhoto: "imgs/man's-world.jpg",
      id: 2,
      description:
        "Man's World is about Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eum autem deleniti blanditiis molestiae quasi tempore earum facere illum repellendus ab, magni, doloremque porro ratione nemo sequi quis fugiat aspernatur! ",
    },
    of4: {
      name: "World Pump",
      srcPhoto: "imgs/pump-world.jpg",
      id: 3,
      description:
        "World Pump is about Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eum autem deleniti blanditiis molestiae quasi tempore earum facere illum repellendus ab, magni, doloremque porro ratione nemo sequi quis fugiat aspernatur! ",
    },
    of5: {
      name: "Booty World",
      srcPhoto: "imgs/booty-world.jpg",
      id: 4,
      description:
        "Booty World is about Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eum autem deleniti blanditiis molestiae quasi tempore earum facere illum repellendus ab, magni, doloremque porro ratione nemo sequi quis fugiat aspernatur! ",
    },
    of6: {
      name: "Body Sculpt",
      srcPhoto: "imgs/body-sculpt.jpg",
      id: 5,
      description:
        "Body Sculpt is about Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eum autem deleniti blanditiis molestiae quasi tempore earum facere illum repellendus ab, magni, doloremque porro ratione nemo sequi quis fugiat aspernatur! ",
    },
    of7: {
      name: "Cellu Stop",
      srcPhoto: "imgs/cellu-stop.jpg",
      id: 6,
      description:
        "Cellu Stop is about Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eum autem deleniti blanditiis molestiae quasi tempore earum facere illum repellendus ab, magni, doloremque porro ratione nemo sequi quis fugiat aspernatur! ",
    },
    of8: {
      name: "Fat Burn",
      srcPhoto: "imgs/fat-burn.jpg",
      id: 7,
      description:
        "Fat Burn is about Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eum autem deleniti blanditiis molestiae quasi tempore earum facere illum repellendus ab, magni, doloremque porro ratione nemo sequi quis fugiat aspernatur! ",
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
        <button id="home-read-more" href="#">Read More</button>
      </div>
    </div>
    <div class="img-box">
      <img src="imgs/man.png" alt="man" />
    </div>
  </div>
  <video src="imgs/bg.mp4" autoplay muted loop type="mp4"></video>`;
  };
  // About Us State
  const aboutUsState = function () {
    document.querySelector(".container").innerHTML = `
    <div class="content content-about">
    <div class="description">
      <h2> About Me</h2>
      <div class="skills">
        <div class="item"><i class="fas fa-award"></i><p>Lorem ipsum dolor sit amet consecsstetur, adipisicing elit.</p></div>
        <div class="item"><i class="fas fa-running"></i></i><p>Lorem ipsum dolor sit amet consecsstetur, adipisicing elit.</p></div>
        <div class="item"><i class="fas fa-child"></i></i><p>Lorem ipsum dolor sit amet consecsstetur, adipisicing elit.</p></div>
        <div class="item"><i class="fas fa-fist-raised"></i></i><p>Lorem ipsum dolor sit amet consecsstetur, adipisicing elit.</p></div>
        <div class="item"><i class="fas fa-utensils"></i></i><p>Lorem ipsum dolor sit amet consecsstetur, adipisicing elit.</p></div>
      </div>
    </div
    <div class="image"><img src="imgs/about-me.png"></img></div>
    </div>

    `;
  };

  // Group Training state
  const groupTraningState = function () {
    let groupOffers = "";
    for (const key in offerGroup) {
      groupOffers += `
      
      <div class="swiper-slide">
        <div class="type-img">
          <img src="${offerGroup[key].srcPhoto}" alt="">
          </img>
        </div>
        <div class="type-footer">
          <p class="type-name">${offerGroup[key].name}</p>
          <button id="id-${offerGroup[key].id}" class="read-more">
            <p class="reservation-paragraf">Read More</p>
            <i class="fas fa-arrow-right"></i>
          </button>
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
        <div class="swiper-pagination">
        </div>
      </div>

      <div id="modal" class="modal">
        <div class="modal-content">
          <span id="close-btn">&times;</span>
          
        </div>
      </div>
    
    </div>

    
    `;
  };
  // Chose description from offerGroup object
  const choseDescription = (id) => {
    let description = "";
    for (const key in offerGroup) {
      if (offerGroup[key].id === id) {
        description = `

        
        <div class="modal-content">
          <span id="close-btn">&times;</span>
          <h1>${offerGroup[key].name}</h1>
          <p> ${offerGroup[key].description}</p>
        </div>
      
        
        
       `;
        return description;
      }
    }
  };
  // Personal Traning state
  const personalTraningState = function () {
    document.querySelector(".container").innerHTML = `
    <div class="content content-personal">
     <div class="box">
      <div class="box-content">
        <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide"> 
                <h1>About Personal Training</h1>
                <div class="text">
                  <p>
                    Et quasi numquam officiis voluptatem voluptatibus expedita sequi similique maxime soluta ipsum praesentium esse veritatis enim qui laboriosam, dolores temporibus porro deleniti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quasi numquam officiis voluptatem voluptatibus expedita sequi similique maxime soluta ipsum praesentium esse veritatis enim qui laboriosam, dolores temporibus porro deleniti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quasi numquam officiis voluptatem voluptatibus expedita sequi similique maxime soluta ipsum praesentium esse veritatis enim qui laboriosam, dolores temporibus porro deleniti?
                  </p>
                </div>
              </div>

              <div class="swiper-slide"> 
                <h1>Why Personal Training?</h1>
                <div class="slide-content">

                  <div class="item">
                    <i class="fas fa-trash"></i>
                    <h2>Lose weight!</h2>
                    <p> Et quasi numquam officiis voluptatem voluptatibus Et quasi numquam officiis voluptatem voluptatibus </p>
                  </div>

                  <div class="item">
                    <i class="fas fa-dumbbell"></i>
                    <h2>Gain strength!</h2>
                    <p> Et quasi numquam officiis voluptatem voluptatibus Et quasi numquam officiis voluptatem voluptatibus </p>
                  </div>

                   <div class="item">
                    <i class="fas fa-heartbeat"></i>
                    <h2> Feel good!</h2>
                    <p> Et quasi numquam officiis voluptatem voluptatibus Et quasi numquam officiis voluptatem voluptatibus </p>
                   </div>
                </div>
              </div>

              <div class="swiper-slide"> 
                <h1>For who?</h1>
                <div class="text">
                  <p>
                     Et quasi numquam officiis voluptatem voluptatibus expedita sequi similique maxime soluta ipsum praesentium esse veritatis enim qui laboriosam, dolores temporibus porro deleniti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quasi numquam officiis voluptatem voluptatibus expedita sequi similique maxime soluta ipsum praesentium esse veritatis enim qui laboriosam, dolores temporibus porro deleniti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quasi numquam officiis voluptatem voluptatibus expedita sequi similique maxime soluta ipsum praesentium esse veritatis enim qui laboriosam, dolores temporibus porro deleniti?
                  </p>
                </div>
              </div>
      
          </div>
            
          <div class="swiper-pagination"></div>
          </div>
          
          </div>
      </div>
     </div>
    
    </div>`;
  };
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
    // Public function run homeState
    home: function () {
      homeState();
    },
    // Public function run aboutUsState
    aboutUs: function () {
      aboutUsState();
    },
    // Public function run groupTrainingState
    groupTraning: function () {
      groupTraningState();
    },
    // Public function decides which description is going to choose
    getChosenDescription: function (id) {
      return choseDescription(id);
    },
    // Public function run personalTrainingState
    personalTraning: function () {
      personalTraningState();
    },
    // Public function run contactState
    contact: function () {
      contactState();
    },
  };
})();
// Instantiate pageState
const page = PageState;

export { page };
