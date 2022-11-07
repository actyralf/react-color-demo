import { useState } from "react";

const ColorInput = ({ color, onSubmitColor = () => {} }) => {
  const [newColor, setNewColor] = useState(color.value);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitColor(newColor);
        // alert(
        //   `Jetzt muss der Wert ${newColor} an die ColorBox übergeben werden`
        // );
      }}
    >
      <input
        type="text"
        value={newColor}
        onChange={(event) => {
          setNewColor(event.target.value);
        }}
      />
      <button>Update</button>
      <p>{newColor}</p>
    </form>
  );
};

export default ColorInput;
