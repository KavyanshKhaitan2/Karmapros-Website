text_to_show_on_home_screen = [];
var screen_width = window.innerWidth;
username = localStorage.getItem("username");

var hobbies = [
  "Good Morning "+username+"!",
  "Hi welcome to my website",
  "I'm a 9 year old farm and gamer boy that plays minecraft with friends all the time"
];

mobile_width = 725;

setInterval(() => {
  screen_width = window.innerWidth;
  if (screen_width > mobile_width) {
    // Check for a Larger Screen (Computer)
    console.log("Using a Computer...");
    document.getElementById("nav_desktop").style.display = "block";
    document.getElementById("nav_mobile").style.display = "none";
  }

  if (screen_width <= mobile_width) {
    // Check for a Smaller Screen (Mobile)
    console.log("Using a Mobile...");
    document.getElementById("nav_mobile").style.display = "block";
    document.getElementById("nav_desktop").style.display = "none";
  }
}, 100);

console.log(" _________  _____________    _________      _________    _ ");
console.log("|                 |         |         |    |         |  | |");
console.log("|                 |         |         |    |         |  | |");
console.log("|                 |         |         |    |_________|  | |");
console.log("|_________        |         |         |    |            | |");
console.log("         |        |         |         |    |            | |");
console.log("         |        |         |         |    |            |_|");
console.log("         |        |         |         |    |             _ ");
console.log("_________|        |         |_________|    |            |_|");
console.log(
  "Dont Paste Anything Here, there is a 11/10 chance of you getting scammed."
);


setTimeout(() => {
  if (username == null) {
    location.assign("/");
  } else {
    elements = document.getElementsByClassName("username");
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerHTML = username;
    }
  }
}, 10);



var textIn = "";
function TypingAnimation(keyphrase1, elementID) {
  element = document.getElementById(elementID);
  textIn = element.innerHTML;
  var ifa;
  keyphrase = keyphrase1;
  for (let i = 0; i < keyphrase.length + 1; i++) {
    setTimeout(() => {
      element.innerHTML = keyphrase.slice(0, i);
      console.log(keyphrase.slice(0, i));
    }, 100*i);
    ifa = i
  }
  setTimeout(() => {
    backspace(elementID);
  }, (100*ifa)+1000);
}

function backspace(elementID) {
  element = document.getElementById(elementID);
  str = element.innerHTML;
  for (let i = 0; i < str.length; i++) {
    work(i);
  }
  function work(i) {
      setTimeout(() => {
        element.innerHTML = str.slice(0, i);
        console.log(str.slice(0, i));
      }, 100*(str.length - i));
  }
}

function logout() {
  var value = prompt("Are you sure you want to logout? (y/n) Any other Input will lead to cancellation");
  if (value.toLowerCase() === "y") {
    localStorage.removeItem("username");
    window.location.reload();
  }
}

function hobbiesTypingAnimation(id, array = hobbies) {
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      var element = array[i];
      TypingAnimation(element, id);
    }, (6500*i));
  }
}


function hobbiesOnScreen(elementID = "typewriter", textArray = hobbies) {
  for (let i = 0; i < 1000; i++) {
    setTimeout(() => {
      hobbiesTypingAnimation(elementID, textArray);
    }, (6500*i)* textArray.length);
  }
}

hobbiesOnScreen();



function mobile_nav_toggle() {
  console.log("Starting to Toggle...");
  element2121212 = document.getElementById("mobile-popout");

  if(element2121212.style.display === "none") {
    console.log("Detected Closed...");
    console.log("Detected Closed...");
    console.log("Detected Closed...");
    element2121212.style.display = "block";
  } else {
    console.log("Detected Open...");
    console.log("Detected Open...");
    console.log("Detected Open...");
    element2121212.style.display = "none";
  }
}