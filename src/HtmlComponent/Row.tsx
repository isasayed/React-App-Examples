import React from 'react'

const ListItem = (props: any) => {
  return (
    <tr>
      {Object.entries(props.item).map(([key, value]) => {
        return (
          <td>
            {JSON.stringify(value)}
          </td>
        )
      })}
    </tr>
  )
}

export default ListItem
