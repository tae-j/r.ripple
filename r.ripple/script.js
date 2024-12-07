var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// moodD photo

var mood = document.getElementById("myMood");
var buton = document.getElementById("moodPic");
var spin = document.getElementsByClassName("close2")[0];

buton.onclick = function() {
  mood.style.display = "block";
}

spin.onclick = function() {
  mood.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == mood) {
    mood.style.display = "none";
  }
}

// subAb

var sub = document.getElementById("badAb");
var bish = document.getElementById("Absub");
var wow = document.getElementsByClassName("close3")[0];

bish.onclick = function() {
  sub.style.display = "block";
}

wow.onclick = function() {
  sub.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == sub) {
    sub.style.display = "none";
  }
} 