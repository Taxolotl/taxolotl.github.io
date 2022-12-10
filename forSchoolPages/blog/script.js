var arrow = document.getElementById("arrow");
var up = true;
arrow.addEventListener("click", rotata);
var cite = document.getElementById("citations");

function rotata(){
  if(up){
    arrow.style.transform = "rotate(45deg)";
    up = false;
    cite.style = "display: block";
  }else{
    arrow.style.transform = "rotate(-45deg)";
    up = true;
    cite.style = "display: none";
  }
}
