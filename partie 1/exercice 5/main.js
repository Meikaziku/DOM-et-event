let imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  img.addEventListener("mouseenter", replaceImgOnMouseEnter);
});

function replaceImgOnMouseEnter(event) {
  let imgTag = event.target;

  if (event.target.src.includes("_2.jpg")) {
    imgTag.src = imgTag.src.replace("_2.jpg", ".jpg");
  } else {
    imgTag.src = imgTag.src.replace(".jpg", "_2.jpg");
  }
}