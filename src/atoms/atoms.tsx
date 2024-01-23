import { atom } from "recoil";
import { IMovie } from "../types/interface";

export const movieAtomState = atom<IMovie[]>({
  key: "movieAtom",
  default: [],
});
