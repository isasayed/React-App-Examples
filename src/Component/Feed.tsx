import Post from './Post'

const Feed = (props: any) => {
  return (
    <div>
      {props.posts.map((post: any) => (
        <Post
          key={post.id}
          post={post} />
      ))}
    </div>
  )
}

export default Feed
