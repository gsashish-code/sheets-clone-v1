cellPropertySelector.addEventListener("click", (e) => {
  const currentTarget = e.target;
  const cellPropertyKeys = new Set(Object.values(CELL_PROPERTY_NAMES));

  if (cellPropertyKeys.has(currentTarget.id)) {
    switch (currentTarget.id) {
      case CELL_PROPERTY_NAMES.COPY:
        console.log("copy");
        break;
      case CELL_PROPERTY_NAMES.CUT:
        console.log("cut");
        break;
      case CELL_PROPERTY_NAMES.PASTE:
        console.log("paste");
        break;
      case CELL_PROPERTY_NAMES.BOLD:
        console.log("bold");
        break;
      case CELL_PROPERTY_NAMES.ITALIC:
        console.log("italic");
        break;
      case CELL_PROPERTY_NAMES.UNDERLINE:
        console.log("underline");
        break;
      case CELL_PROPERTY_NAMES.LEFT_ALIGN:
        console.log("left align");
        break;
      case CELL_PROPERTY_NAMES.CENTER_ALIGN:
        console.log("center align");
        break;
      case CELL_PROPERTY_NAMES.RIGHT_ALIGN:
        console.log("right align");
        break;
      case CELL_PROPERTY_NAMES.FONT_FAMILY:
        console.log("font family");
        break;
      case CELL_PROPERTY_NAMES.FONT_SIZE:
        console.log("font size");
        break;
      case CELL_PROPERTY_NAMES.BG_COLOR:
        console.log("bg color");
        break;
      case CELL_PROPERTY_NAMES.FONT_COLOR:
        console.log("font color");
        break;

      default:
        break;
    }
  }
});
