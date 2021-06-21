mobile_width = 725;
username = localStorage.getItem("username");

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

function mobile_nav_toggle() {
  console.log("Starting to Toggle...");
  element2121212 = document.getElementById("mobile-popout");

  if (element2121212.style.display === "none") {
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

function logout() {
  var value = prompt(
    "Are you sure you want to logout? (y/n) Any other Input will lead to cancellation"
  );
  if (value.toLowerCase() === "y") {
    localStorage.removeItem("username");
    window.location.reload();
  }
}

setTimeout(() => {
  no_of_posts = blogposts.length;
  console.log("No of BlogPosts is " + no_of_posts);
  var finalContent = "";
  
  for (let i = 0; i < no_of_posts; i++) {
    var content = "";
    var halfPost = blogposts[i].blog_content.slice(0, 200) + "...";
    content+=`<div style="cursor:pointer;" title="Click to Go To Blog Post" onclick='redirectToBlogPost(` + i + `)'>
      <h1 style="font-size: 25px;">`+ blogposts[i].title +`</h1>
      <p>`+halfPost+`</p>
      <button>Read More...</button>
      <br><br><br><br>
    </div>
    <hr>`


    finalContent += content;
  }

  document.getElementById("posts").innerHTML = finalContent;
}, 500);


function redirectToBlogPost(blogID) {
  localStorage.setItem("currentBlog", blogID);
  window.location = "blogpost";
}