import logo from './logo.svg';
import './App.css';
import restaurant from "./assets/download.jpeg"
import { useState, useEffect, useReducer } from "react"
import { Route, Routes } from 'react-router-dom';
import { About, Contact, Events, History, Home, Location, PageNotFound } from './pages';

function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

/*
function App2() {

  return (
    <div className="App">
      <Header name="Serkan" />
      <Main dishes={dishObjects} />
      <Footer />
    </div>
  )
}

function Footer() {
  var d = new Date();
  var n = d.getFullYear();
  return (
    <footer>
      CopyRight&copy; {n}
    </footer>
  )
}

const dishes = [
  "Makarna",
  "Salata",
  "Tatlı"
]

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }))


function Main(props) {
  var [emotion, setEmotion] =  useState("seviyorum");

  useEffect(() => {
    console.log("Biri " + emotion + " diyor")
  }, [emotion])

  return (
    <section>
      Aşağıdaki yemekleirmiz vardır. Bunları çok {emotion}
      <br />
      <img src={restaurant} alt={"Restaurant resmi"} />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => <li key={dish.id}>{dish.title}</li>)}
      </ul>
      <button onClick={() => setEmotion("yerim")} >Yerim</button>
      <button onClick={() => setEmotion("sevmem")} >Sevmem</button>
    </section>
  )
}

function Header(props) {
  return (
    <header>
      <h1>
        {props.name}'nın Evine Hoşgeldiniz!
      </h1>
    </header>
  )
}
*/



// https://api.github.com/users/serkanozturkpmp




function App({ login }) {
  const [data, setData] = useState(null)


  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)

  }, []
  )

  if  (data) {
    return (
      <div className="App">
        <h1>{data.name}</h1>
        <img src={data.avatar_url} alt={data.name} height="200"></img>
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Loading...</h1>
    </div>
  )
}



/*
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}>
        <Route path="location" element={<Location />} />
        <Route path="history" element={<History />} />
      </Route>
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
*/
export default App;
