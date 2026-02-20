import React from "react";
import Modern from "../../jay-app/src/Modern";

function Mod() {
  return (
    <div>
      <h1>Modern Dress</h1>

      {Modern.map((item, index) => (
        <article key={index}>
          <img src={item.url} height="150" width="150" alt={item.name} />
          <p>{item.name}</p>
          <p>{item.color}</p>
        </article>
      ))}

    </div>
  );
}

export default Mod;
