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
  const row = cell.getAttribute("data-row");
  const col = cell.getAttribute("data-col");

  addressBar.setAttribute("data-selected-row", row);
  addressBar.setAttribute("data-selected-col", col);
  console.log("SHEET_DB[row][col]", SHEET_DB[row][col]);
  updateCellProperties(SHEET_DB[row][col]);
  addressBar.value = address;
}
function getSelectedRowSelectedCol() {
  const row = addressBar.getAttribute("data-selected-row");
  const col = addressBar.getAttribute("data-selected-col");
  return { row, col };
}

function getActiveCellElement() {
  const { row, col } = getSelectedRowSelectedCol();
  // console.log(`.cell[data-row="${row}"][data-col="${col}"]`);
  return cellsContainer.querySelector(
    `.cell[data-row="${row}"][data-col="${col}"]`
  );
}
function updateCellProperties(data) {
  boldCellProperty.classList.toggle("active", data.bold);
  italicCellProperty.classList.toggle("active", data.italic);
  underlineCellProperty.classList.toggle("active", data.underline);
  leftAlignCellProperty.classList.toggle(
    "active",
    data.alignment === CELL_PROPERTY_NAMES.LEFT_ALIGN
  );
  centerAlignCellProperty.classList.toggle(
    "active",
    data.alignment === CELL_PROPERTY_NAMES.CENTER_ALIGN
  );
  rightAlignCellProperty.classList.toggle(
    "active",
    data.alignment === CELL_PROPERTY_NAMES.RIGHT_ALIGN
  );
  fontFamilyCellProperty.value = data.fontFamily;
  fontSizeCellProperty.value = data.fontSize;
  bgColorCellProperty.value = data.backgroundColor;
  textColorCellProperty.value = data.textColor;
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

  // selecting the first cell
  const firstCell = cellsContainer.querySelector(".cell");
  firstCell.focus();
  updateAddressBar(firstCell);
}

initGrid();
