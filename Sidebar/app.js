const sidebartoggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

const sidebar = document.querySelector(".sidebar");

sidebartoggle.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});
