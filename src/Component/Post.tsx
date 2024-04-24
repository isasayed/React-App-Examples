import { Link } from 'react-router-dom'

const Post = (props:any) => {
  return (
    <article className="post">
        <Link to={`/post/${props.post.id}`}>
            <h2>{props.post.title}</h2>
            <p className="postDate">{props.post.datetime}</p>
        </Link>
        <p className="postBody">{
            (props.post.body).length <= 25
                ? props.post.body
                : `${(props.post.body).slice(0, 25)}...`
        }</p>
    </article>
  )
}

export default Post
