const enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type Options = {
  method?: METHODS;
  data?: Record<string, string>;
  timeout?: number;
};

function queryStringify(data: Record<string, string> | undefined) {
  if (data) {
    let queryString = '?';
    for (const [key, value] of Object.entries(data)) {
      queryString += `${key}=${value}&`;
    }
    return queryString.slice(0, -1);
  } else {
    return '';
  }
}

export class HTTPTransport {
  get = (url: string, options: Options = {}) => {
    return this.request(
      url + queryStringify(options.data),
      { ...options, method: METHODS.GET },
      options.timeout
    );
  };

  post = (url: string, options: Options = {}) =>
    this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  put = (url: string, options: Options = {}) =>
    this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  delete = (url: string, options: Options = {}) =>
    this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  request = (url: string, options: Options, timeout = 5000) => {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method as METHODS, url);

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      xhr.timeout = timeout;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}