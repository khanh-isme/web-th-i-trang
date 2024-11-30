// script.js

// Lấy các phần tử DOM
const loginForm = document.getElementById("login-form");
const loginWrapper = document.getElementById("login-wrapper");
const welcomeWrapper = document.getElementById("welcome-wrapper");
const greetingText = document.getElementById("greeting-text");

// Xử lý sự kiện khi nhấn nút đăng nhập
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Ngăn trình duyệt tải lại trang
  const username = document.getElementById("username").value;

  // Kiểm tra tên người dùng
  if (username.trim() !== "") {
    // Cập nhật nội dung chào mừng
    greetingText.textContent = `Hi, ${username}`;

    // Chuyển từ giao diện đăng nhập sang giao diện chào
    loginWrapper.style.display = "none";
    welcomeWrapper.style.display = "flex";
  }
});
