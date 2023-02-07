import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className="not-found">
        <h2>Sorry</h2>
        <p>page is not found</p>
        <Link to='/'>Back to Home page</Link>
    </div>
  )
}

export default NotFound
