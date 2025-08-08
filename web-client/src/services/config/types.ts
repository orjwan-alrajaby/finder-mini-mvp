import { AxiosError } from "axios";

export interface Result<T> {
  success: boolean;
  data?: {
    message: string;
    payload: T;
  };
  error?: string;
  errorDetails?: AxiosError;
}