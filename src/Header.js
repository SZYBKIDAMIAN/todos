import {Link} from 'react-router-dom'

const Header = () => {
    return ( 
        <header>
        <div className="logo-container">
            <Link to='/'><h3 className="heading">TODOS</h3></Link>
        </div>
        </header>
    );
}

export default Header;