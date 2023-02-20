AOS.init();

// Array of object for projects
const projects = [
  {
    title: "Snap Spectacles – AR Drums",
    cardImage: "../assets/images/snap/drums.png",
    description: "Developed the AR Drums for the latest pair of Snap's Spectacles",
    video: "../assets/video/snap/drums.mp4",
  },
  {
    title: "Break The Bias",
    cardImage: "../assets/images/snap/breakthebias.png",
    description: "Lens for International Women's Day",
    video: "../assets/video/snap/BreakTheBias.mp4",
  },
  {
    title: "Lipton Ice Tea - Summer Smiles",
    cardImage: "../assets/images/snap/liptonsnap.png",
    description: "",
    video: "../assets/video/snap/liptonsnap.mp4",
  },
  {
    title: "Space Portal",
    cardImage: "../assets/images/snap/space.png",
    description: "",
    video: "../assets/video/snap/SpacePortal.mp4",
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