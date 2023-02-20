AOS.init();

// Array of object for projects
const projects = [
  {
    title: "Camden’s Peoples Museum App",
    cardImage: "../assets/images/snap/drums.png",
    description: "AR experience showing fashion items made in Camden, London. I made the full experience in Unity – swipe to find the ‘perfect’ combination. Hologram follows the camera 360 degrees.",
    video: "../assets/video/unity/CamdensFashion.mp4",
  },
  {
    title: "Urban Jungle – Coventry City of Culture AR app",
    cardImage: "../assets/images/snap/breakthebias.png",
    description: "AR experience triggered from a marker on the floor that turns into a firey phoenix, then into a portal. I also made the animation & portal vfx.",
    video: "../assets/video/unity/UJ.mov",
  },
  {
    title: "Portal – VFX for AR experience",
    cardImage: "../assets/images/snap/liptonsnap.png",
    description: "",
    video: "../assets/video/unity/FirePortal.mov",
  },
  {
    title: "The Old Operating Theatre",
    cardImage: "../assets/images/snap/space.png",
    description: "AR experience in a museum showing a hologram of a famous surgeon telling his story from the early 19th century. I made the iPhone and Android app from start to finish. ",
    video: "../assets/video/unity/OldOp.mp4",
  },
  {
    title: "A Vixen’s Tale",
    cardImage: "../assets/images/snap/vixen.png",
    description: "The Welsh National Opera",
    video: "../assets/video/snap/vixen.mov",
  },
  
];

let projectElements = document.getElementsByClassName("project");
const background = document.getElementById('background');
const html = document.documentElement
const projectcards = document.querySelector(".projectcards");

const openLightbox = (lightbox, video) => {
  lightbox.style.display = 'block';
  background.style.display = 'block';
  html.style.overflow = 'hidden';
  video.play();
};

const closeLightbox = (lightbox, video) => {
  lightbox.style.display = 'none';
  background.style.display = 'none';
  html.style.removeProperty('overflow');
  video.pause();
};

const getProjectVideos = () => {
  Array.from(projectElements).forEach(function(project) {
    console.log(project);
    const name = project.querySelector('.project__name');
    const video = project.querySelector('.project__video');
    const lightbox = project.querySelector('.project__lightbox');
    const closeBtn = project.querySelector('.project__close');
    const background = project.querySelector('.project__background');
    
    name.addEventListener('click', function() {
      openLightbox(lightbox, video);
    });
    
    closeBtn.addEventListener('click', function() {
      closeLightbox(lightbox, video);
    });
    
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        const isNotCombinedKey = !(event.ctrlKey || event.altKey || event.shiftKey);
        if (isNotCombinedKey) {
          closeLightbox(lightbox, video);
        }
      }
    });
  });
}

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description, video}) => {
    output += 
    `<div class="project">
      <div class="column skill-card card" style="margin: 15px" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600">
        <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
          <div class="data">
            <div class="title-div project__name">
              <h2 class="title">${title}</h2>
              <p>${description}</p>
            </div>
          </div>
        </div>
      </div>
    
      <div class="project__lightbox">
        <button class="project__close">
          <span class="screen-reader-text">Close</span>
        </button>
        <video class="project__video" controls>
          <source src="${video}" type="video/mp4">
        </video>
      </div>

      <div class="project__background"></div>
    </div>`
  });
  projectcards.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCards);
document.addEventListener("DOMContentLoaded", getProjectVideos);