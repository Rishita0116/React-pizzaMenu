import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//each component can only return one component
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  //const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header footer">
      <h1 /*style={style} */>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //to show pizza menu only if present(conditional rendering)
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizza > 0 ? (
        <React.Fragment>
          <p>
            Authenthic Italian Cuisines. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato,mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza(props) {
  //if (props.pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>

        {/* {props.pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span> props.pizzaObj.price</span>
        )} */}
        <span>
          {props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.price}
        </span>
      </div>
    </li>
  );
}

//insteat of props, you can write '{pizzaObj}' (destructuring)
// function Pizza({pizzaObj})

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  //in strict mode, cmponents are rendered twice, thus we get alert twice
  // if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  // else alert("Sorry we're closed");

  // return React.createElement("footer", null, "We're currently open"); pure React
  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()} We're currently open */}
      {/* conditional rendering */}
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00{" "}
        </p>
      )}
    </footer>
  );
}
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}
//we need to get the root id element from index.html for this file to be rendered in that div element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//only thing strict mode does is that during developement, it will render all compoents twice in order to find certain bugs and also react will check if we are using outdated parts of React API
