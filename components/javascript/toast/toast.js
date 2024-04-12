import { toast } from 'react-toastify';

const toastSuccess = (text) => {
  return toast.success(text ?? 'Connection Successful', { autoClose: 1000, theme: 'dark' });
};
const toastError = (text) => {
  return toast.error(text ?? 'Connection Unsuccessful', { autoClose: 1000, theme: 'dark' });
};
const toastInfo = (text) => {
  return toast.info(text ?? 'Info Area', { autoClose: 3000, theme: 'dark' });
};
export { toastSuccess, toastError, toastInfo };
