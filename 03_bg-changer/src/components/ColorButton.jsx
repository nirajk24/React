const ColorButton = ( {color, name, handleColorChange} ) => {
  return (
    <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: color }}
      onClick={() => {handleColorChange(color)}}
    >
      {name}
    </button>
  );
};

export default ColorButton;
