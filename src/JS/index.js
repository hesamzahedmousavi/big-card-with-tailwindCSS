const button = document.getElementById("toggleMenu");
const menu = document.getElementById("dropdownMenu");
let isOpen = false; // وضعیت منو

button.addEventListener("click", () => {
  isOpen = !isOpen; // تغییر وضعیت منو
  menu.classList.toggle("hidden", !isOpen); // نمایش/پنهان کردن منو
  button.textContent = isOpen ? "بستن منو" : "باز کردن منو"; // تغییر متن دکمه
});
