import { useRecoilValue } from "recoil"
import { likedMoviesState } from "../atoms/atoms"

const Liked = () => {
  const Liked=useRecoilValue(likedMoviesState);
  console.log(Liked);
  
  return (
    <div>
      liked
    </div>
  )
}

export default Liked
