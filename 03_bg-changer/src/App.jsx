import { useState } from "react";
import ColorButton from "./components/ColorButton";

function App() {
  const [color, setColor] = useState("olive");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  }

  return (
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
          <ColorButton color="red" name="Red" handleColorChange={handleColorChange}/>
          <ColorButton color="green" name="Green" handleColorChange={handleColorChange}/>
          <ColorButton color="purple" name="Purple" handleColorChange={handleColorChange}/>
          <ColorButton color="olive" name="Olive" handleColorChange={handleColorChange}/>
          <ColorButton color="gray" name="Gray" handleColorChange={handleColorChange}/>
          <ColorButton color="orange" name="Orange" handleColorChange={handleColorChange}/>
          <ColorButton color="blue" name="Blue" handleColorChange={handleColorChange}/>
          <ColorButton color="pink" name="Pink" handleColorChange={handleColorChange}/>
          <ColorButton color="black" name="Black" handleColorChange={handleColorChange}/>
        </div>
      </div>
    </div>
  );
}

export default App;
