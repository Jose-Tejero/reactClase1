import logo from './logo.svg';
import './App.css';

const me = [
  {
    nombre: "José",
    edad: "32 años",
    pelicula: "Chappie",
    music: "Rap"
  },
  {
    hobbie1: "Guitarra",
    hobbie2: "Patinar",
    hobbie3: "Béisbol",
    hobbie4: "Warzone"
  },
  {
    ft1: "Comer",
    ft2: "Dormir",
    ft3: "Leer",
    ft4: "Cubo rubik"
  }
]

const Datos = () => {
  return (
    <div className="App">
      <ul>
        <li><b>Nombre:</b> {me[0].nombre}</li>
        <li><b>Edad:</b> {me[0].edad}</li>
        <li><b>Película favorita:</b> {me[0].pelicula}</li>
        <li><b>Música favorita:</b> {me[0].music}</li>
      </ul>
  </div>
  )
}

const Hobbies = () => {
  return (
    <div className="App">
      <h2 className='tittle' >Mis hobbies</h2>
      <ul>
        <li>{me[1].hobbie1}</li>
        <li>{me[1].hobbie2}</li>
        <li>{me[1].hobbie3}</li>
        <li>{me[1].hobbie4}</li>
      </ul>
  </div>
  )
}

const Tiempolibre = () => {
  return (
    <div className="App">
      <h2 className='tittle' >Tiempo libre</h2>
      <ul>
        <li>{me[2].ft1}</li>
        <li>{me[2].ft2}</li>
        <li>{me[2].ft3}</li>
        <li>{me[2].ft4}</li>
      </ul>
  </div>
  )
}

const Comida = () => {
  return (
    <div className="App">
      <h2 className='tittle' >Mis hobbies</h2>
      <ul>
        <li>{me[1].hobbie1}</li>
        <li>{me[1].hobbie2}</li>
        <li>{me[1].hobbie3}</li>
        <li>{me[1].hobbie4}</li>
      </ul>
  </div>
  )
}

const Stack = () => {
  return (
    <div className="App">
      <h2 className='tittle' >Mis hobbies</h2>
      <ul>
        <li>{me[1].hobbie1}</li>
        <li>{me[1].hobbie2}</li>
        <li>{me[1].hobbie3}</li>
        <li>{me[1].hobbie4}</li>
      </ul>
  </div>
  )
}

function App() {

  return (
    <div className='division' >
      <Datos/>
      <Hobbies/>
      <Tiempolibre/>
    </div>
  )
}

export default App;
