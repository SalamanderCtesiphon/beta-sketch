const setRes = document.querySelector("#setRes");

let root = 0;

setRes.addEventListener("click", () => {
  root = prompt("Enter Number of Pixels per side:");
  makeDivs(root);
});

function makeDivs () {

  const container = document.querySelector("#container");
  let num = root * root;

  let rowNum = "";

  for(let i = 1; i <= root; i++) {
    rowNum += "auto "

  }
  container.style.gridTemplateColumns = rowNum;
  container.style.gridTemplateRows = rowNum;
  for(let i = 1; i <= num; i++) {
    const div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.flex = 1;
    div.setAttribute("class", "divChild");
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "gray";
    });
    div.addEventListener("mouseleave", () => {
      div.style.backgroundColor = "white";
    });
    container.appendChild(div);

    }
};

