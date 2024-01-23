import { atom } from "recoil";
import { IMovie } from "../types/interface";

export const movieAtomState = atom<IMovie[]>({
  key: "movieAtom",
  default: [],
});

export const likedMoviesState = atom<IMovie[]>({
  key: "likedMovies",
  default: [],
});

export const movieLikeState = atom({
  key: "movieLikeState",
  default: {} as Record<number, boolean>,
});
