import logo from '../assets/star.jpg';
import { Link } from 'react-router-dom';
import Button from './Button';

function Header() {

    return (
        <>
            <nav className="nav">
                <div className="logo">
                    <img src={logo} alt='star logo' />

                </div>
                <ul className="nav-links">
                    <li>
                        <a href="tel:+250799341650" className='nav-links_link'>Tel:+250799341650</a>
                    </li>
                    <li>
                        <Link to="#" className='nav-links_link btn'>Sign-In</Link> 
                    </li>

                </ul>

            </nav>
            <div className='category'>
                <ul className='category-links'>
                    <li><a href="@" className='category-links--link'>Ubuzima</a></li>
                    <li><a href="@" className='category-links--link'>Politike</a></li>
                    <li><a href="@" className='category-links--link'>Ubukungu</a></li>
                    <li><a href="@" className='category-links--link'>Uburezi</a></li>
                    <li><a href="@" className='category-links--link'>Iyobokamana</a></li>
                    <li><a href="@" className='category-links--link'>imikino</a></li>
                </ul>
            </div>
        </>



    )
}
export default Header;