import './Menu.css';
import image from '../../../Images/logo192.png';
export const Menu =()=>{
    return(
        <>
            <header>
                <div className="containsImageandh2">
                    <div className="image">
                       <img src={image} className="image" alt="Logo"/>
                    </div>
                    <div className="containsTitle">
                        <h2 classsName="title">React</h2> 
                    </div>
                </div>
                <nav className="menu">
                    <ul>
                        <li className="listElement"><a href="#" className="element">Home</a></li>
                        <li className="listElement"><a href="#" className="element">Products</a></li>
                        <li className="listElement"><a href="#" className="element">About</a></li>
                        <li className="listElement"><a href="#" className="element">Contact</a></li> 
                    </ul>
                </nav>
            </header>
        </>
    )
}