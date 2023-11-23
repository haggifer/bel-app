import axios from "axios";

export interface ISerializableError {
  name: string,
  message: string,
  code: string,
  response: {
    status: string,
    data: string,
  },
}

export const apiProvider = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ?
    process.env.REACT_APP_API_ENDPOINT_PROD :
    process.env.REACT_APP_API_ENDPOINT_LOCAL,
})

apiProvider.interceptors.response.use(response => {
  return response
}, error => {
  const serializableError: ISerializableError = {
    name: error.name,
    message: error.message,
    code: error.code,
    response: {
      status: error.response.status,
      data: error.response.data,
    },
  };

  return Promise.reject(serializableError);
})