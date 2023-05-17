const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

////////////////////////////////

const pizzaContainer = document.querySelector(".pizza-container");
const inputNumber = document.querySelector(".input-number");
const errorContainer = document.querySelector(".error-container");


const errorMsg = () => {

  pizzaContainer.innerHTML = "";
  inputNumber.classList.add("error-message");
  errorContainer.innerHTML = "";


  const errorAlert = document.createElement("alerta");
  alerta.classList.add("error-message");
  alerta.innerText = message;

  errorContainer.appendChild(alert);
  
}


const showPizza = (unaPizza) => {

  pizzaContainer.innerHTML = "";

  let div = document.createElement("div");
  div.classList.add("pizza-container");

  let h3 = document.createElement("h3");
  h3.classList.add("pizza-name");
  h3.innerText = unaPizza.nombre;

  let p = document.createElement("p");
  p.classList.add("pizza-price");
  p.textContent = "$" + unaPizza.precio;

  let img = document.createElement("img");
  img.classList.add("pizza-img");
  img.src = unaPizza.imagen;

  let ingredients = document.createElement("ingredients");
  ingredients.classList.add("ingredients");
  ingredients.textContent = unaPizza.ingredientes;

  pizzaContainer.appendChild(div);
  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(img);
  div.appendChild(ingredients);

}


const searchPizza = () => {

  let numero = inputNumber.value;
  inputNumber.classList.remove("error-message");
  errorContainer.innerHTML = "";

  if (numero.trim() === "") {
    errorMsg("Debe ingresar un número");
    return;
  }
  
  for (let i = 0; i < pizzas.length; i++) {
    const unaPizza = pizzas[i];
    if (unaPizza.id === numero) {

      showPizza(unaPizza);



    }
  }

  errorMsg("No existe ninguna pizza que tenga ese número");

}


init = () => {}

init();





