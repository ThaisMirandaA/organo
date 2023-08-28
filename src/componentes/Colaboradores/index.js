import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Colaboradores.css'

const Colaboradores = ({ colaborador, cor, aoDeletar, aoFavoritar }) => {
    const favoritar = () => {
        aoFavoritar(colaborador.id);
    }

    const propsFavoritos = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle size={25} className='deletar' onClick={() => aoDeletar(colaborador.id)} />
            <div className='cabecalho' style={{ backgroundColor: cor }}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito
                        ? <AiFillHeart {...propsFavoritos} color='#ff0000' />
                        : <AiOutlineHeart {...propsFavoritos} />}
                </div>
            </div>
        </div>
    )

}

export default Colaboradores