// login.js
window.onload = function () {
  const loginBtn = document.querySelector("input[type='submit']");
  const usernameInput = document.querySelector("input[type='text']");
  const passwordInput = document.querySelector("input[type='password']");

  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const u = usernameInput.value.trim();
    const p = passwordInput.value.trim();

    if (!u || !p) {
      alert("Please enter both username and password!");
      return;
    }

    // proceed to welcome page
    window.location.href = "welcome.html";
  });
};
