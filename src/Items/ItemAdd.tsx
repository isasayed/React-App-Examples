import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const ItemAdd = (props: any) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className='addForm' onSubmit={props.handleSubmit}>
            <input
                id="addItem"
                type='text'
                ref = {inputRef}
                className="input-add-item"
                placeholder='Nihari'
                value={props.newItem}
                onChange={(e) => props.setNewItem(e.target.value)}
                maxLength={40}
                autoFocus
                required />
            <button
                type='submit'
                className={`btn-add-item ${props.newItem ? "active" : ""}`}
                disabled={!props.newItem}
                onClick={() => inputRef.current?.focus()}>
                <FaPlus
                    aria-label='Add Item' />
            </button>
        </form>
    )
}

export default ItemAdd
