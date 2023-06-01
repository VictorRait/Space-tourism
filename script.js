"use strict";

////////////////////////// MOBILE NAV
const navBtn = document.querySelector(".nav__icon");
const navImg = document.querySelector(".nav__icon img");
const navListContainer = document.querySelector(".nav__list-container");

const minWidthMobile = window.matchMedia("(min-width: 545px)");
minWidthMobile.onchange = (e) => {
  if (e.matches) {
    navListContainer.style.display = "grid";
    setTimeout(() => {
      navListContainer.style.transform = "translateX(0%)";
    }, 50);
  } else {
    setTimeout(() => {
      navListContainer.style.display = "none";
      navListContainer.style.transform = "translateX(0%)";
    }, 300);
  }
};

const visibilityNav = function () {
  if (navBtn.classList.contains("visible-nav")) {
    navImg.src = "/assets/shared/icon-close.svg";
    navListContainer.style.display = "grid";
    setTimeout(() => {
      navListContainer.style.transform = "translateX(0%)";
    }, 50);
  }
  if (!navBtn.classList.contains("visible-nav")) {
    console.log("hello");
    navImg.src = "/assets/shared/icon-hamburger.svg";
    navListContainer.style.transform = "translateX(100%)";
  }
};

navBtn.addEventListener("click", function () {
  navBtn.classList.toggle("visible-nav");
  visibilityNav();
});
////////////////////////// DESTINATION SUB-NAV
const destinationPage = document.querySelector(".destination");

const destinationNav = document.querySelectorAll(".destination__nav .nav__link");

const removeActive = function (parent) {
  if (parent.classList.contains("technology__nav")) {
    const btns = parent.querySelectorAll(".nav-num-btns");
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  }
  const child = parent.querySelectorAll("li");
  child.forEach((list) => {
    list.classList.remove("active");
  });
};
if (destinationPage) {
  const planets = [
    {
      name: "mars",
      text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!,",
      distance: "225 mil. km",
      traveltime: "9 months",
    },
    {
      name: "europa",
      text:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a" +
        "winter lover’s dream. With an icy surface, it’s perfect for a bit of " +
        "ice skating, curling, hockey, or simple relaxation in your snug " +
        " wintery cabin.",
      distance: "628 mil. km",
      traveltime: "3 years",
    },
    {
      name: "titan",
      text:
        "The only moon known to have a dense atmosphere other than Earth, Titan" +
        "is a home away from home (just a few hundred degrees colder!). As a " +
        "bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      traveltime: "7 years",
    },
    {
      name: "moon",
      text:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help" +
        "regain perspective and come back refreshed. While you’re there, take in some history " +
        "by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      traveltime: "3 days",
    },
  ];

  console.log(destinationNav);
  destinationNav.forEach((nav) => {
    nav.addEventListener("click", function () {
      removeActive(this.parentNode);
      nav.classList.add("active");
      const container = nav.closest(".destination__container");
      const img = container.querySelector(".destination__image");
      const name = container.querySelector(".heading-2");
      const detailText = container.querySelector(".destination__details-text");
      const distance = container.querySelector(".distance");
      const travelTime = container.querySelector(".travel-time");
      if (nav.innerText === "MARS") {
        img.src = "/assets/destination/image-mars.png";
        name.innerText = nav.innerText;
        detailText.innerHTML = planets[0].text;
        distance.innerHTML = planets[0].distance;
        travelTime.innerHTML = planets[0].traveltime;
      }
      if (nav.innerText === "EUROPA") {
        img.src = "/assets/destination/image-europa.png";
        name.innerText = nav.innerText;
        detailText.innerHTML = planets[1].text;
        distance.innerHTML = planets[1].distance;
        travelTime.innerHTML = planets[1].traveltime;
      }
      if (nav.innerText === "TITAN") {
        img.src = "/assets/destination/image-titan.png";
        name.innerText = nav.innerText;
        detailText.innerHTML = planets[2].text;
        distance.innerHTML = planets[2].distance;
        travelTime.innerHTML = planets[2].traveltime;
      }
      if (nav.innerText === "MOON") {
        img.src = "/assets/destination/image-moon.png";
        name.innerText = nav.innerText;
        detailText.innerHTML = planets[3].text;
        distance.innerHTML = planets[3].distance;
        travelTime.innerHTML = planets[3].traveltime;
      }
    });
  });
}
////////////////////////// CREW SUB-NAV
const crewPage = document.querySelector(".crew");
const circles = document.querySelectorAll(".circle");
if (crewPage) {
  const crewMembers = [
    {
      name: "Douglas Hurley",
      role: "Commander",
      text:
        " Douglas Gerald Hurley is an American engineer, former Marine Corps pilot" +
        "and former NASA astronaut. He launched into space for the third time as " +
        "commander of Crew Dragon Demo-2.",
      img: "assets\\crew\\image-douglas-hurley.png",
    },
    {
      name: "Anousheh Ansari",
      role: "Flight Engineer",
      text:
        " Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. " +
        " Ansari was the fourth self-funded space tourist, the first self-funded woman to " +
        "fly to the ISS, and the first Iranian in space. ",
      img: "assets\\crew\\image-anousheh-ansari.png",
    },
    {
      name: " Victor Glover",
      role: "Pilot",
      text:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the " +
        "International Space Station. Glover is a commander in the U.S. Navy where " +
        "he pilots an F/A-18.He was a crew member of Expedition 64, and served as a " +
        "station systems flight engineer.",
      img: "assets\\crew\\image-victor-glover.png",
    },
    {
      name: "Mark Shuttleworth",
      role: "Mission Specialist",
      text:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind " +
        "the Linux-based Ubuntu operating system. Shuttleworth became the first South " +
        "African to travel to space as a space tourist.",
      img: "assets\\crew\\image-mark-shuttleworth.png",
    },
  ];

  circles.forEach((nav) => {
    nav.addEventListener("click", function () {
      removeActive(this.parentNode);
      nav.classList.add("active");
      const container = nav.closest(".crew__container");

      const img = container.querySelector(".crew__image");

      const detailText = container.querySelector(".crew__details-text");
      const role = container.querySelector(".crew__details-container .heading-4");
      const name = container.querySelector(".heading-3");

      const setData = function (num) {
        img.src = crewMembers[num].img;
        role.innerText = crewMembers[num].role;
        name.innerText = crewMembers[num].name;
        img.alt = crewMembers[num].role;
        detailText.innerText = crewMembers[num].text;
        console.log(img.alt);
      };
      if (nav.dataset.num === "1") {
        setData(0);
      }

      if (nav.dataset.num === "2") {
        setData(1);
      }
      // styling of detail-text width
      if (window.matchMedia("min-width: 1000px"))
        nav.dataset.num === "2"
          ? (detailText.style.width = "75%")
          : (detailText.style.width = "80%");
      if (window.matchMedia("min-width: 800px")) detailText.style.width = "66%";
      if (window.matchMedia("max-width: 545px")) detailText.style.width = "78%";

      if (nav.dataset.num === "3") {
        setData(2);
      }
      if (nav.dataset.num === "4") {
        setData(3);
      }
    });
  });
}

