//import logo from './logo.svg';
//import './App.css';
//import React, { Fragment } from 'react';
import "./styles/style.scss";
import Curso from "./Curso";
import Banner from "./banner";
import MiMenu from "./Menu";
import Mibar from "./bar";
//La información la puedes tomar desde una API 
const cursos = [
  {
    "title": "Aprende a tocar guitarra acustica",
    "image": "https://www.guitarraviva.com/wp-content/uploads/2015/09/stock-nylon-bossa_67587098.jpg",
    "price": "Detalles",
    "profesor": "Allan Yomar Castillo Rivas",
    "alu1": "Manuel Reyes Velázquez",
    "alu2": "Edgar Hernandez Ricardez",
    "alu3": "Geovanni Flores Marquez",
    "alu4": "Edgar Martinez Estrada",
    "alu5": "Yael Cuevas Alvarado",
    "horario":"L y M de 2:00 - 3:30 pm",
    "aula":" 1° B"
  },

  {
    "title": "Sistema completo de piano, principiantes",
    "image": "https://cursosvirtualesgratis.com/wp-content/uploads/2020/09/clases-de-piano-gratis-piano-aprender.jpg",
    "price": "Detalles",
    "profesor": "Anahi Contreras Barrera",
    "alu1": "Antonio Rodriguez Cabrera",
    "alu2": "Florencio Sanchez Pacheco",
    "alu3": "David Cruz Rosas",
    "alu4": "Alejandro Marcos Antonio",
    "alu5": "Gerardo Alegre Sanchez",
    "horario":"M y J de 2:00 - 3:30 pm",
    "aula":" 2° B"
  },

  {
    "title": "Canto y vocalización para todos",
    "image": "https://www.elfinanciero.com.mx/resizer/5-eu20e290m9JTpSLq-tv19zQdE=/400x225/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/7UTCW5XXTVBAPKDR5LVOSAJX3Q.jpeg",
    "price": "Detalles",
    "profesor": "Mario Flores Cornejo",
    "alu1": "Hugo Sanchez Pineda",
    "alu2": "Jesus Gamez Romero",
    "alu3": "Edgar Valdivia Trujano",
    "alu4": "Marco Ricardez Alvarez",
    "alu5": "Christian Gamez Gamiño",
    "horario":"V y S de 2:00 - 3:30 pm",
    "aula":" 3° B"
  },
  {
    "title": "Aprende a tocar el bajo eléctrico",
    "image": "https://d3puay5pkxu9s4.cloudfront.net/curso/1760/800_imagen.jpg",
    "price": "Detalles",
    "profesor": "Victor Contreras Gorgoño",
    "alu1": "Edgar Ruiz Sanchez",
    "alu2": "Hugo Rito Serrano",
    "alu3": "Jesus Sanchez Verónico",
    "alu4": "Fransisco Hernandez Cedillo",
    "alu5": "Juan Guzman Hernandez",
    "horario":"L y M de 3:30 - 5:00 pm",
    "aula":" 4° B"
  },
  {
    "title": "Introducción al violín 1: cómo dominar la tecnica del arco",
    "image": "https://palomavaleva.com/site/wp-content/uploads/2018/07/Violons-06.jpg",
    "price": "Detalles",
    "profesor": "Ricardo Bonilla Ortega",
    "alu1": "Ernesto Jimenez Bojorges",
    "alu2": "Fabian Ramirez Salazar",
    "alu3": "Daniel Ricardez Alvarez",
    "alu4": "Antonio Rojas Morales",
    "alu5": "Alejandro Sanchez Miranda",
    "horario":"M y J de 3:30 - 5:00  pm",
    "aula":" 5° B"
  },
  {
    "title": "Armonía y teoría musical aplicada, parte 1",
    "image": "data:image/jpeg;base64,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",
    "price": "Detalles",
    "profesor": "Fernando Vazquez Bernal",
    "alu1": "Humberto Alegre Chavez",
    "alu2": "Cesar Natividad Muñoz",
    "alu3": "Jesus Garrido Gomez",
    "alu4": "José López Badillo",
    "alu5": "Gerardo Perez Mendez",
    "horario":"V y S de  12:30 - 2:00 pm",
    "aula":" 6° B"
  }
]

const App = () =>
  <>
  
    <Banner />
    <br />
    <div className="ed-grid m-grid-3">
      {
        cursos.map(c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor} alu1={c.alu1} alu2={c.alu2} alu3={c.alu3} alu4={c.alu4} alu5={c.alu5} horario={c.horario} aula={c.aula} />)
      }

    </div>
    
      <Mibar />
    
  </>




export default App;
