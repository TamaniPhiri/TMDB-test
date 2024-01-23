/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
import { API_KEY, API_URL } from "../constants/api";

interface GetDataProps {
  endpoint: string;
}

export const UseGet = ({
  endpoint,
}: GetDataProps): (() => Promise<AxiosResponse | any>) => {
  return async () => {
    const res = await axios.get(API_URL + endpoint, {
      params: {
        api_key: API_KEY,
      },
    });
    return res.data;
  };
};
