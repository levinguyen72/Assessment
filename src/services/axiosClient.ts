import Axios , { AxiosError, AxiosRequestConfig }  from "axios";


export const coreAxios = Axios.interceptors.response.use(
  (response:any) => {
    return response.data;
  },
  (error:AxiosError) => {
    return Promise.reject(error);
  }
);
