import {useState} from "react";
import axios from 'axios';

function PostSong(props) {
  const [id, setId] = useState(':id')
  const [token, setToken] = useState('');
  const [artist, setArtist] = useState('');
  const [name, setName] = useState('');
  const listened = false;
    
    const [responseJSON, setResponseJSON] = useState('');

    const {url} = props
    const fullPath = url + 'playlists/' + id + '/songs'


    const handleSubmit = async (e) => {
      e.preventDefault();
       await axios.post(`${fullPath}`, {
        artist: artist,
        name: name,
        listened: listened
      },
      { 
        headers: {
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
      <h1><i>POST</i></h1>
        <h1>{fullPath}</h1>
      <hr className="mb-4 mt-4"/>
      <form onSubmit={handleSubmit}>
      <div>
          <input onChange={(e) => setToken(e.target.value)} className="w-full bg-gray-200 rounded my-1 p-1 border" type="text" name="token" id="token" placeholder="token" />
        </div>
        <div>
          <input onChange={(e) => setId(e.target.value)} className="w-full bg-gray-200 rounded my-1 p-1 border" type="text" name="id" id="id" placeholder="playlist id" />
        </div>
        <div>
          <input onChange={(e) => setArtist(e.target.value)} className="w-full bg-gray-200 rounded my-1 p-1 border" type="text" name="artist" id="artist" placeholder="artist name" />
        </div>
        <div>
          <input onChange={(e) => setName(e.target.value)} className="w-full bg-gray-200 rounded my-1 p-1 border" type="text" name="name" id="name" placeholder="song name" />
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

export default PostSong;