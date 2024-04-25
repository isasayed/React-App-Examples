import Feed from '../Component/Feed'

const Home = (props:any) => {
  return (
    <main className='Home'>
      {
        props.posts.length ? (
          <Feed
            posts = {props.posts} />
        ) :
        (
         <p> no posts available </p> 
        )
      }
    </main>
  )
}

export default Home
