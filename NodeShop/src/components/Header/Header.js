import './Header.css';

function Header (){
    return(
        <div>
            <header className='App-header'>
                <h1 className='App-logo'><a href='#' title='Loja da Danielly'>Loja da Danielly</a></h1>
                    <form method='post'>
                        <input type='text' name='pesquisa' id='pesquisa' placeholder='Busque aqui'/>
                        <button><i className='fa-solid fa-magnifying-glass'></i></button>
                    </form>
            </header>
        </div>
    );
}

export default Header;