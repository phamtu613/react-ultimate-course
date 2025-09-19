import type { IColor } from "./TuColorBox";

interface ColorBoxProps {
  color: IColor;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}
export default function ColorBox({
  color,
  selectedColor,
  setSelectedColor,
}: ColorBoxProps) {
  const handleClickBox = () => {
    setSelectedColor(
      selectedColor === color.background ? "" : color.background
    );
  };
  return (
    <div
      className="cursor-pointer transition-all duration-300 h-28 hover:scale-105 flex items-center justify-center rounded-sm"
      style={{
        backgroundColor: selectedColor ? selectedColor : color.background,
      }}
      onClick={handleClickBox}
    >
      <h3 className="text-white font-bold text-lg">{color.name}</h3>
    </div>
  );
}
