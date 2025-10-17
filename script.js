function showDevelopers() {
  document.getElementById("developers-block").style.display = "flex";
  document.getElementById("dev-btn").style.display = "none";
  document.getElementById("eng-btn").style.display = "none";
}
function showEngineers() {
  document.getElementById("engineers-block").style.display = "flex";
  document.getElementById("eng-btn").style.display = "none";
  document.getElementById("dev-btn").style.display = "none";
}
function backDevelopers(){
  document.getElementById("developers-block").style.display = "none";
  document.getElementById("dev-btn").style.display = "flex";
  document.getElementById("eng-btn").style.display = "flex";
}

function backEngineers(){
  document.getElementById("engineers-block").style.display = "none";
  document.getElementById("eng-btn").style.display = "flex";
  document.getElementById("dev-btn").style.display = "flex";
}