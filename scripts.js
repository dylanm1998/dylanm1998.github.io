const yearElement = document.querySelector("#year");
const avatar = document.querySelector(".avatar");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (avatar) {
  avatar.addEventListener("error", () => {
    avatar.classList.add("is-missing");
    avatar.alt = "Avatar image placeholder";
    avatar.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 346'%3E%3Crect width='320' height='346' rx='12' fill='%23eef2f7'/%3E%3Ccircle cx='160' cy='128' r='52' fill='%23b8c4d4'/%3E%3Cpath d='M72 274c14-52 55-82 88-82s74 30 88 82' fill='%23c9d3df'/%3E%3C/svg%3E";
  });
}
