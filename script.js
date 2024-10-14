function openFormAssignment3() {
  document.getElementById("myForm").style.display = "block";
  document.getElementsByClassName("open-button")[0].style.display = "none";
  closeFormAssignment4();
}

function closeFormAssignment3() {
  document.getElementById("myForm").style.display = "none";
  document.getElementsByClassName("open-button")[0].style.display = "block";
}

function openFormAssignment4() {
  document.getElementById("myForm1").style.display = "block";
  document.getElementsByClassName("open-button")[1].style.display = "none";
  closeFormAssignment3();
}

function closeFormAssignment4() {
  document.getElementById("myForm1").style.display = "none";
  document.getElementsByClassName("open-button")[1].style.display = "block";
}

function myFunction(x) {
  x.classList.toggle("change");

  var menuDiv = document.getElementsByClassName("menu-div")[0];

  if (menuDiv.style.display === "grid") {
    menuDiv.style.display = "none";
  } else {
    menuDiv.style.display = "grid";
  }
}

// function upToPage(){
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: 'smooth'
//   });
// }

function slowScrollToTop(duration) {
  const startPosition = window.pageYOffset;
  const startTime = performance.now();

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1); // Ensure progress does not exceed 1
    const scrollY = startPosition * (1 - progress); // Gradually decrease the scroll position

    window.scrollTo(0, scrollY);

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue scrolling
    }
  }

  requestAnimationFrame(scrollStep);
}

// Usage: scroll to top in 2 seconds (2000 milliseconds)
slowScrollToTop(2000);

