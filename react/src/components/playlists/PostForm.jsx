import {useState} from "react";
import axios from 'axios';

function PostForm(props) {
    const [title, setTitle] = useState('');
    const [token, setToken] = useState('');
    
    const [responseJSON, setResponseJSON] = useState('');

    const {url} = props
    const fullPath = url 
    

    const handleSubmit = async (e) => {
      e.preventDefault();
       await axios.post(`${fullPath}`, {
        title: title
      },{ headers: {
        'Authorization': `Bearer ${token}`,
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      }}
      ).then(response => {
        setResponseJSON(JSON.stringify(response.data, null, '\t'));
        //console.log(response.data)
      }).catch(err => console.log(err.response.data))
      
    };

    return (
      <>
      <div className="m-auto" style={{width: '24rem', minHeight: '345px'}}>
      <article className="border p-12 bg-white">
      <h1><i>POST </i></h1>
        <h1>{fullPath}</h1>
      <hr className="mb-4 mt-4"/>
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={(e) => setToken(e.target.value)} className="w-full bg-gray-200 rounded my-1 p-1 border" type="text" name="token" id="token" placeholder="token" />
        </div>
        <div>
          <input onChange={(e) => setTitle(e.target.value)} className="w-full bg-gray-200 rounded my-1 p-1 border" type="text" name="title" id="title" placeholder="title" />
        </div>
        <input className="w-4/12 text-white rounded mt-2 mb-2" style={{backgroundColor: 'rgba(var(--d69,0,149,246), 1)'}} type="submit" value="Submit" />
      </form>
    </article>
    <article className="text-center border mt-3 py-7 bg-white">
        <p >Response: </p>
        <pre className="w-9/12 m-auto" style={{overflow: 'auto'}}>{responseJSON}</pre>
      </article>
      </div>
        </>
    );
  }

export default PostForm;