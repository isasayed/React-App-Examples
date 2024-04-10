import { FaTrashAlt } from 'react-icons/fa'

const Item = (props: any) => {
    const item = props.item;
    return (
        <li className={`checkbox-group ${item.checked ? "checked" : ""}`}>
            <input type="checkbox"
                checked={item.checked}
                onChange={() => item.handleKey(item.id)} />
            <label
                style={(item.checked) ? { textDecoration: 'line-through' } : {}}
                onClick={() => props.handleCheck(item.id)}>
                {item.name}
            </label>
            <FaTrashAlt
                role='button'
                aria-label={`Delete ${item.id}`}
                className='danger-button'
                // style={(item.checked) ? {} : { display: 'none' }}
                onClick={() => props.handleDelete(item.id)}>
                DELETE
            </FaTrashAlt>
        </li>
    )
}

export default Item
