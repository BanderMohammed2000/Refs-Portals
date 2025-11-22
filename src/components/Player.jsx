import { useState } from "react";
export default function Player() {
  const [name, setName] = useState("");
  function handleChange(e) {
    setName(e);
  }
  return (
    <section id="player">
      <h2>Welcome {name}</h2>
      <p>
        <input type="text" />
        <button
          value={name}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        >
          Set Name
        </button>
      </p>
    </section>
  );
}
