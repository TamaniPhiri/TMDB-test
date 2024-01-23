import { atom } from "recoil";
import { IMovie } from "../types/interface";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const movieAtomState = atom<IMovie[]>({
  key: "movieAtom",
  default: [],
});

export const likedMoviesState = atom<IMovie[]>({
  key: "likedMovies",
  default: [],
  dangerouslyAllowMutability: true,
  effects_UNSTABLE: [persistAtom],
});
