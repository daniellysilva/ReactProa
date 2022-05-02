import './Section.css';

function Section(){
    return(
        <section className='newsletter'>
            <h3>Newsletter</h3>
            <p>Receba nossas promoções por e-mail.</p>
            <form action='#cadastro.php'>
                <input type='text' placeholder='Seu nome'/>
                <input type='email' placeholder='Seu email'/>
                <button>Cadastrar</button>
            </form>
        </section>
    );
}

export default Section;