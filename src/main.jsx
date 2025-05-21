import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Emojipedia from "./Emojipedia";
import emojies from "./emojies.js";

function Emojie(emo) {
  return (
    <Emojipedia
      key={emo.id}
      img={emo.img}
      name={emo.name}
      details={emo.details}
    />
  );
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1 className="head">EMOJYPEDIA</h1>
    <div className="main-root">{emojies.map(Emojie)}</div>
  </StrictMode>
);
