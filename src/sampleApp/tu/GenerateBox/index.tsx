import { useState } from "react";
import Button from "../../../components/atoms/Button";
import Input from "../../../components/atoms/Input";
import Title from "../../../components/atoms/Title";
import { randomHexColor } from "../../../utils";
import Box from "./Box";

export interface IBox {
  id: number;
  color: string;
  name: string;
}

export default function GenerateBox() {
  const [numberBoxes, setNumberBoxes] = useState<number>(0);
  const [boxes, setBoxes] = useState<IBox[]>([]);

  const generateBox = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setBoxes([]);
    return Array(numberBoxes)
      .fill({})
      .map((_, index) => {
        setBoxes((prev) => [
          ...prev,
          { id: index, color: randomHexColor(), name: `box #${index + 1}` },
        ]);
      });
  };

  return (
    <div className="w-2/3 mx-auto">
      <div className="text-center mb-5">
        <Title>Sample App - GenerateBox</Title>

        <div className="flex items-center gap-2 mb-6">
          <label className="text-black font-medium">Number of boxes:</label>
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
              <Input
                type="number"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNumberBoxes(Number(e.target.value))
                }
              />
            </div>
            <Button onClick={(e) => generateBox(e)}>
              <span className="">Generate</span>
            </Button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 max-w-md">
        {boxes?.map((box) => (
          <Box key={box.id} box={box} />
        ))}
      </div>
    </div>
  );
}
