let image = document.querySelector("#image1");

image.addEventListener("mouseenter", addImageBorderColor);

function addImageBorderColor(event) {
  let imgAddBg = event.target;

  imgAddBg.classList.add("borderColor");
}

image.addEventListener("mouseleave", removeImageBorderColor);
function removeImageBorderColor(event) {
  let imgAddBg = event.target;

  imgAddBg.classList.remove("borderColor");
}
