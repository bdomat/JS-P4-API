//XMLHTTPRequest

function reqListener() {
  // console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
//req.open("get", "data.txt", true);
//req.open("get", "data.json", true);
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();

//-----------------
// FETCH
//----------------

fetch("https://api.blablagues.net/?rub=blagues", "objet d'options")
  .then((response) => {
    //console.log(response);
  })
  .catch((err) => console.log(err));

fetch("data.txt").then((res) => res.text());
.then((data) => console.log(data));

fetch("data.json")
  .then((res) => res.json())
  .then((data) => console.log(data));*/

const myHeaders = new Headers();

const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};
fetch("data.json", init).then((res) => console.log(res));

//CRUD => Create (POST), read (GET), update (PUT), Delete (DELETE)
const init2 = {
  method: "DELETE",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "From Scratch",
    message: "Yo les gens !",
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts", init2).then(() =>
    console.log("data envoyée")
  );
});

//--------------
// Asynchrone
//--------------

setTimeout(() => {
  console.log("test");
}, 2000);

//Promise
fetch("monLien").then((res) => res);

//async/await
async function fetchData() {
 // await fetch("monlien");
  //attend que le await soit executé avant de faire la suite
  executeFunction();
}

const fetchData2 = async () => {
  await fetch("monlien");
  //attend que le await soit executé avant de faire la suite
};
*/

//----------
// LE JSON
//----------

//Méthode .json() => méthode qui s'auto-résout en renvoyant le body de la requête

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    //stringify => converti en JSON
    let settings = JSON.stringify(data);
    //Parse => transforme JSON en objet JS
    //console.log(JSON.parse(settings));
  });

//---------
// Web API
//--------

// CLIENT STORAGE
//----------------

//Local Storage
localStorage.data = "Je stock la data";
//>> injecter localStorage
document.body.textContent = localStorage.data;
//>> supprimer localStorage
localStorage.removeItem("data");

const obj = {
  name: "Denis",
  age: 33,
};

//Il faut passer eds chaines de caractères
localStorage.user = JSON.stringify(obj);
//console.log(JSON.parse(localStorage.user));

//--------------------
//Sesssion Storage
sessionStorage.dataSettings = "55px";
sessionStorage.clear();

//------------------
//Cookies
document.cookie = "username=FromScratch";

// Bonne pratique
document.cookie = "pseudo=FS;path=/;max-age=45000;secure; samesite";
