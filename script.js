const menuBtn = document.querySelector("#menu_btn");
const closeBtn = document.querySelector("#close_btn");
const list = document.querySelector(".navbar .list");

menuBtn.addEventListener("click", () => {
  list.classList.add("active");
  closeBtn.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  list.classList.remove("active");
  closeBtn.classList.remove("active");
});
