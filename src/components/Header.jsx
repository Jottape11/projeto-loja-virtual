import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router";



const Header = () => {
    return (
        <header className="header">
                <div className="logo">🛍️ ReactShop</div>
        
                <ul className="nav">
                  <li><Link to ={"/"}>Início</Link></li>
                  <li><Link to ={"/produtos"}>Produtos</Link></li>
                  <li><Link to ={"/contato"}>Contato</Link></li>
                </ul>
        
                <div className="header-actions">
                  <span className="icon-button"><CiSearch /></span>
                  <span className="icon-button"><FaHeart /></span>
                  <span className="icon-button cart"><CiShoppingCart /><span className="badge">3</span></span>
                </div>
        </header>
    )
}

export default Header