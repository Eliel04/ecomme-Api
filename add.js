const containerCharacters = document.getElementById('container');

if (!containerCharacters) {
  console.error("Container element not found");
} else {
fetch("https://swapi.mimo.dev/api/starships")
.then(Response => {
    return Response.json();
})
.then(data => {
     console.log(data)

   data.results.forEach(element => {
    const card = document.createElement("div");
    card.className = "ship-card";
    const title = document.createElement("h2");
    title.innerHTML = `Name: ${element.name}`;
    card.appendChild(title);

     const spanSpeed = document.createElement("span");
    spanSpeed.innerHTML = `Speed: ${element.max_atmosphering_speed}`;
    card.appendChild(spanSpeed);

     const manufacturer = document.createElement("h3");
    manufacturer.innerHTML = `Manufacturer: ${element.manufacturer}`;
    card.appendChild(manufacturer);

     const idTitle = document.createElement("h2");
    const pilotText = Array.isArray(element.pilots) && element.pilots.length
      ? element.pilots.join(", ")
      : (element.pilot || "Unknown");
    idTitle.innerHTML = `Pilot Name: ${pilotText}`;
    card.appendChild(idTitle);

    containerCharacters.appendChild(card);

   });
})
.catch(err => console.error(err));

}
