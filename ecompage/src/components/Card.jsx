import './Card.css'

const Card =(props)=>{
    return(
        <div className='CardWrapper'>
            <div className="imgcontainer">
            <img src={props.image} alt="" />
            </div>
            <div className="textcontainer">
            <p>{props.category}</p>
            <h4 className='name'> {props.name}</h4>
            <h4 className='price'> ${props.price}</h4>
            </div>

        </div>
    )
}

export default Card;