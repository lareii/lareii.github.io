const BIRTH_DATE = new Date(2005, 11);
const NOW_DATE = new Date();

function calcAge() {
  const yearDiff = NOW_DATE.getFullYear() - BIRTH_DATE.getFullYear();
  const monthDiff = BIRTH_DATE.getMonth() - NOW_DATE.getMonth()

  return (yearDiff - monthDiff / 12).toFixed(2);
}

document.addEventListener("DOMContentLoaded", () => {
  const ageEl = document.getElementById("age");
  if (ageEl) ageEl.innerText = calcAge();

  document.getElementById("year").innerText = NOW_DATE.getFullYear();
})