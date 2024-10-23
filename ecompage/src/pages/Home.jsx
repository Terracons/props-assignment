import './Home.css'
import Card from "../components/Card.jsx"
import image1 from "../assets/img1.png"
import image2 from "../assets/img2.png"
import image3 from "../assets/img3.png"
import image4 from "../assets/img4.png"

const Home =()=>{
    return(
        <div className='cardContainer'>
        <Card  image = {image1} name = "Van dan" age="60" location = "Rusia"/>
        <Card  image = {image2} name = "Andre Gas" age="54" location = "London"/>
        <Card  image = {image3} name = "Awari Ajadi" age="52" location = "Ile -Ife"/>
        <Card  image = {image4} name = "Adewale Ayinde" age="66" location = "Lagos,Nigeria"/>
        </div>
    )
    
}

export default Home;