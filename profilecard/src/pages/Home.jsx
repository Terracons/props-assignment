import './Home.css'
import Card from "../components/Card.jsx"
import image1 from "../assets/img1.png"

const Home =()=>{
    return(
        <div>
        <Card  image = {image1} name = "Van dan" age="60" location = "Rusia"/>
        </div>
    )
    
}

export default Home;