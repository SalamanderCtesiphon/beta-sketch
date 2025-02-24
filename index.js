const container = document.querySelector("#container");


function makeDivs (container) {
  let root = 16;
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

makeDivs(container);
