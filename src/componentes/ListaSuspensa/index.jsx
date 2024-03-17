import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select value={props.valor} required={props.obrigatorio} onChange={e => props.aoAlterado(e.target.value)}>
        <option value="" disabled>Escolha o time...</option>
        {props.itens.map((item) => {
          return (
            <option key={item.id} value={item.nome}>{item.nome}</option>
          )
        })}
      </select>
    </div>
  )
}

export default ListaSuspensa