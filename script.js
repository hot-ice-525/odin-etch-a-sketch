console.log("hello");

const CONTAINER_SIZE = 790;
const numOfGrids = 16;

const container = document.querySelector(".container");

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