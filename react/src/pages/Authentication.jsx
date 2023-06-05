import {useState} from "react";
import axios from 'axios';

function Authentication(props) {
    const [prefixo, setPrefixo] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [responseJSON, setResponseJSON] = useState('');

    const {url, api} = props
    const fullPath = url + api + 'auth/' + prefixo


    const handleSubmit = async (e) => {
      e.preventDefault();
       await axios.post(`${fullPath}`, {
        email: email,
        password: password
      }
      ).then(response => {
        setResponseJSON(JSON.stringify(response.data, null, '\t'));
        //console.log(response.data)
      }).catch(err => console.log(err.response.data))
      
    };

    return (
      <>
      <section className="flex justify-center py-10">
      <div className="" style={{width: '24rem'}}>
      <article className="border p-12 bg-white">
        <h1>{fullPath}</h1>
      <div className="mb-4 mt-4">
        <label htmlFor="prefixo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
        <select onChange={e => setPrefixo(e.target.value)} id="prefixo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option defaultValue="register">Choose a method</option>
          <option value="register">register</option>
          <option value="login">login</option>
        </select>
        </div>
      <hr className="mb-4 mt-4"/>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email"></label>
          <input onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-200 rounded my-1 p-1 border" type="email" name="email" id="email" placeholder="email" />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input onChange={(e) => setPassword(e.target.value)} className="w-full bg-gray-200 rounded my-1 p-1 border" type="password" name="password" id="password" placeholder="password" />
        </div>
        <input className="w-4/12 text-white rounded mt-2 mb-2" style={{backgroundColor: 'rgba(var(--d69,0,149,246), 1)'}} type="submit" value="Submit" />
      </form>
    </article>
    <article className="text-center border mt-3 py-7 bg-white">
        <p >Response: </p>
        <pre className="w-9/12 m-auto" style={{overflow: 'auto'}}>{responseJSON}</pre>
      </article>
      </div>
    </section>
        </>
    );
  }
  
  export default Authentication;