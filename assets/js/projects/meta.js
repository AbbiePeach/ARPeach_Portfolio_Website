AOS.init();

// Array of object for projects
const projects = [
  {
    title: "Meta x IJM campaign ‘Break Free to Fly’",
    cardImage: "../assets/images/meta/CreativeX.png",
    description: "A sensitive but powerful Instagram world effect explaining how victims of human trafficking suffered, but were eventually rescued and reintegrated back into society.",
    video: "../assets/video/meta/MultiLanguage_BFTF_Full2-1.mp4",
  },
  {
    title: "Facebook Messenger Avatars",
    cardImage: "../assets/images/meta/avatarcat.png",
    description: "I developed a series of filters for Facebook Messenger, which transformed the user into a cat, dog and an owl..",
    video: "../assets/video/meta/avatars.mov",
  },
  {
    title: "Facebook Portal",
    cardImage: "../assets/images/meta/portal.png",
    description: "I developed multiple augmented reality experiences for the StoryTime feature across all of Facebook’s Portal devices. I used Spark AR to make these designs based on the Dr. Seuss stories come to life.",
    video: "../assets/video/meta/cupboards-portal.mp4",
  },
  {
    title: "Lipton Ice Tea – Winter Smiles",
    cardImage: "../assets/images/meta/liptonwinter.png",
    description: "",
    video: "../assets/video/meta/liptonwinter.mov",
  },
  {
    title: "Dress using physics",
    cardImage: "../assets/images/meta/dress.png",
    description: "",
    video: "../assets/video/meta/DressSparkPhysics.mp4",
  },
  {
    title: "Christmas Countdown – BBC",
    cardImage: "../assets/images/meta/nb2.png",
    description: "",
    video: "../assets/video/meta/NB2.mp4",
  },
  {
    title: "Lipton Ice Tea – Summer Smiles",
    cardImage: "../assets/images/meta/lipton.png",
    description:
      "",
    video: "../assets/video/meta/liptonsummer.mov",
  },
  {
    title: "Filter for the Hope Sculpture – Glasgow",
    cardImage: "../assets/images/meta/hope.png",
    description: "",
    video: "../assets/video/meta/HopeSculpturePreviewVid.mov",
  },
  {
    title: "Filter for Numberblocks TV show – BBC",
    cardImage: "../assets/images/meta/nb.png",
    description:
      "",
    video: "../assets/video/meta/NB-filter.mp4"
  },
  {
    title: "Finnebrogue – Tesco campaign",
    cardImage: "../assets/images/meta/bacon.png",
    description: "",
    video: "../assets/video/meta/naked.mov",
  },
  {
    title: "Filter for Luna Bay’s new single ‘Operator’",
    cardImage: "../assets/images/meta/lunabay.png",
    description: "",
    video: "../assets/video/meta/Glitch-LunaBay.mov",
  },
  {
    title: "Cyber Girl filter",
    cardImage: "../assets/images/meta/cyber.png",
    description: "",
    video: "../assets/video/meta/cybergurl.mov",
  },
  {
    title: "Neon Glow filter",
    cardImage: "../assets/images/meta/neonglow.png",
    description: "",
    video:"../assets/video/meta/glow.mov",
  },
  {
    title: "Felt Cute filter",
    cardImage: "../assets/images/meta/feltcute.png",
    description: "",
    video:"../assets/video/meta/feltcute.mov",
  },
  {
    title: "Make It Rain filter",
    cardImage: "../assets/images/meta/rain.png",
    description: "",
    video:"../assets/video/meta/raingurl.mp4",
  },
  {
    title: "Chroma filter",
    cardImage: "../assets/images/meta/chroma.png",
    description: "",
    video:"../assets/video/meta/chroma.mov",
  },
  {
    title: "Eyebrow Dance To Music",
    cardImage: "../assets/images/meta/browdance.png",
    description: "",
    video:"../assets/video/meta/browdance.mov",
  },
    {
    title: "Devil Flames filter",
    cardImage: "../assets/images/meta/devilflames.png",
    description: "",
    video:"../assets/video/meta/devilflames.mov",
  },
  {
    title: "Colour Glow Outline filter",
    cardImage: "../assets/images/meta/outline.png",
    description: "",
    video:"../assets/video/meta/outline.mov",
  },
  {
    title: "Orange Eye Makeup filter",
    cardImage: "../assets/images/meta/orangeyes.png",
    description: "",
    video:"../assets/video/meta/orangeyes.mov",
  },
  {
    title: "Sims filter",
    cardImage: "../assets/images/meta/sims.png",
    description: "",
    video:"../assets/video/meta/sims.mp4",
  },
  {
    title: "Cartoon Me filter",
    cardImage: "../assets/images/meta/cartoonme.png",
    description: "",
    video:"../assets/video/meta/cartoon.mp4",
  },
  {
    title: "Multi-Eye filter",
    cardImage: "../assets/images/meta/multieye.png",
    description: "",
    video:"../assets/video/meta/multieye.mp4",
  },
  {
    title: "Table Dance filter",
    cardImage: "../assets/images/meta/tabledance.png",
    description: "",
    video:"../assets/video/meta/3drandom.mov",
  },
  {
    title: "SpongeBob filter",
    cardImage: "../assets/images/meta/spongebob.png",
    description: "",
    video:"../assets/video/meta/spongebob.mov",
  },
  {
    title: "They Said It filter",
    cardImage: "../assets/images/meta/sayit.png",
    description: "",
    video:"../assets/video/meta/sayit.mov",
  },
  {
    title: "Hearts filter",
    cardImage: "../assets/images/meta/hearts.png",
    description: "",
    video:"../assets/video/meta/hearts.mov",
  },
  {
    title: "Typeless Records filter",
    cardImage: "../assets/images/meta/typeless.png",
    description: "",
    video:"../assets/video/meta/typeless.mov",
  },
  {
    title: "Iridescent filter",
    cardImage: "../assets/images/meta/iridescent.png",
    description: "Over 1 Million Views and used by celebrities",
    video:"../assets/video/meta/iridescent.mov",
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