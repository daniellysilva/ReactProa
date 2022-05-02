import './Navbar.css';

function Navbar(){
    return(
            <nav className='navbar'>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#produtos'>Produtos</a></li>
                    <li><a href='#servicos'>Serviços</a></li>
                    <li><a href='#contatos'>Contatos</a></li>
                </ul>
                <div className='social-icons'>
                    <a href='#' className='btn-facebook'><i className='fa-brands fa-facebook-f'></i></a>
                    <a href='#' className='btn-twitter'><i className='fa-brands fa-twitter'></i></a>
                    <a href='#' className='btn-google'><i className='fa-brands fa-google'></i></a>
                </div>
            </nav>
    );
}

export default Navbar;