var timer = 60;
var clutter = " ";
var score = 0;
var hitrn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
function newHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble() {
  for (var i = 1; i <= 144; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(".pbottom").innerHTML = clutter;
}
function runTimer() {
  var timerr = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerr);
      document.querySelector("#pbtm").innerHTML = `<h1>Game over</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitrn) {
    increaseScore();
    makeBubble();
    newHit();
  }
});
makeBubble();
runTimer();
newHit();
