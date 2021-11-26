import './Card.css';
import imagecard from '../../../Images/react1.jpg'
export const Card =()=>{
    return(
        <>
            <div className="Card-container">
                <img  className="CardImage" src={imagecard} alt="Image" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium ex asperiores ullam consectetur.</p>
            </div>
        </>
    )
}