const grid = document.querySelector(".grid");
const columnStates = { 1: false, 2: false, 3: false, 4: false, 5: false };

grid.addEventListener("click", (e) => {
  const cell = e.target.closest(".cell");
  if (!cell) return;


  document
    .querySelectorAll(".cell")
    .forEach((c) => (c.style.setProperty("background-color", "", "important")));
 
  const row = cell.dataset.row;
  const col = cell.dataset.col;

  if (!columnStates[col]) {
    document
      .querySelectorAll(`[data-col="${col}"]`)
      .forEach((c) => (c.style.backgroundColor = "lightblue"));
    cell.classList.toggle("active");
  }
  if (columnStates[col]) {
    document
      .querySelectorAll(`[data-row="${row}"]`)
      .forEach((c) => (c.style.backgroundColor = "lightblue"));
    cell.classList.toggle("active");
  }

  columnStates[col] = !columnStates[col];


});
