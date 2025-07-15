cellPropertySelector.addEventListener("click", (e) => {
  const currentSelectedProperty = e.target;
  const cellPropertyKeys = new Set(Object.values(CELL_PROPERTY_NAMES));

  if (cellPropertyKeys.has(currentSelectedProperty.id)) {
    const selectedCell = getActiveCellElement();
    const activeCellProps = getActiveCellProperty();
    // console.log({ selectedCell, activeCellProps });
    switch (currentSelectedProperty.id) {
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
        {
          activeCellProps.bold = !activeCellProps.bold;
          selectedCell.style.fontWeight = activeCellProps.bold
            ? "bold"
            : "normal";
          boldCellProperty.classList.toggle("active", activeCellProps.bold);
          setActiveCell(activeCellProps);
        }

        break;
      case CELL_PROPERTY_NAMES.ITALIC:
        {
          activeCellProps.italic = !activeCellProps.italic;
          selectedCell.style.fontStyle = activeCellProps.italic
            ? "italic"
            : "normal";
          italicCellProperty.classList.toggle("active", activeCellProps.italic);
          setActiveCell(activeCellProps);
        }
        break;
      case CELL_PROPERTY_NAMES.UNDERLINE:
        {
          activeCellProps.underline = !activeCellProps.underline;
          console.log("activeCellProps.underline", activeCellProps.underline);
          selectedCell.style.textDecoration = activeCellProps.underline
            ? "underline"
            : "none";
          underlineCellProperty.classList.toggle(
            "active",
            activeCellProps.underline
          );
          setActiveCell(activeCellProps);
        }
        break;
      case CELL_PROPERTY_NAMES.LEFT_ALIGN:
        {
          console.log("left align");
          const isLeftAlign = activeCellProps.alignment === "left";
          activeCellProps.alignment = isLeftAlign
            ? DEFAULT_STYLE.alignment
            : "left";
          selectedCell.style.textAlign = activeCellProps.alignment;
          leftAlignCellProperty.classList.toggle(
            "active",
            activeCellProps.alignment === CELL_PROPERTY_NAMES.LEFT_ALIGN
          );
          setActiveCell(activeCellProps);
        }

        break;
      case CELL_PROPERTY_NAMES.CENTER_ALIGN:
        {
          console.log("center align");
          const isCenterAlign = activeCellProps.alignment === "center";
          activeCellProps.alignment = isCenterAlign
            ? DEFAULT_STYLE.alignment
            : "center";
          centerAlignCellProperty.classList.toggle(
            "active",
            activeCellProps.alignment === CELL_PROPERTY_NAMES.CENTER_ALIGN
          );
          selectedCell.style.textAlign = activeCellProps.alignment;
          setActiveCell(activeCellProps);
        }
        break;
      case CELL_PROPERTY_NAMES.RIGHT_ALIGN:
        {
          const isRightAlign = activeCellProps.alignment === "right";
          activeCellProps.alignment = isRightAlign
            ? DEFAULT_STYLE.alignment
            : "right";
          rightAlignCellProperty.classList.toggle(
            "active",
            activeCellProps.alignment === CELL_PROPERTY_NAMES.RIGHT_ALIGN
          );
          selectedCell.style.textAlign = activeCellProps.alignment;
          setActiveCell(activeCellProps);
        }

        break;

      default:
        break;
    }
  }
});

cellPropertySelector.addEventListener("change", (e) => {
  const selectedCell = getActiveCellElement();
  const activeCellProps = getActiveCellProperty();
  const { id, value } = e.target;
  console.log({ id, value });
  switch (id) {
    case CELL_PROPERTY_NAMES.FONT_FAMILY:
      {
        selectedCell.style.fontFamily = value;
        activeCellProps.fontFamily = value;
        fontFamilyCellProperty.value = activeCellProps.fontFamily;
        setActiveCell(activeCellProps);
      }
      break;
    case CELL_PROPERTY_NAMES.FONT_SIZE:
      {
        selectedCell.style.fontSize = `${value}px`;
        activeCellProps.fontSize = value;
        fontSizeCellProperty.value = value;
        setActiveCell(activeCellProps);
      }
      break;
    case CELL_PROPERTY_NAMES.BG_COLOR:
      {
        selectedCell.style.backgroundColor = value;
        activeCellProps.backgroundColor = value;
        bgColorCellProperty.value = value;
        setActiveCell(activeCellProps);
      }
      break;
    case CELL_PROPERTY_NAMES.FONT_COLOR:
      {
        selectedCell.style.color = value;
        activeCellProps.textColor = value;
        textColorCellProperty.value = value;
        setActiveCell(activeCellProps);
      }
      break;
    default:
      break;
  }
});
