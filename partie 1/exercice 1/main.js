let image1Change = document.querySelector("#image1");
let image2Change = document.querySelector("#image2");

image1Change.addEventListener("mouseenter", addImageOnMouseenter);
function addImageOnMouseenter(event) {
  event.target.classList.add("hidden");
  image2Change.classList.remove("hidden");
}

image2Change.addEventListener("mouseleave", changeImageOnMouseleave);
function changeImageOnMouseleave(event) {
  event.target.classList.add("hidden");

  image1Change.classList.remove("hidden");
}
