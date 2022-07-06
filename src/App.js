import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function Home() {
  return (
    <>
      <main>
        <h2>Bienvenue sur mon site web utilisant github pages !</h2>
        <p>Je suis Matthieu Desrues, un développeur software et web en 5ème année à EPITECH.</p>
        <p>J'ai eu l'idée de faire ce site afin de présenter mes expériences professionelles. </p>
        <p>
          Malheureusement, l'idée est très récente, et je n'ai pas le temps de réaliser
          ce projet tout de suite mais je compte avancer sur mon temps libre.
        </p>
        <p>
          En attendant je vous invite à visiter mon&nbsp;
          <a href="https://github.com/MinMatth-Magi">GitHub</a> et mon&nbsp;
          <a href="https://www.linkedin.com/in/matthieu-desrues-907830141">LinkedIn</a> !
        </p>
      </main>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/portfollio" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
