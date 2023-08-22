import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <img src="/imagens/polygon1.png" alt="Imagem Fundo Triângulo" className='imagem-fundo-triangulo' />
            <img src="/imagens/polygon2.png" alt="Imagem Fundo Triângulo Deitado" className='imagem-fundo-triangulo-deitado' />
            <img src="/imagens/ellipse2.png" alt="Imagem Fundo Círculo" className='imagem-fundo-circulo' />
            <img src="/imagens/ellipse3.png" alt="Imagem Fundo Círculo" className='imagem-fundo-circulo-cortado' />

            <div className='redes-sociais'>
                <a href='facebook.com/' target='_blank'><img src='/imagens/fb.png' alt='Logo Facebook' /></a>
                <a href='twitter.com' target='_blank'><img src='/imagens/tw.png' alt='Logo Twitter' /></a>
                <a href="instragram.com" target='_blank'><img src='/imagens/ig.png' alt='Logo Instagram' /></a>
            </div>

            <div className='logo-organo'>
                <img src='/imagens/logo.png' alt='Logo Organo' />
            </div>

            <div>
                <h2>Desenvolvido por Thaís</h2>
            </div>
        </footer>
    )
}

export default Rodape