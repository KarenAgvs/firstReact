import './Menu.css';
import image from '../../../Images/logo192.png';
export const Menu =()=>{
    return(
        <>
            <div className="All">
                <div className="logo">
                    <img src={image} className="image" alt="Logo"/><h2 classsName="title">React</h2>
                </div>
                <div className="menu">
                    <a href="#" className="element">Home</a>
                    <a href="#" className="element">Products</a>
                    <a href="#" className="element">About</a>
                    <a href="#" className="element">Contact</a>
                </div>
            </div>
        </>
    )
}