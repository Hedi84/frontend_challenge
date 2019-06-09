// this is the content of the slides saved as objects, stored in an array.
const slide1 = {
  title: "Mobile learning and apps",
  content: "Learners expect experiences they can touch and tools which are accessible from anywhere. We use HTML5 to build responsive content which learners can navigate like the apps and websites they love. One experience on any device.",
  icon: "far fa-copy"
}

const slide2 = {
  title: "Animations and video",
  content: "An eye-popping animation is a great way to open a course. It’s also a standalone asset to help you promote it. You can have a message from your CEO to open the training, video testimonials from some of your employees, interviews with your subject matter experts or dramatised scenarios using actors. You can film in a studio, on location or in virtual worlds (using green or blue screen).",
  icon: "fas fa-video"
}

const slide3 = {
  title:"Interaction and scenarios",
  content: "What makes great classroom training great? Often it’sthe instructor involving the audience, encouraginginteraction – and making eye contact. We believe onlinetraining is no different. Our elearning solutions are fullyinteractive, using activities, quizzes and highlydeveloped scenarios.",
  icon:"fas fa-chalkboard-teacher"
}

const slide4 = {
  title:"Gamification",
  content: "Game mechanics in learning motivate achievement bysatisfying psychological needs. We build in performanceindicators that measure how well learners doing as theyanswer questions, complete tasks or make decisions.This flags up weaker areas early on and spurs them onwhen they’re on a roll.",
  icon:"fas fa-gamepad"
}
const slides = []
slides[0] = slide1
slides[1] = slide2
slides[2] = slide3
slides[3] = slide4

// the left and right arrows of the carousel
document.querySelector("#arrow-left").addEventListener("click", (event) => {
  const nodeId = document.querySelector(".orange").id;
  document.querySelector(".orange").classList.remove("orange");
  changeSlideLeft(nodeId);
});

document.querySelector("#arrow-right").addEventListener("click", (event) => {
  const nodeId = document.querySelector(".orange").id;
  document.querySelector(".orange").classList.remove("orange");
  changeSlideRight(nodeId);
});

// To not repeat this code, there are two change slide functions for left and right
const changeSlideRight = (nodeId) => {
  if (Number(nodeId) < 4) {
    document.getElementById(`${Number(nodeId) + 1}`).classList.add("orange");
    document.getElementById('title').innerHTML = slides[nodeId].title;
    document.getElementById('content').innerHTML = slides[nodeId].content;
    document.getElementById('icon').className = slides[nodeId].icon;
  } else {
    document.getElementById("1").classList.add("orange");
    document.getElementById('title').innerHTML = slides[0].title;
    document.getElementById('content').innerHTML = slides[0].content;
    document.getElementById('icon').className = slides[0].icon;
  }
};

const changeSlideLeft = (nodeId) => {
  if (Number(nodeId) > 1) {
    document.getElementById(`${Number(nodeId) - 1}`).classList.add("orange");
    document.getElementById('title').innerHTML = slides[nodeId - 2].title;
    document.getElementById('content').innerHTML = slides[nodeId - 2].content;
    document.getElementById('icon').className = slides[nodeId - 2].icon;
  } else {
    document.getElementById("4").classList.add("orange");
    document.getElementById('title').innerHTML = slides[3].title;
    document.getElementById('content').innerHTML = slides[3].content;
    document.getElementById('icon').className = slides[3].icon;
  }
};

// these are the circle buttons of the carousel
const circleArray = document.querySelectorAll(".circle");

circleArray.forEach(function (circle) {
  circle.addEventListener("click", (event) => {
    const previousActive = document.querySelector(".orange");
    if (event.currentTarget != previousActive ) {
      previousActive.classList.remove("orange");
      const nodeClicked = event.currentTarget;
      changeSlideRight(nodeClicked.id - 1);
    };
  });
});

// swipe functionality
let startX = 0;
let endX = 0;

const touchField = document.getElementById('touch');

touchField.addEventListener('touchstart', function(event) {
    startX = event.changedTouches[0].screenX;
}, false);

touchField.addEventListener('touchend', function(event) {
    endX = event.changedTouches[0].screenX;
    touchDirection();
}, false);

const touchDirection = () => {
  if (endX != startX) {
    const nodeId = document.querySelector(".orange").id;
    document.querySelector(".orange").classList.remove("orange");
    if (endX < startX) {
      changeSlideRight(nodeId);
    } else if (endX > startX) {
      changeSlideLeft(nodeId);
    };
  }
};
