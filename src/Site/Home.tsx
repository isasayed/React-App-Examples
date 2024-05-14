import Feed from '../Component/Feed'

const Home = (props: any) => {
  return (
    <main className='Home'>
      {props.isLoading && <p className='statusMsg'>Loading...</p>}
      {props.fetchError && <p className='statusMsg' style={{color: 'red'}}>{props.fetchError}</p>}
      {!props.isLoading && !props.fetchError &&
      (
        props.posts.length ? (
          <Feed
            posts={props.posts} />
        ) :
          (
            <p> no posts available </p>
          )
      )}
    </main>
  )
}

export default Home
