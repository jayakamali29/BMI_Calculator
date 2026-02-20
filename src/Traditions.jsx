import React from "react";
import Dress from "../../jay-app/src/Traditional";

function Traditions() {
  return (
    <div>
      <h1>Traditional Dress</h1>

      {Dress.map((item, index) => (
        <article key={index}>
          <img src={item.url} height="150" width="150" alt={item.name} />
          <p>{item.name}</p>
          <p>{item.color}</p>
        </article>
      ))}

    </div>
  );
}

export default Traditions;
