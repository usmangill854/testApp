
import {useEffect, useState} from "react";
import './App.css';

function App() {

  const[post,setPost]=useState([]);
  const[id,setId]=useState(1)
  const[loading,setLoading]=useState(true)
   useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/posts/"+id)
     .then(response=>response.json())
     .then(data=>
    {  
      console.log(data);

      setPost(data) ;
       

     setLoading(false)}
     )

 },[ id])

 const next=_=>{
setId(id+1) 
 }

 if(loading)
 return <h1> Loading... </h1>;

  return (
    <  >
    <h1>list of Posts {id}</h1>
    <h3>
    user id={post.userId}
    </h3>
    <h4>body= {post.body}</h4>
  <button onClick={next}>next</button>
       </>
  );
}

export default App;
