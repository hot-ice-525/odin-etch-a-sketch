console.log("hello");

const CONTAINER_SIZE = 790;
let numOfGrids = 16;

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  do {
    numOfGrids = +prompt("Enter the size of new grid (less than 100): ");
  } while (numOfGrids > 100);

  // Handling undefined values
  if (!numOfGrids) {
    numOfGrids = 16;
  }

  createNewGrid(numOfGrids);
});

const container = document.querySelector(".container");
createNewGrid(numOfGrids);

function createNewGrid(numOfGrids) {
  // Making sure container is empty before new grid formation
  container.innerHTML = "";

  // A loop for laying numOfGrids rows
  for (let i = 0; i < numOfGrids; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
  }

  // A loop for laying numOfGrids columns inside each row
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    for (let i = 0; i < numOfGrids; i++) {
      let column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
    }
  });

  return;
}

// Add hovering effects
container.addEventListener("mouseover", (e) => {
  if (e.target.classList.value == "column" && !e.target.hasAttribute("style")) {    // We don't want to color entire container or an entire row
    e.target.style["background-color"] = randomRGBgenerator();
  }
});

// Double click to remove color
container.addEventListener("click", (e) => {
  if (e.target.classList.value == "column" && e.target.hasAttribute("style")) {
    e.target.removeAttribute("style");
  }
});

function randomRGBgenerator() {
  let r = Math.ceil(Math.random() * 255);
  let g = Math.ceil(Math.random() * 255);
  let b = Math.ceil(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}