import './App.css';
import ItemData from './Models/ItemData'
import ItemAdd from './Items/ItemAdd'
import SearchAdd from './Items/ItemSearch'
import Header from './Site/Header'
import Content from './Site/Content'
import Footer from './Site/Footer'
import { useState } from 'react'
import ItemSearch from './Items/ItemSearch';

function App() {
  const handleName = () => {
    const names = ["isa", "mohammad", "ali"]
    const position = Math.floor(Math.random() * 3);
    return names[position];
  }

  const createItems = () =>{
    const storedData = localStorage.getItem('shoppinglist');
    const parsedData: ItemData[] = storedData ? JSON.parse(storedData) : [];

    return parsedData;
    // const itemData: ItemData[] = [
    //   { id: 1, checked: false, name: 'Samosa' },
    //   { id: 2, checked: false, name: 'Haleem' },
    //   { id: 3, checked: true, name: 'Kebab' },
    //   { id: 4, checked: false, name: 'Biryani' },
    // ];
    // return itemData;
  }

  const setAndSaveItems = (newItems:any) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }

  const [name, setName] = useState(handleName());
  const [items, setItems] = useState(createItems);
  const [newItem, setNewItem] = useState('');
  const [searchItem, setSearchItem] = useState('');
  
  const addItem = (item:string) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem : ItemData = { id:id, checked: false, name:item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

  const handleCheck = (id: number) => {
      const listItems = items.map((item) => item.id == id ? { ...item, checked: !item.checked } : item);
      setAndSaveItems(listItems);
  }

  const handleDelete = (id: number) => {
      const listItems = items.filter((item) => item.id != id);
      setAndSaveItems(listItems);
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="checkbox-container">
      <Header 
        title="Iftar Menu"
        name = {name} />
      <ItemAdd 
          newItem = {newItem}
          setNewItem = {setNewItem}
          handleSubmit = {handleSubmit}/>
      <ItemSearch
          searchItem = {searchItem}
          setSearchItem = {setSearchItem} />
      <Content 
        items = {items.filter(item => ((item.name.toLowerCase()).includes(searchItem.toLowerCase())))}
        handleName = {handleName}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete} />
      <Footer 
        length = {items.length} />
    </div>
  );
}

export default App;
