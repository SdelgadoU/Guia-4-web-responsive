"use strict";
document.documentElement.classList.add("js");
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#menu");
function closeMenu(returnFocus = false) {
  menu.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false");
  if (returnFocus) toggle.focus();
}
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});
menu.addEventListener("click", event => { if (event.target.closest("a")) closeMenu(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menu.classList.contains("is-open")) closeMenu(true);
});
window.matchMedia("(min-width: 1024px)").addEventListener("change", () => closeMenu());
const cards = [...document.querySelectorAll(".dish")];
document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    cards.forEach(card => { card.hidden = button.dataset.filter !== "todos" && card.dataset.category !== button.dataset.filter; });
    const count = cards.filter(card => !card.hidden).length;
    document.querySelector("#filter-status").textContent = `${count} ${count === 1 ? "plato disponible" : "platos disponibles"}`;
  });
});
const form = document.querySelector("#reserva");
const date = document.querySelector("#fecha");
const nameInput = document.querySelector("#nombre");
const status = document.querySelector("#form-status");
function localToday() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-${String(now.getDate()).padStart(2,"0")}`;
}
date.min = localToday();
function validateFields() {
  date.min = localToday();
  nameInput.setCustomValidity(nameInput.value.trim().length < 2 ? "Escribe un nombre de al menos dos caracteres." : "");
  date.setCustomValidity("");
  if (date.value) {
    if (date.value < date.min) date.setCustomValidity("Elige hoy o una fecha futura.");
    else if (new Date(`${date.value}T12:00:00`).getDay() === 1) date.setCustomValidity("Los lunes estamos cerrados. Elige otro día.");
  }
}
form.addEventListener("input", () => { status.textContent = ""; validateFields(); });
form.addEventListener("submit", event => {
  event.preventDefault(); validateFields(); if (!form.reportValidity()) return;
  const data = new FormData(form);
  const friendlyDate = new Date(`${data.get("fecha")}T12:00:00`).toLocaleDateString("es-CO", {day:"numeric",month:"long",year:"numeric"});
  status.textContent = `Resumen de prueba: ${String(data.get("nombre")).trim()}, ${data.get("personas")} persona(s), ${friendlyDate} a las ${data.get("hora")}. No se enviaron ni guardaron datos. Esta simulación no confirma una reserva real.`;
});
