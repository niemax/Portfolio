import React, { useEffect, useState } from "react";

interface TestComponentProps {
  text?: string;
  arr?: number[];
  arrayOfObjects?: Person;
}

type Person = {
  name: string;
  age: number;
};

export const TestComponent: React.FC<TestComponentProps> = ({
  text,
  arr,
  arrayOfObjects,
}: TestComponentProps) => {
  const [person, setPerson] = useState<Person>();
  const [count, setCount] = useState(0);
  useEffect(() => {
    setPerson(arrayOfObjects);
    console.log(person);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "red",
        height: "10em",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <h1>{text}</h1>
      <button
        onClick={() => count < 10 && setCount(count + 1)}
        style={{
          height: 70,
          width: 100,
          borderRadius: 25,
          border: "2px solid yellow",
        }}
      >
        <p>increment count!</p>
      </button>
      <button
        style={{
          height: 70,
          width: 100,
          borderRadius: 25,
          border: "2px solid yellow",
        }}
        onClick={() => count > 0 && setCount(count - 1)}
      >
        <p>decrement count!</p>
      </button>

      <span style={{ marginLeft: 10, fontSize: 40, fontFamily: "monospace" }}>
        {count}
      </span>
    </div>
  );
};
