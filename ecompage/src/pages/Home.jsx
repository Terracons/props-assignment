import './Home.css'
import Card from "../components/Card.jsx"
import Waffle from "../assets/image-waffle-desktop.jpg"
import image2 from "../assets/image-creme-brulee-desktop.jpg"
import image3 from "../assets/image-macaron-desktop.jpg"
import image4 from "../assets/image-tiramisu-desktop.jpg"
import image5 from "../assets/image-baklava-desktop.jpg"
import image6 from "../assets/image-meringue-desktop.jpg"
import image7 from "../assets/image-cake-desktop.jpg"


const Home =()=>{
    return(
        <div className='cardContainer'>
        <Card  image = {Waffle}  category= "Waffle" name = "Waffle with Berries"  price ="6.50"/>
        <Card  image = {image2}  category= "Crème Brûlée" name = "Vanilla Bean Crème Brûlée"  price ="7.00"/>
        <Card  image = {image3}  category= "Macaron" name = "Macaron Mix of Five"  price ="8.00"/>
        <Card  image = {image4}  category= "Tiramisu" name = "Classic Tiramisu"  price ="5.50"/>
        <Card  image = {image5}  category= "Baklava" name = "Pistachio Baklava"  price ="4.00"/>
        <Card  image = {image6}  category= "Pie" name = "Lemon Meringue Pie"  price ="5.00"/>
        <Card  image = {image7}  category= "Cake" name = "Red Velvet Cake"  price ="4.50"/>
        </div>
    )
    
}



export default Home;
