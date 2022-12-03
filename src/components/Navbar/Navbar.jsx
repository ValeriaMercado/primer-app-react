import './Navbar.css'
import logo from '../../assets/logo.png'

export const Navbar = () =>{

    const test = {href: "#"}
    return (
        <nav className="navbar">
            <img src={logo} alt= "" width="90px"/>
            <a href={test.href}>Inicio</a>
            <a href={test.href}>Blog</a>
            <a href={test.href}>Galería</a>
            <a href={test.href}>Contacto</a>
        </nav>
      
    )
}
