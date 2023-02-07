import useFetch from './useFetch'
import {useHistory} from 'react-router-dom'

import {useParams} from 'react-router-dom'
function BlogDetails() {
  const {id}=useParams();
  const {data:blog,isPending} =useFetch('http://localhost:8000/blogs/'+id);
  const History=useHistory();
  const handleClick=()=>{
    fetch('http://localhost:8000/blogs/'+blog.id,{
      method:'DELETE',
     }).then(()=>{
       History.push('/');
     })
  }
  return (
    <div className="blog-details">
        {isPending && <div>Loading...</div>}
        {blog&&(
          <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <p>{blog.body}</p>
            <button onClick={handleClick}>Delete</button>
          </article>
        )}
    </div>
  )
}

export default BlogDetails
