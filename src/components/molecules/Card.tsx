import React from "react";
import type { Person } from "../../pages/fundamental/Props";

/* access properties in object
object.name
object['name']

render component into jsx
- <></>
- viết hoa từ đầu tiên

*/

interface CardProps {
  name: string;
  isLoading?: boolean;
  onClick: () => void;
  person: Person;
  colors: string[];
  component1: React.ElementType;
  component2: React.ReactNode;
  "name-bird": string;
}

function Card({
  name,
  isLoading = false,
  component1: Component1,
  component2,
  ...restProps
}: CardProps) {
  return (
    <div>
      Component1: <Component1 text="Component1" /> <br />
      Component2: {component2}
    </div>
  );
}

export default Card;
