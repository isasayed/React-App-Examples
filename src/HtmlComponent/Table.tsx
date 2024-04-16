import React from 'react'
import Row from './Row'

const List = (props: any) => {
  return (
    <table className="table-container">
      {props.items.map((item: any) =>
        <Row
          key={item.id}
          item={item} />
      )}
    </table>
  )
}

export default List
