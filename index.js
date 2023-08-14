const parrafo = document.querySelectorAll(".parrafo");
const section = document.querySelectorAll(".section");

parrafo.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("id", parrafo.id);
    parrafo.classList.add("dragging");
  });
  
  parrafo.addEventListener("dragend", () => {
    parrafo.classList.remove("dragging");
  });
});

section.forEach((section) => {
  section.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  section.addEventListener("drop", (e) => {
    const idParrafo = e.dataTransfer.getData("id");
    const parrafo = document.getElementById(idParrafo);
    section.appendChild(parrafo);
  });
});
