import { Result } from "./types";
import axiosInstance from "./axiosInstance";

const genericRequest = async <P, R>(
  method: string,
  endpoint: string,
  payload?: P,
  headers?: Record<string, string>,
): Promise<Result<R>> => {
  try {
    const response = await axiosInstance({
      method,
      url: endpoint,
      data: payload,
      headers,
    });

    if (response.data.status === "success") {
      return {
        success: true,
        data: response.data.data,
      };
    } else {
      return {
        success: false,
        error: response.data.error?.message || "Unknown error occurred",
      };
    }
  } catch (error: unknown) {
    let errorMessage = "Request failed.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return {
      success: false,
      error: errorMessage,
    };
  }
};

export default genericRequest;
