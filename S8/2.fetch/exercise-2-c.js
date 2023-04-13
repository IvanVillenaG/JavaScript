const baseUrl = "https://api.nationalize.io?name=";

const search = document.querySelector(".search");
const name = document.querySelector(".name");
const results = document.querySelector(".results");

search.addEventListener("click", () => {
  const url = baseUrl + name.value;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      results.innerHTML = "";
      data.country.forEach((countryData) => {
        const { country_id, probability } = countryData;
        const div = document.createElement("div");
        const p = document.createElement("p");
        p.textContent = `el nombre ${name.value} tiene un ${probability}% de ser de ${country_id}.`;
        const button = document.createElement("button");
        button.textContent = "X";
        div.appendChild(p);
        div.appendChild(button);
        results.appendChild(div);
        button.addEventListener("click", () => {
          div.remove();
        });
        console.log(p);
      });
    });
});
