import './App.css';
import ItemData from './Models/ItemData'
import ItemAdd from './Items/ItemAdd'
import ItemSearch from './Items/ItemSearch';
import Header from './Site/Header'
import Content from './Site/Content'
import Footer from './Site/Footer'
import { addNewItem, updateItem, deleteItem } from './apiRequest'
import { useState, useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'

function App() {
  const API_URL = "http://localhost:3500/items";
  
  const handleName = () => {
    const names = ["isa", "mohammad", "ali"]
    const position = Math.floor(Math.random() * 3);
    return names[position];
  }

  const [progress, setProgress] = useState(10)
  const [fetchError, setFetchError] = useState('');
  const [items, setItems] = useState<ItemData[]>([]);
  const [name, setName] = useState(handleName());
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
        setProgress(100);
      }
    }

    setTimeout(() => {
      (async () => (await fetchItems()))();
    },2000);
  }, [])

  const addItem = async (item: string) => {
    setProgress(10);
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem: ItemData = { id: id, checked: false, name: item };
    const listItems = [...items, myNewItem];
    
    const result = await addNewItem(API_URL, myNewItem);
    handleListItemResult(result, listItems);
  }

  const handleCheck = async (id: number) => {
    setProgress(10);
    const listItems = items.map((item) => item.id == id ? { ...item, checked: !item.checked } : item);

    const listItem = listItems.filter((item) => item.id == id);
    const result = await updateItem(`${API_URL}/${id}`, {checked:listItem[0].checked});
    handleListItemResult(result, listItems);
  }

  const handleDelete = async (id: number) => {
    setProgress(10);
    const listItems = items.filter((item) => item.id != id);

    const result = await deleteItem(`${API_URL}/${id}`);
    handleListItemResult(result, listItems);
  }
  
  const handleListItemResult = (result: any, listItems:any) => {
    if(result) setFetchError(result);
    else setItems(listItems);
    setProgress(100);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="checkbox-container">
      <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />
      <Header
        title="Grocery List"
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
        handleCheck={handleCheck}
        handleDelete={handleDelete} />}
      <Footer
        length={items.length}
        fetchError = {fetchError} />
    </div>
  );
}

export default App;
