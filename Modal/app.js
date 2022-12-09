const modalBtn = document.querySelector(" .modal-btn");

const ClosemodalBtn = document.querySelector(" .close-btn");

const modaloverlay = document.querySelector(".modal-overlay");

modalBtn.addEventListener("click", function () {
  modaloverlay.classList.toggle("open-modal");
});

ClosemodalBtn.addEventListener("click", function () {
  modaloverlay.classList.toggle("open-modal");
});
