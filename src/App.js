import "./App.css";
import ColorBox from "./components/ColorBox/ColorBox";
import { useState } from "react";

// state für aktuelle Farbe
//

const initialColors = [
  {
    id: 1,
    name: "Blue Violet Color Wheel",

    value: "#540D6E",
  },
  {
    id: 2,
    name: "Paradise Pink",
    value: "#EE4266",
  },
  {
    id: 3,
    name: "Sunglow",
    value: "#FFD23F",
  },
];

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleSubmitColor(id, newColor) {
    setColors(
      colors.map((color) => {
        return {
          ...color,
          value: id === color.id ? newColor : color.id,
        };
      })
    );
  }

  return (
    <div className="App">
      {colors.map((color) => {
        return (
          <ColorBox
            key={color.id}
            color={color}
            onSubmitColor={(newColor) => {
              handleSubmitColor(color.id, newColor);
            }}
          />
        );
      })}
    </div>
  );
}

export default App;
