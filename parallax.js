(function () {
  var bg = document.getElementById("bg");
  var fg = document.getElementById("fg");

  var mouseX, mouseY;

  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function parallax() {
    var bgX = (window.innerWidth - mouseX) / 50;
    var bgY = (window.innerHeight - mouseY) / 50;

    bg.style.transform = "translate(" + bgX + "px, " + bgY + "px)";
    fg.style.transform = "translate(" + -bgX + "px, " + -bgY + "px)";

    window.requestAnimationFrame(parallax);
  }

  parallax();
})();
