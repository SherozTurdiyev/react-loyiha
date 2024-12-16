import '../style/navbar.css'
import Title from './Title';

import { Link } from 'react-router-dom'

function NavbarTop() {


    return (
        <nav className='nav'>
            <div className='container nav-box'>
                <Link to={'/'}>
                    <p>Navbar</p>
                </Link>
                <ul className='nav-items'>
                    <li>
                        <Link to={"/home"}>
                            <Title>Asosiy</Title>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/todos"}>
                            User Qo'shish
                        </Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>
                            Bog'lanish
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarTop;