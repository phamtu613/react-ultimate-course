import type { IBox } from "./TuColorBox";

interface ColorBoxProps {
  box: IBox;
  selectedColor: string;
  updateColor: (color: string) => void;
}
export default function ColorBox({
  box,
  selectedColor,
  updateColor,
}: ColorBoxProps) {
  return (
    <div
      className="cursor-pointer transition-all duration-300 h-28 hover:scale-105 flex items-center justify-center rounded-sm"
      style={{
        backgroundColor: selectedColor ? selectedColor : box.background,
      }}
      onClick={() => updateColor(box.background)}
    >
      <h3 className="text-white font-bold text-lg">{box.name}</h3>
    </div>
  );
}
