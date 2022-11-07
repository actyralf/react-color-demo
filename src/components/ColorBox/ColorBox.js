import "../ColorInput/ColorInput";
import ColorInput from "../ColorInput/ColorInput";
import "./ColorBox.css";
const ColorBox = ({ color, onSubmitColor = () => {} }) => {
  function handleSubmitColor(color) {
    console.log(color);
    onSubmitColor(color);
  }
  return (
    <div
      className="colorbox"
      style={{
        backgroundColor: color.value,
      }}
    >
      <h3>{color.name}</h3>
      <p>{color.id}</p>
      <ColorInput color={color} onSubmitColor={handleSubmitColor} />
    </div>
  );
};

export default ColorBox;
