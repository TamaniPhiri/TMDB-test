import axios from "axios";
import { API_URL } from "../constants/api";

interface GetDataProps {
  endpoint: string;
}

export const UseGet = async ({ endpoint }: GetDataProps) => {
  const res = await axios.get(API_URL + endpoint);
  return res.data;
};
