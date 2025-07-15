let SHEET_DB = [];

const DEFAULT_STYLE = Object.freeze({
  bold: false,
  italic: false,
  underline: false,
  alignment: CELL_PROPERTY_NAMES.LEFT_ALIGN,
  fontSize: 14,
  fontFamily: "Arial",
  backgroundColor: "#f1f2f6",
  textColor: "#000000",
});

function createInitialCellDB() {
  const cellDB = [];
  for (let i = 0; i < ROW; i++) {
    const row = [];
    for (let j = 0; j < COL; j++) {
      row.push({
        address: `${String.fromCharCode(65 + j)}${i + 1}`,
        value: "",
        formula: "",
        ...DEFAULT_STYLE,
      });
    }
    cellDB.push(row);
  }
  return cellDB;
}

function initCellDB() {
  SHEET_DB = createInitialCellDB();
}

initCellDB();

function getCell(row, col) {
  if (row < 0 || row >= ROW || col < 0 || col >= COL) {
    throw new Error("Invalid cell coordinates");
  }
  return SHEET_DB[row][col];
}
function setCell(row, col, cellData) {
  if (row < 0 || row >= ROW || col < 0 || col >= COL) {
    throw new Error("Invalid cell coordinates");
  }
  SHEET_DB[row][col] = { ...SHEET_DB[row][col], ...cellData };
}
function setActiveCell(cellData) {
  const { row, col } = getSelectedRowSelectedCol();
  if (row < 0 || row >= ROW || col < 0 || col >= COL) {
    throw new Error("Invalid cell coordinates");
  }
  SHEET_DB[row][col] = { ...SHEET_DB[row][col], ...cellData };
}

function getSheetDB() {
  return SHEET_DB;
}
function getActiveCellProperty() {
  const { row, col } = getSelectedRowSelectedCol();
  return getCell(row, col);
}
