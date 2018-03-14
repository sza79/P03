function myFunction() {
    console.log("here is clicking");
    var x = document.getElementById("container");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else if (x.style.display === "block"){
        x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
