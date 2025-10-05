import { API_BACKEND } from "../configs";

interface IParams {
  url: string,
  option: {
    [key: string]: any
  }
}

class HttpRequest {
  api: string;

  constructor() {
    this.api = API_BACKEND
  }

  // httpRequest.get('/api/todo')
  async get({ url, option }: IParams) {
    return fetch(this.api + url, {
      headers: {
        'Content-Type': 'application/json'
      },
      ...option
    })
  }

  async post({ url, option }: IParams) {
    return fetch(this.api + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...option
    })
  }
}

export const httpRequest = new HttpRequest();
