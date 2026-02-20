import React from "react";
import Kids from "../kidswear";

function KidsComponent() {
  return (
    <div>
      <h1>Kids Dress</h1>

      {Kids.map((item, index) => (
        <article key={index}>
          <img src={item.url} height="150" width="150" alt={item.name} />
          <p>{item.name}</p>
          <p>{item.color}</p>
        </article>
      ))}

    </div>
  );
}

export default KidsComponent;
