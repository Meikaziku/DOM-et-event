// let section = document.querySelector("#FirstSection");
// let divWithClass = document.querySelector(".seconDiv");
// let paragraph = document.querySelectorAll("p");
// // console.log(paragraph);

// let newDiv = document.createElement("div");

// let article = document.querySelector('article');

// article.appendChild(newDiv);

let divClickable = document.querySelector(".divOne");

divClickable.addEventListener("click", addDivOnClick);

function addDivOnClick() {
  let seconDiv = document.createElement("div");
  let main = document.querySelector("main");
  main.appendChild(seconDiv);

 console.log(main);
 
}

