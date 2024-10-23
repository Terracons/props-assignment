import './Card.css'

const Card =(props)=>{
    return(
        <div className='CardWrapper'>
            <img src={props.image} alt="" />
            <h2>Name: {props.name}</h2>
            <h3>Age: {props.age}</h3>
            <h3>Location : {props.location}</h3>
        </div>
    )
}

export default Card;