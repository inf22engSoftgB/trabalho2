import DeleteForm from '../components/playlists/DeleteForm'
import GetForm from '../components/playlists/GetForm'
import PatchForm from '../components/playlists/PatchForm'
import PostForm from '../components/playlists/PostForm'

function Playlists(props) {
    const {url, api} = props
    const fullPath = url + api + 'playlists'

    return (
      <>
      <section className="lg:flex justify-center md:block py-10">
        <DeleteForm url={fullPath} />
        <GetForm url={fullPath} />
      </section>
      <section className="lg:flex justify-center md:block py-10">
        <PatchForm url={fullPath} />
        <PostForm url={fullPath} />
      </section>
        </>
    );
  }

export default Playlists;