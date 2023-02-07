import {useState} from 'react';
import {useHistory} from 'react-router-dom'
function Create() {
    const [title,setTitle]=useState();
    const [body,setBody]=useState();
    const [author,setAuthor]=useState();
    const [isPending,setIsPending]=useState(false);
    const History=useHistory();
    const handleSubmit =(e)=>{
      e.preventDefault();
      const blog={title,author,body}
      setIsPending(true);
      fetch('http://localhost:8000/blogs',{
        method:'POST', 
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(blog)
      }).then(()=>{
        console.log('new blog added')
        setIsPending(false);
        History.push('/')
      })
    }
  return (
    <div className="create">
        <h2>Add a new blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input 
               type="text"
               value={title}
               onChange={(e)=>setTitle(e.target.value)}
               required/>
            <label>Blog body:</label>
               <textarea 
               value={body}
               onChange={(e)=>setBody(e.target.value)}

               required></textarea>
            <label>Blog author:</label>
                <select
                 value={author}
                 onChange={(e)=>setAuthor(e.target.value)}>
                <option value="Paulo Coelho">Paulo Coelho</option>
                <option value="Colleen ">Colleen</option>
                </select>
            {!isPending && <button>Add blog</button>}
            {isPending && <button disabled>Adding blog...</button>}

        </form>
    </div>
  )
}

export default Create;
