import axios from "axios";

const timeout = 5000;
export const baseURL = "http://localhost:3000";
const maxTryCount = 3;
const retryCount = 0;

const httpOption = {
  timeout,
  baseURL,
  maxTryCount,
  retryCount,
};
export const sleep = (ms: number) => {
  return new Promise((res, rej) => {
    setTimeout(res, ms);
  });
};

const instance = axios.create(httpOption);

instance.interceptors.request.use(async (config) => {
  return config;
}, null);

instance.interceptors.response.use(null, async (error) => {
  const { config } = error;
  if (!config) return Promise.reject(error);
  await sleep(2000);

  /// error handling code
});

export { instance as axios };
export * from "axios";
