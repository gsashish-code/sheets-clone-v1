const addressRowContainer = document.querySelector(
  CONTAINERS_NAMES.ADDRESS_ROW_CONTAINER
);
const addressColContainer = document.querySelector(
  CONTAINERS_NAMES.ADDRESS_COL_CONTAINER
);
const cellsContainer = document.querySelector(CONTAINERS_NAMES.CELLS_CONTAINER);
const addressBar = document.querySelector(CONTAINERS_NAMES.ADDRESS_BAR);

// ====================CELL PROPERTY SELECTOR =====================================
const cellPropertySelector = document.querySelector(
  CONTAINERS_NAMES.CELL_PROPERTY_SELECTOR
);
// ====================CELL PROPERTY SELECTOR NAME ==========
// CELL ACTIONS
const copyCellProperty = document.getElementById(CELL_PROPERTY_NAMES.COPY);
const cutCellProperty = document.getElementById(CELL_PROPERTY_NAMES.CUT);
const pasteCellProperty = document.getElementById(CELL_PROPERTY_NAMES.PASTE);

// CELL STYLES
const boldCellProperty = document.getElementById(CELL_PROPERTY_NAMES.BOLD);
const italicCellProperty = document.getElementById(CELL_PROPERTY_NAMES.ITALIC);
const underlineCellProperty = document.getElementById(
  CELL_PROPERTY_NAMES.UNDERLINE
);
// CELL ALIGNMENT
const leftAlignCellProperty = document.getElementById(
  CELL_PROPERTY_NAMES.LEFT_ALIGN
);
const centerAlignCellProperty = document.getElementById(
  CELL_PROPERTY_NAMES.CENTER_ALIGN
);
const rightAlignCellProperty = document.getElementById(
  CELL_PROPERTY_NAMES.RIGHT_ALIGN
);
// CELL PROPERTIES
const fontFamilyCellProperty = document.getElementById(
  CELL_PROPERTY_NAMES.FONT_FAMILY
);
const fontSizeCellProperty = document.getElementById(
  CELL_PROPERTY_NAMES.FONT_SIZE
);
const bgColorCellProperty = document.getElementById(
  CELL_PROPERTY_NAMES.BG_COLOR
);
const textColorCellProperty = document.getElementById(
  CELL_PROPERTY_NAMES.FONT_COLOR
);
