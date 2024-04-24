import PostData from '../Model/PostData'

const NewPost = ({ newPostTitle, setNewPostTitle, newPostBody, setNewPostBody, handleNewPost }: NewPostProps) => {
  return (
    <div className="NewPost">
      <h2>New Post</h2>
      <form className='newPostForm' onSubmit={handleNewPost}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          required
          value = {newPostTitle}
          onChange = {(e) => setNewPostTitle(e.target.value)} />
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          required
          value = {newPostBody}
          onChange = {(e) => setNewPostBody(e.target.value)} />
          <button 
            type = "submit">
            Add Post
          </button>
      </form>
    </div>
  )
}

interface NewPostProps {
  handleNewPost: any;
  newPostTitle: string;
  setNewPostTitle: any;
  newPostBody: string;
  setNewPostBody: any;
}

export default NewPost
