
axios.defaults.baseURL = 'https://api.wancloud.io/apis/bcs/entry/';
var current_host = window.location.hostname;
var mvpi_api = "http://" + current_host;

axios.defaults.headers.get = {
  'user-key': '2a1efdc85c57919d2495bd50aa8599b50ed1391dc881623ad3fa2363c932287a',
  'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://27.115.27.218',
  'Access-Control-Allow-Credentials': 'true',
};



axios.defaults.validateStatus = function (status) {
    if (status == 401) {
      user_account.request_login();
    }
    return status >= 200 && status < 300; // default
  };
axios.defaults.method = 'post';

var get_info_factom = axios.create({
  method: 'GET',
  strictSSL: false,
});