import { useParams, Link } from 'react-router-dom'
import PostData from '../Model/PostData'
import { Fragment } from 'react/jsx-runtime';

const PostDetail = ({ posts, handleDelete }: PostDetailProps) => {
  const { id } = useParams();
  const post = posts.find(post => post.id.toString() === id);

  return (
    <div className='PostPage'>
      <article className='post'>
        {post ? (
          <Fragment>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.datetime}</p>
            <p className='postBody'>{post.body}</p>
            <button
              onClick={() => handleDelete(post.id)}>
              Delete post
            </button>
          </Fragment>
        ) : (
          <Fragment>
            <p>Post not found</p>
            <Link to="/">Back to Home</Link>
          </Fragment>
        )}
      </article>
    </div>
  )
}

interface PostDetailProps {
  posts: PostData[];
  handleDelete: any;
}

export default PostDetail
