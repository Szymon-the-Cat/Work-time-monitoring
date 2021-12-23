const posts = document.querySelectorAll(".post");

posts.forEach((post) => {
  post.addEventListener("click", function (event) {
    const isTextSelected = window.getSelection().toString();
    if (!isTextSelected) {
      const main = post.querySelector(".main-link");
      main.click();
    }
  });
});
