let countries = [];
const countriesCards = document.querySelector(".countries-container");
const resultsNumber = document.getElementById(`inputRange`);

async function fetchCountries() {
  await fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => (countries = data));
  console.log(countries);
  countriesDisplay();
}

function countriesDisplay() {
  countriesCards.innerHTML = countries
    .filter((country) =>
      country.translations.fra.common
        .toLowerCase()
        .includes(inputSearch.value.toLowerCase())
    )
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
    .join("")
    .slice(4, inputRange);
}

window.addEventListener("load", fetchCountries);
inputSearch.addEventListener("input", countriesDisplay);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
