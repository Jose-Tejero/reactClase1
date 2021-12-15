const Cards = ({tittle, item1, item2, item3, background}) => {
    return (
        <div className='card' style={{background}} >
            <h3>{tittle}</h3>
            <ul>
                <li>{item1}</li>
                <li>{item2}</li>
                <li>{item3}</li>
            </ul>
        </div>
    );
};

export default Cards;