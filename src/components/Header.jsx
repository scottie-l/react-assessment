import '../css/Header.css';

function Header() {
    return (
        <div>
            <a data-testid='navLink1' className='navlink' href="/search">
                Search    
            </a>
        </div>
    );
}

export default Header;
