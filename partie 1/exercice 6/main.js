let imgs = document.querySelectorAll("img");

imgs.forEach((img) => {


  img.addEventListener("mouseenter", replaceImgOnMouseEnter);
});

function replaceImgOnMouseEnter(event) {
  let imgTag = event.target;
  console.log(imgTag);

  imgTag.src = imgTag.src.replace(".jpg", "_2.jpg");
  imgTag.removeEventListener("mouseenter", replaceImgOnMouseEnter);
  imgTag.addEventListener("mouseleave", replaceImgOnMouseLeave);
  
}

function replaceImgOnMouseLeave(event) {
  let imgTag = event.target;
  console.log(imgTag);

  imgTag.src = imgTag.src.replace("_2.jpg", ".jpg");
  imgTag.removeEventListener("mouseleave", replaceImgOnMouseLeave);
  imgTag.addEventListener("mouseenter", replaceImgOnMouseEnter);
}
