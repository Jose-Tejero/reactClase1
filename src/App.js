import './App.css';
import Cards from './components/Cards.js';
import Aboutme from './components/Aboutme.js';

function App() {

  return (
    <div className='contenedor'>
      <div className='division'>
        <Aboutme background="#b49fdc"/>
        <Cards 
          tittle="Mis hobbies" 
          item1="Guitarra" 
          item2="Patinar" 
          item3="Baseball" 
          background="#c5ebfe" 
        />
        <Cards 
          tittle="Tiempo libre"
          item1="Comer"
          item2="Dormir"
          item3="Leer"
          background="#fefd97" 
        />
        <Cards 
          tittle="Mi comida favorita" 
          item1="Ensalada de atún" 
          item2="Pizza" 
          item3="Hamburguesa" 
          background="#a5f8ce" 
        />
        <Cards 
          tittle="Mi stack" 
          item1="HTML y CSS" 
          item2="JavaScript" 
          item3="React"
          background="#fec9a7" 
        />
      </div>
    </div>
  );
}

export default App;