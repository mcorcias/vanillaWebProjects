const country = document.getElementById("country");
const imgEl = document.getElementById("img");
const imgBox = document.getElementById("img-box");

fetch(`https://covid19.mathdro.id/api/countries`)
  .then(res => res.json())
  .then(data => {
    data.countries.forEach(c => {
      const countryName = c.name;
      console.log(countryName.toLowerCase());
      country.innerHTML += `<option value="${countryName}">${countryName}</option>`;
    });
  });

// event listener for selecting country

country.addEventListener("change", e => {
  imgEl.src = `images/${e.target.value.toLowerCase()}.png`;
});
