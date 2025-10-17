import { useLayoutEffect, useState } from "react";

const colors = ["red", "yellow", "green"];

export default function TrafficLight() {
  const [lightColor, setLightColor] = useState("red");

  useLayoutEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (lightColor === "red") {
      timer = setTimeout(() => {
        setLightColor("green");
      }, 5000);
    }
    if (lightColor === "green") {
      timer = setTimeout(() => {
        setLightColor("yellow");
      }, 4000);
    }
    if (lightColor === "yellow") {
      timer = setTimeout(() => {
        setLightColor("red");
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [lightColor]);

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center justify-center w-24 h-80 bg-gray-900 rounded-2xl p-3 shadow-2xl gap-4">
          {colors.map((color) => (
            <div
              key={color}
              className="w-16 h-16 rounded-full shadow-inner"
              style={{
                backgroundColor:
                  lightColor === color
                    ? color === "yellow"
                      ? "#ffe23b"
                      : color === "green"
                      ? "#43ea57"
                      : "#f00"
                    : "#5e5d5d",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
