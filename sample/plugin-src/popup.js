console.info("popup script running here");

import "./style.css";

const element = document.createElement("span");
element.innerText = "change me in the code.";

document
  .getElementById("button")
  .addEventListener("click", () => document.body.appendChild(element));
