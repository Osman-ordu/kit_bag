import axios from 'axios';

export const CallApi = async ({ method, url, data }) => {
    const token = localStorage.getItem('token');
    const request = await axios({
      method: method,
      url: `${apiEnvUrl}${url}`,
      data: data ?? {},
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        toastSuccess(response.statusText && response.statusText !== '' ? response.statusText : "Connection Successful");
        return response.data;
      })
      .catch((error) => {
        toastError(error.response.data.message ? error.response.data.message : error.message && error.message !== '' ? error.message : 'Connection Unsuccessful');
      });
  
    return request;
  };