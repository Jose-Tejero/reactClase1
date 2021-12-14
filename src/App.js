import './App.css';

const me = [
  {
    componente: 0,
    Titulo: "Mis datos",
    dato1: "José",
    dato2: "32 años",
    dato3: "Chappie",
    dato4: "Rap"
  },
  {
    componente: 1,
    Titulo: "Mis hobbies",
    dato1: "Guitarra",
    dato2: "Patinar",
    dato3: "Béisbol",
    dato4: "Videojuegos"
  },
  {
    componente: 2,
    Titulo: "Tiempo libre",
    dato1: "Comer",
    dato2: "Dormir",
    dato3: "Leer",
    dato4: "Cubo rubik"
  },
  {
    componente: 3,
    Titulo: "Mi comida favorita",
    dato1: "Ensalada de Atún",
    dato2: "Hamburguesa",
    dato3: "Pizza",
    dato4: "Tortas de cochinita"
  },
  {    
    componente: 4,
    Titulo: "Mi stack",
    dato1: "HTML",
    dato2: "CSS",
    dato3: "JavaScript",
    dato4: "React"
  }
];

const Me = () => {
  return (
    <div className="Me text">
      <h2>{me[0].Titulo}</h2>
      <ul>
        <li><b>Nombre:</b> {me[0].dato1}</li>
        <li><b>Edad:</b> {me[0].dato2}</li>
        <li><b>Película favorita:</b> {me[0].dato3}</li>
        <li><b>Música favorita:</b> {me[0].dato4}</li>
      </ul>
  </div>
  );
}

const Hobbies = () => {
  return (
    <div className="Hobbies text">
      <h2>{me[1].Titulo}</h2>
      <ul>
        <li>{me[1].dato1}</li>
        <li>{me[1].dato2}</li>
        <li>{me[1].dato3}</li>
        <li>{me[1].dato4}</li>
      </ul>
  </div>
  );
}

const Freetime = () => {
  return (
    <div className="Freetime text">
      <h2>{me[2].Titulo}</h2>
      <ul>
        <li>{me[2].dato1}</li>
        <li>{me[2].dato2}</li>
        <li>{me[2].dato3}</li>
        <li>{me[2].dato4}</li>
      </ul>
  </div>
  );
}

const Food = () => {
  return (
    <div className="Food text">
      <h2>{me[3].Titulo}</h2>
      <ul>
        <li>{me[3].dato1}</li>
        <li>{me[3].dato2}</li>
        <li>{me[3].dato3}</li>
        <li>{me[3].dato4}</li>
      </ul>
  </div>
  );
}

const Stack = () => {
  return (
    <div className="Stack text">
      <h2>{me[4].Titulo}</h2>
      <ul>
        <li>{me[4].dato1}</li>
        <li>{me[4].dato2}</li>
        <li>{me[4].dato3}</li>
        <li>{me[4].dato4}</li>
      </ul>
  </div>
  );
}

function App() {

  return (
    <div className='contenedor'>
      <div className='division'>
        <Me/>
        <Hobbies/>
        <Freetime/>
        <Food/>
        <Stack/>
      </div>
    </div>
  );
}

export default App;
