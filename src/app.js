/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const who = ["Mi perro", "El profesor", "Un pájaro", "Un alien"];
  const action = ["comió", "rompió", "perdió", "se llevó"];
  const what = ["mi tarea", "el proyecto", "mis apuntes", "mi libro"];
  const when = ["ayer", "esta mañana", "hace un rato", "el lunes pasado"];

  function generateExcuse() {
    const randomWho = who[Math.floor(Math.random() * who.length)];
    const randomAction = action[Math.floor(Math.random() * action.length)];
    const randomWhat = what[Math.floor(Math.random() * what.length)];
    const randomWhen = when[Math.floor(Math.random() * when.length)];
    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  }

  document
    .getElementById("generateButton")
    .addEventListener("click", function() {
      document.querySelector(".excuse").textContent = generateExcuse();
    });

  document.querySelector(".excuse").textContent = generateExcuse();
};
