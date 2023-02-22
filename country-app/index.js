let countries = [];
const countriesCards = document.querySelector(".countries-container");
const resultsNumber = document.getElementById(`inputRange`);
const sortBtn = document.querySelectorAll(".btnSort");
let sortMethod = "minToMax";

async function fetchCountries() {
  await fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => (countries = data));
  console.log(countries);
  countriesDisplay();
}

function countriesDisplay() {
  rangeValue.innerHTML = `${inputRange.value}`;
  countriesCards.innerHTML = countries
    .filter((country) =>
      country.translations.fra.common
        .toLowerCase()
        .includes(inputSearch.value.toLowerCase())
    )
    .sort((a, b) => {
      if (sortMethod === "maxToMin") {
        return b.population - a.population;
      } else if (sortMethod === "minToMax") {
        return a.population - b.population;
      } else if (sortMethod === "alpha") {
        return a.translations.fra.common.localeCompare(
          b.translations.fra.common
        );
      }
    })
    .slice(0, inputRange.value)
    .map(
      (country) =>
        `
  <div class="card">
  <img src="${country.flags.svg}" alt="drapeau ${
          country.translations.fra.common
        }" style="width: 200px;">
  <h2>${country.translations.fra.common}</h2>
  <h4>${country.capital}</h4>
  <p>Population : ${country.population.toLocaleString()}</p>

  </div>
  `
    )
    .join("");
}

window.addEventListener("load", fetchCountries);
inputSearch.addEventListener("input", countriesDisplay);
inputRange.addEventListener("input", countriesDisplay);

sortBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    sortMethod = `${e.target.id}`;
    countriesDisplay();
  });
});
// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
