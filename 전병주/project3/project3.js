document.getElementById("enterjoin").addEventListener("click", function () {
  document.querySelector(".container").style.display = "block";
});

document.getElementById("close").addEventListener("click", function () {
  document.querySelector(".container").style.display = "none";
});

document.getElementById("clickjoin").addEventListener("click", function () {
  const id = document.getElementById("id").value.trim();
  const pw = document.getElementById("pw").value;
  const email = document.getElementById("email").value.trim();
  const birth = document.getElementById("birth").value;
  const phonenumber = document.getElementById("phonenumber").value.trim();
  const error = document.getElementById("error");

  const isSuccess =
    id.length >= 3 &&
    pw.length >= 6 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    /^\d{4}-\d{2}-\d{2}$/.test(birth) &&
    /^\d{11}$/.test(phonenumber) &&
    id &&
    pw &&
    email &&
    birth &&
    phonenumber;

  if (!isSuccess) {
    error.style.visibility = "visible";
  } else {
    error.style.visibility = "hidden";
    window.location.href = "success.html";
  }
});
