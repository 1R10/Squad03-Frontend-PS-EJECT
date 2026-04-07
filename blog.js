const card1 = document.getElementById("blog-1");
const card2 = document.getElementById("blog-2");
const card3 = document.getElementById("blog-3");
const card4 = document.getElementById("blog-4");

if (card1) {
  card1.addEventListener("click", () => {
    localStorage.setItem(
      "postSelect",
      "1",
    )((window.location.href = "content-blog.html"));
  });
}
if (card2)
  card2.addEventListener("click", () =>
    localStorage.setItem("postSelect", "2"),
  );
if (card3)
  card3.addEventListener("click", () =>
    localStorage.setItem("postSelect", "3"),
  );
if (card4)
  card4.addEventListener("click", () =>
    localStorage.setItem("postSelect", "4"),
  );

document.addEventListener("DOMContentLoaded", function () {
  const choice = localStorage.getItem("postSelect");

  const content1 = document.querySelector(".content-1");
  const content2 = document.querySelector(".content-2");
  const content3 = document.querySelector(".content-3");
  const content4 = document.querySelector(".content-4");

  if (choice === "1" && content1) {
    content1.style.display = "flex";
  }
  if (choice === "2" && content2) {gi
    content2.style.display = "flex";
  }
  if (choice === "3" && content3) {
    content3.style.display = "flex";
  }
  if (choice === "4" && content4) {
    content4.style.display = "flex";
  }
});
