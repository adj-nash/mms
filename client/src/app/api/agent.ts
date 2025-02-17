import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { router } from "../router/Routes";

axios.defaults.baseURL = "http://localhost:5238/api/";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 500));

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(
  async (response) => {
    await sleep();
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;
    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors: string[] = [];
          for (const key in data.errors) {
            modelStateErrors.push(data.errors[key]);
          }
          throw modelStateErrors.flat();
        }
        toast.error(data.title);
        break;
      case 401:
        toast.error(data.title);
        break;
      case 404:
        toast.error(data.title);
        break;
      case 500:
        router.navigate("/server-error/", { state: { error: data } });
        break;
    }

    return Promise.reject(error.response);
  }
);

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: object) => axios.post(url, body).then(responseBody),
  put: (url: string, body: object) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const products = {
  list: () => requests.get("Products"),
  details: (id: number) => requests.get(`Products/${id}`),
};

const errors = {
  get400Error: () => requests.get("Errors/bad-request"),
  get401Error: () => requests.get("Errors/unauthorised"),
  get404Error: () => requests.get("Errors/not-found"),
  get500Error: () => requests.get("Errors/server-error"),
  getValidationError: () => requests.get("Errors/validation-error"),
};

const agent = {
  products,
  errors,
};

export default agent;
