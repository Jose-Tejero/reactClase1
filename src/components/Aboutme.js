const me = {
  tittle: "Mis datos",
  item1: "José",
  item2: "32 años",
  item3: "Chappie"
}

const Aboutme = ({background}) => {
    return (
        <div className='card' style={{background}} >
            <h3>{me.tittle}</h3>
            <ul>
                <li><b>Nombre: </b>{me.item1}</li>
                <li><b>Edad: </b>{me.item2}</li>
                <li><b>Película favorita: </b>{me.item3}</li>
            </ul>
        </div>
    );
};

export default Aboutme;