import { useState } from 'react'

const Content = () => {
    const [name, setName] = useState('isa');
    const [items, setItems] = useState([
        {
            "id":1,
            "checked":true,
            "name":"samosa"
        },{
            "id":2,
            "checked":false,
            "name":"haleem"
        },{
            "id":3,
            "checked":false,
            "name":"pappu juice"
        },
    ]);


    const handleName = () =>{
        const names = ["isa", "mohammad", "ali"]
        const position = Math.floor(Math.random() * 3);
        setName(names[position]);
    }

  return (
    <main>
        <p>Hello {name}!</p>
        {/* <button onClick={handleName}>change user</button> */}
        <ul>
            {items.map((item)=>(
                <li>
                    <input type="checkbox" checked={item.checked} key={item.id} />
                    <label>{item.name}</label>
                </li>
            ))}
        </ul>
    </main>
  )
}

export default Content
