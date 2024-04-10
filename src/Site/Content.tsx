import ItemList from '../Items/ItemList'

const Content = (props:any) => {

    return (
        <main>
            {props.items.length ? (
                <ItemList
                    items = {props.items}
                    handleCheck={props.handleCheck}
                    handleDelete={props.handleDelete} />
                )
                :
                (
                    <p className='empty-error'>Empty Menu</p>
                )
            }
            
        </main>
    )
}

export default Content
