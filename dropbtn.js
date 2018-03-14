
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  var w =window.innerWidth;
if (window.matchMedia("(min-width: 990px)").matches) {
  document.getElementById("myDropdown").classList.toggle("show");
}
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  var w =window.innerWidth;
  if (window.matchMedia("(min-width: 990px)").matches) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
}
