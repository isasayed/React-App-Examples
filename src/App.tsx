import './App.css';
import ItemData from './Models/ItemData'
import ItemAdd from './Items/ItemAdd'
import ItemSearch from './Items/ItemSearch';
import Header from './Site/Header'
import Content from './Site/Content'
import Footer from './Site/Footer'
import { addNewItem, updateItem, deleteItem } from './apiRequest'
import { useState, useEffect } from 'react'

function App() {
  const API_URL = "http://localhost:3500/items";
  const handleName = () => {
    const names = ["isa", "mohammad", "ali"]
    const position = Math.floor(Math.random() * 3);
    return names[position];
  }

  const [fetchError, setFetchError] = useState('');
  const [name, setName] = useState(handleName());
  const [items, setItems] = useState<ItemData[]>([]);
  const [newItem, setNewItem] = useState('');
  const [searchItem, setSearchItem] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const reponse = await fetch(API_URL);
        if(!reponse.ok)
          throw Error('Items API Error');
        const storedData = await reponse.json();
        const listItems: ItemData[] = storedData ? storedData : [];
        setItems(listItems);
      } catch (err:any) {
        setFetchError(err.message);
      } finally{
        setIsLoading(false);
      }
    }

    setTimeout(() => {
      (async () => (await fetchItems()))();
    },2000);
  }, [])

  const addItem = async (item: string) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem: ItemData = { id: id, checked: false, name: item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const result = await addNewItem(API_URL, myNewItem);
    if(result) setFetchError(result);
  }

  const handleCheck = async (id: number) => {
    const listItems = items.map((item) => item.id == id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);

    const listItem = listItems.filter((item) => item.id == id);
    const result = await updateItem(`${API_URL}/${id}`, {checked:listItem[0].checked});
    if(result) setFetchError(result);
  }

  const handleDelete = async (id: number) => {
    const listItems = items.filter((item) => item.id != id);
    setItems(listItems);

    const result = await deleteItem(`${API_URL}/${id}`);
    if(result) setFetchError(result);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="checkbox-container">
      <Header
        title="Iftar Menu"
        name={name} />
      <ItemAdd
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit} />
      <ItemSearch
        searchItem={searchItem}
        setSearchItem={setSearchItem} />
      {isLoading && <p className='empty-error'>Loading...</p>}
      {!fetchError && !isLoading && <Content
        items={items.filter(item => ((item.name.toLowerCase()).includes(searchItem.toLowerCase())))}
        handleName={handleName}
        handleCheck={handleCheck}
        handleDelete={handleDelete} />}
      <Footer
        length={items.length}
        fetchError = {fetchError} />
    </div>
  );
}

export default App;
