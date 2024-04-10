const Footer = (props:any) => {
    const today = new Date();
    return (
        <footer>
            <p style={{ marginTop: '0px', marginBottom: '0px' }}>{props.length} {props.length==1 ? "Item" : "Items" }</p>
            {props.fetchError && <p className="fetch-error">{props.fetchError}</p>}
        </footer>
    )
}

export default Footer