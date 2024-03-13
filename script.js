let node = document.querySelector(".outer");
let input = document.querySelector("input");
let btn = document.querySelector("button");

let line = "strike";
let remember = document.querySelector("p");

remember.addEventListener("click", () => {
  if (line == "strike") {
    remember.style.textDecoration = "line-through";
    line = "notskrike";
  } else {
    remember.style.textDecoration = "none";
    line = "strike";
  }
});
input.innerText = input.value;

function addPara() {
  node.innerHTML += "<p class='para'>" + input.value + "</p>";
}

btn.addEventListener("click", () => {
  if (input.value) {
    addPara();
    input.value = null;
    let para = document.querySelectorAll(".para");
    para.forEach((val) => {
      val.addEventListener("click", () => {
        val.classList.add("line-through");
      });
    });
  }
});

// ================================

// let check = document.querySelector("#check");
// check.addEventListener("click",()=>{

// })
