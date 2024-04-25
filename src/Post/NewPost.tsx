const NewPost = ({ handleNewPost }: NewPostProps) => {
  return (
    <div className="NewPost">
      <h2>New Post</h2>
      <form className='newPostForm' onSubmit={handleNewPost}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          required />
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          name="body"
          required />
        <button
          type="submit">
          Add Post
        </button>
      </form>
    </div>
  )
}

interface NewPostProps {
  handleNewPost: any;
}

export default NewPost