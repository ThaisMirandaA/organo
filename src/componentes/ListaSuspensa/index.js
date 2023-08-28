import './ListaSuspensa.css'

const ListaSuspensa = ({ obrigatorio = false, label, itens, valor, aoAlterado }) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select required={obrigatorio} value={valor} onChange={evento => aoAlterado(evento.target.value)}>
                <option />
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa