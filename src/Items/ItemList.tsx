import Item from './Item'

const ItemList = (props: any) => {
    return (
        <ul style={{ paddingLeft: '0px', marginBottom: '0px' }}>
            {props.items.map((item: any) => (
                <Item 
                    key={item.id}
                    item = {item}
                    handleCheck={props.handleCheck}
                    handleDelete={props.handleDelete}
                />
            ))}
        </ul>
    )
}

export default ItemList