////////////////////////// TECHNOLOGY SUB-NAV

const technologyPage = document.querySelector(".technology");
if (technologyPage) {
  const launchTech = [
    {
      tech: "Launch Vehicle",

      text:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a " +
        "payload from Earth's surface to space, usually to Earth orbit or beyond. Our" +
        "WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall," +
        "it's quite an awe-inspiring sight on the launch pad!",
      img: "assets\\technology\\image-launch-vehicle-portrait.jpg",
    },
    {
      tech: "Spaceport",

      text:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft," +
        " by analogy to the seaport for ships or airport for aircraft. Based in the " +
        "famous Cape Canaveral, our spaceport is ideally situated to take advantage " +
        "of the Earth’s rotation for launch.",
      img: "assets\\technology\\image-spaceport-portrait.jpg",
    },
    {
      tech: "Space Capsule",
      text:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry " +
        "capsule to reenter the Earth's atmosphere without wings. Our capsule is where " +
        "you'll spend your time during the flight. It includes a space gym, cinema," +
        "and plenty of other activities to keep you entertained.",
      img: "assets\\technology\\image-space-capsule-portrait.jpg",
    },
  ];

  const numberBtns = document.querySelectorAll(".nav-num-btns");
  numberBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      removeActive(this.parentNode);
      btn.classList.add("active");
      const container = btn.closest(".technology__container");
      const imgContainer = container.querySelector(".technology__image-container");
      const img = container.querySelector(".technology__image");
      const detailText = container.querySelector(".technology__details-text p");
      const name = container.querySelector(".heading-3");

      const setData = function (num) {
        img.src = launchTech[num].img;
        name.innerText = launchTech[num].tech;
        img.alt = launchTech[num].tech;
        detailText.innerText = launchTech[num].text;
      }
      if (btn.dataset.num === "1") {
        setData(0);
      
        if (window.matchMedia("max-width: 900px")) {
          imgContainer.style.backgroundImage = "url(assets/technology/image-launch-vehicle-landscape.jpg)";
          
        }
        if (window.matchMedia("max-width: 545px")) {
          imgContainer.style.backgroundImage = "url(assets/technology/image-launch-vehicle-portrait.jpg)";
            imgContainer.style.backgroundPosition ="0 bottom";
        } 
          
        

    }
      

      if (btn.dataset.num === "2") {
        setData(1);
        if (window.matchMedia("max-width: 900px")) {
          imgContainer.style.backgroundImage = "url(/assets/technology/image-spaceport-landscape.jpg )";
          imgContainer.style.backgroundPosition = "center center";
        }
      }

      if (btn.dataset.num === "3") {
        setData(2);
        if (window.matchMedia("max-width: 900px")) {
          imgContainer.style.backgroundImage =
            "url(assets/technology/image-space-capsule-landscape.jpg )";
            imgContainer.style.backgroundPosition = "center center";
        }
      }
    });
  });
}
