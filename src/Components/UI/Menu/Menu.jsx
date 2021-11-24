import './Menu.css';
import image from '../../../Images/logo192.png';
export const Menu =()=>{
    return(
        <>
            <div className="All">
                <div className="logo">
                    <img src={image} alt="Logo"/><h2>React</h2>
                </div>
                <div className="menu">
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>Contact</li>
                </div>
            </div>
        </>
    )
}