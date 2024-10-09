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
