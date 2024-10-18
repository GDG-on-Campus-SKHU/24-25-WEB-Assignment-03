document.getElementById("login").addEventListener("click", function () {
  const id = document.getElementById("id").value.trim();
  const pw = document.getElementById("pw").value.trim();

  if (id === "") {
    alert("아이디를 입력해주세요.");
    return;
  }

  if (pw === "") {
    alert("비밀번호를 입력해주세요.");
    return;
  }

  window.location.href = "success.html";
});
