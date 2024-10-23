import './Card.css'

const Card =(props)=>{
    return(
        <div className='CardWrapper'>
            <img src={props.image} alt="" />
            <h4>Name: {props.name}</h4>
            <h4>Age: {props.age}</h4>
            <h4>Location : {props.location}</h4>
        </div>
    )
}

export default Card;