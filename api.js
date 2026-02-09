/*const fetchData = async () => {
  try {
    const inputBox = document.getElementById("pokemon-name")
    .value
    .toLowerCase();
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputBox}`);
    if (!response.ok) {
      throw new Error("Network issues");
    }
    const data = await response.json();
    console.log(data);
   // const imageUrl = data.sprites.front_default;
   const pokemonImage = document.getElementById("pokemon-image");
   //pokemonImage.src = imageUrl;
   pokemonImage.src = data.sprites.front_default;
   pokemonImage.style.display = "block";
   
  } 
  catch (err) {
    console.error(err);
  }
}

fetchData();*/
console.log('hi')

fetch("https://pokeapi.co/api/v2/pokemon/mewtwo")
.then(response => {
  if (!response.ok) {
    throw new Error("network issues");
  }
  return response.json();
})
.then(data => {
  console.log(data);
})

  async function test() {
  return 10
}
test().then(result => console.log(result));



const listContainer = document.getElementById("list");
const btn = document.getElementById("load");



async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error('Network error');
  const users = await response.json();

  if (listContainer && Array.isArray(users)) {
    users.forEach(user => {
      const li = document.createElement("li");
      li.innerHTML = `Name: ${user.name} <br> Email: ${user.email} <br> Phone: ${user.phone} <br> <br>`;
      listContainer.appendChild(li);
      li.style.listStyleType = "none";
    });
  }

  return users;
}

if (btn) {
  btn.addEventListener('click', () => getUsers().catch(err => console.error(err)));
} else {
  console.warn('Button with id "load" not found.');
}