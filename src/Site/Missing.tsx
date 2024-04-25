import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'>
      <h2>Page not found</h2>
      <Link to="/">Back to Home</Link>
    </main>
  )
}

export default Missing
