AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Augmented Reality Developer",
    cardImage: "assets/images/logo.png",
    place: "AR Peach",
    time: "(Jan, 2019 - present)",
    desp: "<p><br>Developing Facebook, Instagram, TikTok and Snapchat augmented reality effects for various clients, such as entertainment lenses for the latest Snap Spectacles, song promotion filter for Rock Band Luna Bay and edutainment filters for BBC CBeebies Numberblocks.</p> ",
  },

  {
    title: "Technical Artist",
    cardImage: "assets/images/experience-page/metalogo.png",
    place: "Meta",
    time: "(June - Dec 2022)",
    desp: "<p>Worked within the Creative Engineering (Reality Labs) team providing AR creative and technical direction by implementing assets and logic together in Meta Spark Studio through javascript api, GLSL, visual shaders and visual scripting.</p>",
  },
  {
    title: "Augmented Reality Developer",
    cardImage: "assets/images/experience-page/arcade-ltd-logo.webp",
    place: "Arcade",
    time: "(Feb, 2021 - June, 2022)",
    desp: "<p>Designed and developed augmented reality experiences for a range of clients, from Lipton Ice Tea to The Old Operating Theatre museum. I managed all of the Social AR work, creating filters for brands on Instagram, Snapchat and TikTok. I developed my skills in Unity, Spark AR, Lens Studio, Effect House and 8th Wall.</p>"
  },
  {
    title: "Meta Spark Studio Developer",
    cardImage: "assets/images/experience-page/nexus-logo.png",
    place: "Nexus Studios",
    time: "(Aug, 2020 - June, 2022)",
    desp: "<p> Developed a variety of augmented reality experiences for Meta products, such as the Portal devices and Facebook Messenger using Meta Spark Studio, formerly SparkAR.</p>"
  },
  {
    title: "Junior Developer",
    cardImage: "assets/images/experience-page/peel-logo.jpeg",
    place: "Peel Interactive",
    time: "(Oct, 2019 - Jan, 2020)",
    desp: "<p> Created a wide range of bespoke digital experiences, from large-scale projection installations, interactive touchscreen games and motion graphics, to virtual and augmented reality experiences.</p>"
  },
  {
    title: "Digital Designer",
    cardImage: "assets/images/experience-page/UoL-logo.jpeg",
    place: "The University of Leeds",
    time: "(June, 2019 - Jan, 2020)",
    desp: "<p> Created a wide range of bespoke digital experiences, from large-scale projection installations, interactive touchscreen games and motion graphics, to virtual and augmented reality experiences.</p>"
  },
  {
    title: "Creative & Production Assistant",
    cardImage: "assets/images/experience-page/disneylogo.jpeg",
    place: "The Walt Disney Company",
    time: "(June, 2017 - June, 2018)",
    desp: "<p> At TWDC, I worked within the Creative team of Disney Media, Sales & Partnerships - the advertising and promotions arm of the company. I worked across hundreds of productions and had responsibilities from the start to the very end of each commercial advert that we produced. I brainstormed initial ideas, managed the approval processes, was a runner on the live-action shoots, through to finally delivering every advert on-air via Adstream in the UK and across Europe. I also created original digital content for various campaigns, re-touched photographs and assisted with GFX and editing footage. I adhered to tight deadlines, which proved my ability to work well under pressure.</p>"
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
