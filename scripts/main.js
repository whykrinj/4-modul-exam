const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const signInButton = document.getElementById("signIn");
const togglePasswordButton = document.getElementById("togglePassword");
const loginForm = document.getElementById("loginForm");

const correctPhone = "+998 77 014 55 77";
const correctPassword = "Dilmurod";

togglePasswordButton.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.trim().length > 0) {
    signInButton.disabled = false;
  } else {
    signInButton.disabled = true;
  }
});

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const phone = phoneInput.value.trim();
  const password = passwordInput.value.trim();

  if (phone === correctPhone && password === correctPassword) {
    showToast("Login successful! Welcome back, Isroilbek", "success");
  } else {
    showToast("Login failed: Invalid credentials", "error");
  }
});

function showToast(message, type) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.className = `fixed top-5 right-5 px-6 py-3 rounded-lg text-white shadow-lg ${
    type === "success" ? "bg-green-500" : "bg-red-500"
  }`;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}