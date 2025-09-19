import type { IBox } from ".";

export default function Box({ box }: { box: IBox }) {
  return (
    <div
      key={box.id}
      className={`w-20 h-20 flex items-center justify-center text-black font-medium text-sm`}
      style={{ backgroundColor: box.color }}
    >
      <span className="text-white">{box.name}</span>
    </div>
  );
}
