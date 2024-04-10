const ItemSearch = (props:any) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        <input
            id="addItem"
            type='text'
            className="input-search-item"
            placeholder='Search'
            value={props.searchItem}
            onChange={(e)=>props.setSearchItem(e.target.value)}
            maxLength={40}
            required />
    </form>
  )
}

export default ItemSearch
