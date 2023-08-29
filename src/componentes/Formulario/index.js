import './Formulario.css'
import Campo from '../Campo/index'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = ({ times, aoNovoColaboradorCadastrado, aoNovoTimeCadastrado }) => {

    const aoSalvar = (evento) => {
        evento.preventDefault();
        aoNovoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const aoCriarNovoTime = (evento) => {
        evento.preventDefault();
        aoNovoTimeCadastrado({
            nome: nomeTime,
            cor: corTime
        })
        setNomeTime('')
        setCorTime('')
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const [mostraFormulario, setMostraFormulario] = useState(false)
    const mostraEOculta = () => setMostraFormulario(!mostraFormulario)

    return (
        <div>
            <button className='botao-add'onClick={mostraEOculta}><img src='/imagens/botaoadd.png' alt='Botão que adiciona formulário na tela'/></button>
            {mostraFormulario ? <section className='formulario'>
                <form onSubmit={aoSalvar}>
                    <h2>Preencha os dados para criar o card do colaborador:</h2>
                    <Campo
                        obrigatorio={true}
                        label="Nome"
                        placeholder="Digite seu nome"
                        valor={nome}
                        aoAlterado={valor => setNome(valor)}
                    />
                    <Campo
                        obrigatorio={true}
                        label="Cargo"
                        placeholder="Digite seu cargo"
                        valor={cargo}
                        aoAlterado={valor => setCargo(valor)}
                    />
                    <Campo
                        label="Imagem"
                        placeholder="Informe o endereço da imagem"
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}
                    />
                    <ListaSuspensa
                        obrigatorio={true}
                        label="Time"
                        itens={times}
                        valor={time}
                        aoAlterado={valor => setTime(valor)}
                    />
                    <Botao>
                        Criar Card
                    </Botao>
                </form>
                <form onSubmit={aoCriarNovoTime}>
                    <h2>Preencha os dados para criar um novo time:</h2>
                    <Campo
                        obrigatorio={true}
                        label="Nome do time"
                        placeholder="Digite o nome do time"
                        valor={nomeTime}
                        aoAlterado={valor => setNomeTime(valor)}
                    />
                    <Campo
                        obrigatorio={true}
                        type='color'
                        label="Cor do time"
                        placeholder="Digite a cor do time"
                        valor={corTime}
                        aoAlterado={valor => setCorTime(valor)}
                    />
                    <Botao>
                        Criar Novo Time
                    </Botao>
                </form>
            </section> : null }
        </div>
    )
}

export default Formulario