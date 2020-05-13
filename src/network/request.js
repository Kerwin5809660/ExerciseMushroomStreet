import axios from "axios";

export function request(config) {
  const axios1 = axios.create({
    // baseURL:"192.168.0.104:8080/",开发请求数据
    timeout: 5000
  });

  //响应式拦截
  axios1.interceptors.response.use(res => {
    // console.log(res);
    return res.data;
  });
  return axios1(config);
}
