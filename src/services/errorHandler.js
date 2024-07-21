import { HTTP_STATUS_CODES } from "../constants/httpStatusCodes";

export const logError = (error, funcName) => {
  if (!error.response.status) {
    console.error(error);
  } else if (error.response.status === HTTP_STATUS_CODES.NOT_FOUND) {
    console.error(
      `Error in ${funcName}: ${HTTP_STATUS_CODES.NOT_FOUND} - ${error.response.statusText}`,
    );
  } else if (error.response.status === HTTP_STATUS_CODES.BAD_REQUEST) {
    console.error(
      `Error in ${funcName}: ${HTTP_STATUS_CODES.BAD_REQUEST} - ${error.response.statusText}`,
    );
  } else if (error.response.status === HTTP_STATUS_CODES.UNAUTHORIZED) {
    console.error(
      `Error in ${funcName}: ${HTTP_STATUS_CODES.UNAUTHORIZED} - ${error.response.statusText}`,
    );
  } else if (
    error.response.status === HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
  ) {
    console.error(
      `Error in ${funcName}: ${HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR} - ${error.response.statusText}`,
    );
  } else {
    console.error(
      `Error in ${funcName}: Unexpected error - ${error.response.statusText}`,
    );
  }

  return {
    isSuccess: false,
    message: "Something wrong happened. Try again later.",
  };
};
