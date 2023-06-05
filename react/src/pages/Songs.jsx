import DeleteSong from '../components/songs/DeleteSong'
import GetSong from '../components/songs/GetSong'
import PatchSong from '../components/songs/PatchSong'
import PostSong from '../components/songs/PostSong'

function Songs(props) {
    const {url, api} = props
    const fullPath = url + api

    return (
      <>
      <section className="lg:flex justify-center md:block py-10">
        <DeleteSong url={fullPath} />
        <GetSong url={fullPath} />
      </section>
      <section className="lg:flex justify-center md:block py-10">
        <PatchSong url={fullPath} />
        <PostSong url={fullPath} />
      </section>
        </>
    );
  }

export default Songs;