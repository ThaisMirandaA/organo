import Colaboradores from '../Colaboradores'
import './Time.css'
import hexToRgba from 'hex-to-rgba'

const Time = ({ colaboradores, time, cor, aoDeletar, mudaCor, aoFavoritar }) => {
    return (
        colaboradores.length > 0 ? <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
            <h3 style={{ borderColor: cor }}>{time.nome}</h3>
            <input type='color' className='input-color' value={time.cor} onChange={evento => mudaCor((evento.target.value), time.id)} />
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return (
                        <Colaboradores
                            key={indice}
                            colaborador={colaborador}
                            cor={cor}
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                    )
                })}
            </div>
        </section>
            : ''
    )
}

export default Time