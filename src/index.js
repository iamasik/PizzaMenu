import React from "react";
import ReactDom from "react-dom/client"
import './index.css'

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
  

function App(){
    return <div className="container">
            <header className="header">
                <Header/>
            </header>
            <Menu/>
            <Footer/>
        </div>
}

function Header(){
    return <h1>Welcome to PizzaZone</h1>
}
function Menu(){
  const AvalPizza=pizzaData.length
    return <main className="menu">
        <h2>Check Menu</h2>
        {AvalPizza>0 ? (
        <>
          <p>Check our currenly avilable pizzas.</p>
          <ul className="pizzas">
            {pizzaData.map(pizza=> <Pizza pizzaObj={pizza}/>)}
          </ul>
        </>
        
        ) : (<p>Sorry currently no pizza available</p>)}
    </main>
}
function Pizza(props){
  let isSold=props.pizzaObj.soldOut
    return <div>
      <li className={`pizza ${isSold ? 'sold-out' : ''}`}> 
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{isSold ? "Sold Out" : props.pizzaObj.price}</span>
      </div>
      </li>
        
    </div>
}

function Footer(){
    return <footer className="footer">Current time is {new Date().toLocaleTimeString()}</footer>
}
const root=ReactDom.createRoot(document.getElementById('root'))

root.render(<React.StrictMode><App /></React.StrictMode>)   