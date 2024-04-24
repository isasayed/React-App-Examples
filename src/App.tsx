import { useState, useEffect } from 'react';
import Header from './Site/Header'
import Nav from './Site/Nav'
import Home from './Site/Home'
import NewPost from './Post/NewPost'
import PostDetail from './Post/PostDetail'
import About from './Site/About'
import Missing from './Site/Missing'
import Footer from './Site/Footer'
import PostData from './Model/PostData' 
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css';

function App() {
  const createItems = () =>{
    const itemData: PostData[] = [
      {
        id: 1,
        title: "My First Post",
        datetime: "July 01, 2021 11:17:36 AM",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
      },
      {
        id: 2,
        title: "My 2nd Post",
        datetime: "July 01, 2021 11:17:36 AM",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
      },
      {
        id: 3,
        title: "My 3rd Post",
        datetime: "July 01, 2021 11:17:36 AM",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
      },
      {
        id: 4,
        title: "My Fourth Post",
        datetime: "July 01, 2021 11:17:36 AM",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
      }
    ];
    return itemData;
  }

  const [posts, setPosts] = useState(createItems());
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<PostData[]>([]);

  const handleSearch = () => {
    var filteredItems: PostData[] = posts.filter(item => ((item.title.toLowerCase()).includes(search.toLowerCase())))
    setSearchResults(filteredItems)
  }

  useEffect(() =>{
    handleSearch();
  }, [search])

  return (
    <div className="App">
      <Router>
        <Header
          title='React Blog App' />
        <Nav 
          search = {search}
          setSearch = {setSearch} />
        <Routes>
          <Route path='/' 
                element={<Home 
                          posts = {searchResults} />} />
          <Route path='/post' element={<NewPost />} />
          <Route path='/post/:id' element={<PostDetail />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Missing />} />
        </Routes>
        <Footer />
      </Router>     
    </div>
  );
}

export default App;
