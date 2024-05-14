import { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import Header from './Site/Header'
import Nav from './Site/Nav'
import Home from './Site/Home'
import NewPost from './Post/NewPost'
import EditPost from './Post/EditPost'
import PostDetail from './Post/PostDetail'
import About from './Site/About'
import Missing from './Site/Missing'
import Footer from './Site/Footer'
import PostData from './Model/PostData'
import api from './Api/posts'
import useWindow from './Hooks/useWindow';
import useAxiosFetch from './Hooks/useAxiosFetch';
import './App.css';

function App() {
  const [progress, setProgress] = useState(20)
  const [posts, setPosts] = useState<PostData[]>([]);
  const [editPostTitle, setEditPostTitle] = useState('');
  const [editPostBody, setEditPostBody] = useState('');
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<PostData[]>([]);
  const { width } = useWindow();
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');
  const navigate = useNavigate();

  const handleSearch = () => {
    var filteredItems: PostData[] = posts.filter(item => ((item.title.toLowerCase()).includes(search.toLowerCase())))
    setSearchResults(filteredItems.reverse())
  }

  const handleDelete = async (id: number) => {
    try {
      const response = await api.delete(`/posts/${id}`);
      var filteredItems: PostData[] = posts.filter(item => ((item.id != id)))
      setPosts(filteredItems)
      navigate('/');
    } catch (err: any) {
      console.log(err.message);
    }
  }

  const handleNewPost = async (e: any) => {
    e.preventDefault();
    let form = new FormData(e.target);
    var formObj = Object.fromEntries(form.entries());

    try {
      const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
      const myNewPost: PostData = { id: id, datetime: format(new Date(), 'MMMM dd, yyyy pp'), title: formObj.title.toString(), body: formObj.body.toString() };
      const response = await api.post('/posts', myNewPost);
      const postItems = [...posts, response.data];
      setPosts(postItems);
      navigate('/');
    } catch (err: any) {
      console.log(err.message);
    }
  }

  const handleEditPost = async (id: number) => {
    try {
      const updatedPostItem: PostData = { id: id, datetime: format(new Date(), 'MMMM dd, yyyy pp'), title: editPostTitle, body: editPostBody };
      const response = await api.patch(`/posts/${id}`, updatedPostItem);
      setPosts(posts.map((post) => post.id == id ? { ...updatedPostItem } : post));
      navigate('/');
    } catch (err: any) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    handleSearch();
  }, [search, posts])

  useEffect(() => {
    setPosts(data);
    setProgress(100)
  }, [data])

  return (
    <div className="App">
      <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />
      <Header
        title='React Blog App'
        width={width} />
      <Nav
        search={search}
        setSearch={setSearch} />
      { progress==100 || progress==0 ? ( 
      <Routes>
        <Route path='/'
          element={<Home
            posts={searchResults}
            fetchError={fetchError}
            isLoading={isLoading} />} />
        <Route path='/post'
          element={<NewPost
            handleNewPost={handleNewPost} />} />
        <Route path='/post/:id'
          element={<PostDetail
            posts={posts}
            handleDelete={handleDelete} />} />
        <Route path='/editpost/:id'
          element={<EditPost
            posts={posts}
            editPostTitle={editPostTitle}
            setEditPostTitle={setEditPostTitle}
            editPostBody={editPostBody}
            setEditPostBody={setEditPostBody}
            handleEditPost={handleEditPost} />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      ) :
      ( <div className='Home'></div> )
      }
      <Footer />
    </div>
  );
}

export default App;
