const checkbox1 = document.getElementById("check1");
const checkbox2 = document.getElementById("check2");
const button = document.getElementById("login");
function ChangeColor() {
  if (checkbox1.checked && checkbox2.checked) {
    button.style.backgroundColor = "#03c75a";
  } else {
    button.style.backgroundColor = "grey";
  }
}

document.getElementById("login").addEventListener("click", function () {
  if (checkbox1.checked && checkbox2.checked) {
    window.location.href = "success.html";
  }
});
