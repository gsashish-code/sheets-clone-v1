let SHEET_DB = [];

const DEFAULT_STYLE = Object.freeze({
  bold: false,
  italic: false,
  underline: false,
  alignment: "left",
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
