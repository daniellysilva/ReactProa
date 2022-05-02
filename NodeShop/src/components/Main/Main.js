import './Main.css'
import Loja from './img/loja.jpg'

function Main(){

    return(
        <div>
            <main className='principal'>
                <article className='sobre'>
                    <h2>Sobre Nós</h2>
                    <img src={Loja} alt='Essa imagem retrata um vendedor rindo e ofertando um notebook para dois clientes, um homem e uma mulher'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis non repudiandae, consequatur eligendi recusandae voluptates, accusantium, cum porro illum tempora voluptas nesciunt ex similique labore alias architecto eos placeat aut!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis non repudiandae, consequatur eligendi recusandae voluptates, accusantium, cum porro illum tempora voluptas nesciunt ex similique labore alias architecto eos placeat aut!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis non repudiandae, consequatur eligendi recusandae voluptates, accusantium, cum porro illum tempora voluptas nesciunt ex similique labore alias architecto eos placeat aut!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis non repudiandae, consequatur eligendi recusandae voluptates, accusantium, cum porro illum tempora voluptas nesciunt ex similique labore alias architecto eos placeat aut!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis non repudiandae, consequatur eligendi recusandae voluptates, accusantium, cum porro illum tempora voluptas nesciunt ex similique labore alias architecto eos placeat aut!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis non repudiandae, consequatur eligendi recusandae voluptates, accusantium, cum porro illum tempora voluptas nesciunt ex similique labore alias architecto eos placeat aut!</p>
                </article>
                <aside className='onde-estamos'>
                    <h2>Onde Estamos</h2>
                    <p>Rua Tito, n 54 - Vila Romana - São Paulo - SP</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1241448356554!2d-46.691808699999996!3d-23.5280369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1651512319170!5m2!1spt-BR!2sbr"></iframe>
                    <h2>Onde Estamos</h2>
                    <ul>
                        <li><i className='fa-solid fa-phone'></i>(11) 968952693</li>
                        <li><i className='fa-brands fa-whatsapp'></i>(11) 968952693</li>
                        <li><i className='fa-solid fa-at'></i>daniellyas9@gmail.com</li>
                    </ul>
                </aside>
            </main>

        </div>

    );
}

export default Main