import { toast } from "react-toastify";

  export const returnError = (message: string) =>
    toast.error(message, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
