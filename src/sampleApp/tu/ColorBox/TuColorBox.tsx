import { useState } from "react";
import ColorBox from "./ColorBox";

export interface IBox {
  name: string;
  background: string;
}

const COLOR_LIST: IBox[] = [
  { name: "Red", background: "#FF6B6B" },
  { name: "Yellow", background: "#FFD93D" },
  { name: "Aqua", background: "#6BCBF7" },
  { name: "Purple", background: "#C77DFF" },
];

export default function TuColorBox() {
  const [selectedColor, setSelectedColor] = useState<string>("");

  function updateColor(color: string) {
    setSelectedColor(
      selectedColor === color ? "" : color
    );
  }

  return (
    <div className="w-2/3 mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          Sample App - ColorBox
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {COLOR_LIST.map((box, index) => (
          <ColorBox
            key={index}
            box={box}
            selectedColor={selectedColor}
            updateColor={updateColor}
          />
        ))}
      </div>
    </div>
  );
}
