import axios, { AxiosResponse, AxiosError, AxiosHeaders } from "axios";

interface requestConfig {
  url: string;
  method: string;
  data?: any;
  headers?: AxiosHeaders;
}
export default async function request<T>({
  url,
  method,
  data,
  headers,
}: requestConfig): Promise<AxiosResponse<T>> {
  try {
    const response = await axios.request<T>({
      url: `${BASE_URL_BACK}${url}`,
      method,
      data,
      ...headers,
    });
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<T>;
    if (axiosError.response) {
      throw axiosError.response;
    } else if (axiosError.request) {
      throw new Error("The request was made but no response was received");
    } else {
      throw new Error(axiosError.message);
    }
  }
}
