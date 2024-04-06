import bewakoof from "./bewakoof.js";
import React from "react";
import Split from "./Split.js";

export default function App() {
  const statements = bewakoof.map((item) => {
    return (
      <div key={item.header}>
        <Split data={[item]} header={item.header} />
      </div>
    );
  });

  return <div>{statements}</div>;
}
