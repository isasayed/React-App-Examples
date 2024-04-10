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
                    <p>Empty Menu</p>
                )

            }
            
        </main>
    )
}

export default Content
