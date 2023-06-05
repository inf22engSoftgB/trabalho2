import {useState} from "react";
import axios from 'axios';

function PatchSong(props) {
  const [id, setId] = useState(':id')
  const [token, setToken] = useState('');
  const [artist, setArtist] = useState('');
  const [name, setName] = useState('');
  const [listened, setListened] = useState(false);
    
    const [responseJSON, setResponseJSON] = useState('');

    const {url} = props
    const fullPath = url + 'songs/' + id


    const handleSubmit = async (e) => {
      e.preventDefault();
       await axios.patch(`${fullPath}`, {
        artist: artist,
        name: name,
        listened: listened
      },
      { headers: {
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
      <h1><i>PATCH</i></h1>
        <h1>{fullPath}</h1>
      <hr className="mb-4 mt-4"/>
      <form onSubmit={handleSubmit}>
      <div>
          <input onChange={(e) => setToken(e.target.value)} className="w-full bg-gray-200 rounded my-1 p-1 border" type="text" name="token" id="token" placeholder="token" />
        </div>
        <div>
          <input onChange={(e) => setId(e.target.value)} className="w-full bg-gray-200 rounded my-1 p-1 border" type="text" name="id" id="id" placeholder="song id" />
        </div>
        <div>
          <input onChange={(e) => setArtist(e.target.value)} className="w-full bg-gray-200 rounded my-1 p-1 border" type="text" name="artist" id="artist" placeholder="artist name" />
        </div>
        <div>
          <input onChange={(e) => setName(e.target.value)} className="w-full bg-gray-200 rounded my-1 p-1 border" type="text" name="name" id="name" placeholder="song name" />
        </div>
        <div>
        <select onChange={e => setListened(e.target.value === "true")} id="prefixo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option defaultValue="false">Choose a value for listened</option>
          <option value="false">false</option>
          <option value="true">true</option>
        </select>
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

export default PatchSong;