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
const destinationPage = document.querySelector('.destination')

const destinationNav = document.querySelectorAll('.destination__nav .nav__link')

const removeActive = function(parent){
  const child = parent.querySelectorAll('li')
  child.forEach(list => {
    list.classList.remove('active')
  })
}
if (destinationPage) {
  const planets = [
    { name: 'mars',
      text: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!,',
      distance:"225 mil. km",
      traveltime: "9 months",
    },
    { name: 'europa',
    text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a" +
    'winter lover’s dream. With an icy surface, it’s perfect for a bit of ' +
    'ice skating, curling, hockey, or simple relaxation in your snug '+
   " wintery cabin.",
   distance:"628 mil. km",
   traveltime: "3 years",
    },
    { name: 'titan',
      text: 'The only moon known to have a dense atmosphere other than Earth, Titan'+
      "is a home away from home (just a few hundred degrees colder!). As a "+
      "bonus, you get striking views of the Rings of Saturn.",
      distance:"1.6 bil. km",
      traveltime: "7 years",
  },{ name: 'moon',
      text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help"+
      "regain perspective and come back refreshed. While you’re there, take in some history " +
      "by visiting the Luna 2 and Apollo 11 landing sites.",
      distance:"384,400 km",
      traveltime: "3 days",
}
  ]


  
    console.log(destinationNav);
    destinationNav.forEach(nav => {
      nav.addEventListener('click', function(){
        removeActive(this.parentNode)
        nav.classList.add('active')
        const container  = nav.closest('.destination__container')
        const img = container.querySelector('.destination__image')
        const name = container.querySelector('.heading-2')
        const detailText = container.querySelector('.destination__details-text')
        const distance = container.querySelector('.distance')
        const travelTime = container.querySelector('.travel-time')
        if (nav.innerText === 'MARS') {
          img.src = '/assets/destination/image-mars.png'
          name.innerText = nav.innerText
          detailText.innerHTML = planets[0].text;
          distance.innerHTML = planets[0].distance
          travelTime.innerHTML = planets[0].traveltime
       
        };
        if (nav.innerText === 'EUROPA') {
          img.src = '/assets/destination/image-europa.png'
          name.innerText = nav.innerText
          detailText.innerHTML =  planets[1].text;
          distance.innerHTML = planets[1].distance
          travelTime.innerHTML = planets[1].traveltime
        };
        if (nav.innerText === 'TITAN') {
          img.src = '/assets/destination/image-titan.png'
          name.innerText = nav.innerText
          detailText.innerHTML =  planets[2].text;
          distance.innerHTML = planets[2].distance
          travelTime.innerHTML = planets[2].traveltime
        };
        if (nav.innerText === 'MOON') {
          img.src = '/assets/destination/image-moon.png'
          name.innerText = nav.innerText
          detailText.innerHTML =  planets[3].text;
          distance.innerHTML = planets[3].distance
          travelTime.innerHTML = planets[3].traveltime
        };
      })
    
    })
}
    