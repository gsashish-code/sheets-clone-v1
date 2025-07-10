let ROW = 100;
let COL = 26;

const addressRowContainer = document.querySelector(".address-row-container");
const addressColContainer = document.querySelector(".address-col-container");
const cellsContainer = document.querySelector(".cells-container");
const addressBar = document.querySelector(".address-bar");

function addHeaderCellRow() {
  for (let i = 0; i < COL; i++) {
    const addressRow = document.createElement("div");
    addressRow.classList.add("address-row");
    addressRow.innerText = String.fromCharCode(65 + i);
    addressRowContainer.appendChild(addressRow);
  }
}

function addHeaderCellCol() {
  for (let i = 0; i < ROW; i++) {
    const addressCol = document.createElement("div");
    addressCol.classList.add("address-col");
    addressCol.innerText = i + 1;
    addressColContainer.appendChild(addressCol);
  }
}
// create grid cells
function createCell(row, col) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.setAttribute("contenteditable", "true");
  cell.setAttribute(
    "data-address",
    `${String.fromCharCode(65 + col)}${row + 1}`
  );
  cell.setAttribute("data-row", `${row}`);
  cell.setAttribute("data-col", `${col}`);
  return cell;
}

// generate grid cells
function generateCells() {
  for (let i = 0; i < ROW; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let j = 0; j < COL; j++) {
      const cell = createCell(i, j);
      rowDiv.appendChild(cell);
    }
    cellsContainer.appendChild(rowDiv);
  }
}

function updateAddressBar(cell) {
  const address = cell.getAttribute("data-address");
  addressBar.value = address;
}

function attachCellEvents() {
  cellsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("cell")) {
      updateAddressBar(e.target);
    }
  });
}
//  ====================== INIT GRID   ===========================================
function initGrid() {
  // creating Headers
  addHeaderCellRow();
  addHeaderCellCol();
  // generating cells
  generateCells();
  // attaching events
  attachCellEvents();
}

initGrid();
