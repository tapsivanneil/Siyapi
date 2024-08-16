import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import siyapiLogo from '../assets/logo.png';
import '../App.css';

export function NavBar(){
    
    const navigate = useNavigate()
    const homeLink = {link: '/', navTitle: 'Home', classProp: 'bi bi-house'}
    const profileLink = {link: '/profile', navTitle: 'Profile', classProp: 'bi bi-person'}
    const cartLink = {link: '/cart', navTitle: 'Cart', classProp: 'bi bi-cart-dash'}

    const navLinks = [homeLink, cartLink, profileLink]

    function handleClick(link){
        navigate(link)
    }

    return(
        <>
        <ul className="nav justify-content-end">
            <li className="nav-link" ><div className="navBarLogo"></div></li>
            {navLinks.map((navLinks, index)=>{
                return(
                    <li className="nav-link" key={index}>
                        <button className="btn btn-link link-offset-2 link-underline link-underline-opacity-0" onClick={()=> handleClick(navLinks.link) } >
                            <i className={navLinks.classProp}></i>
                        </button>
                    </li> 
                )
            })}
        </ul>
        </>
    )

}