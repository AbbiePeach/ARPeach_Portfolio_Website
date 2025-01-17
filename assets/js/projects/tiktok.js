AOS.init();

// Array of object for projects
const projects = [
  {
    title: "Pinnochio Nose",
    cardImage: "../assets/images/tiktok/pinnochio.png",
    description: "Tap to grow nose",
    video: "../assets/video/tiktok/pinnochio.mp4",
  },
  {
    title: "Sound Beats Crazy Face",
    cardImage: "../assets/images/tiktok/beats.png",
    description: "Audio Reactive to any TikTok sound – Created at the TikTok London HQ for the first Creator Camp.",
    video: "../assets/video/tiktok/beats.mp4",
  },
  {
    title: "Baby Eyes",
    cardImage: "../assets/images/tiktok/babyeyes.png",
    description: "",
    video: "../assets/video/tiktok/BabyEyes.mp4",
  },
  {
    title: "Gorgeous gorgeous girls",
    cardImage: "../assets/images/tiktok/gggirls.png",
    description: "",
    video: "../assets/video/tiktok/GorgeousGirls.mp4",
  },
  {
    title: "Angel Devil",
    cardImage: "../assets/images/tiktok/angeldevil.png",
    description: "Pout to turn into devil",
    video: "../assets/video/tiktok/AngelDevil.mp4",
  },
  {
    title: "Retro Film Camera Effect",
    cardImage: "../assets/images/tiktok/retro.png",
    description: "",
    video: "../assets/video/tiktok/retro.mov",
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