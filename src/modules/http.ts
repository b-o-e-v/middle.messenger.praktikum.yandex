enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

type Options = {
  method: METHOD
  data?: { [key: string]: any }
}

class Http {
  async get<TResponse> (url: string, data?: {}): Promise<TResponse> {
    return this.request(url, { method: METHOD.GET, data })
  }

  async post<TResponse> (url: string, data: {}): Promise<TResponse> {
    return this.request(url, { method: METHOD.POST, data })
  }

  async put<TResponse> (url: string, data: {}): Promise<TResponse> {
    return this.request(url, { method: METHOD.PUT, data })
  }

  async delete<TResponse> (url: string, data: {}): Promise<TResponse> {
    return this.request(url, { method: METHOD.DELETE, data })
  }

  private _setURL (url: string, data: {}) {
    return `${url}?${Object.entries(data)
      .map(([key, value]: [key: string, value: any]): string => {
        return `${key}=${value}`
      })
      .join('&')}`
  }

  async request<TResponse> (
    url: string,
    options: Options = { method: METHOD.GET }
  ): Promise<TResponse> {
    return new Promise((resolve, reject) => {
      const { method, data } = options

      const xhr = new XMLHttpRequest()

      if (method === METHOD.GET) {
        if (data) url = this._setURL(url, data)
      }

      xhr.open(method, url)
      xhr.withCredentials = true

      xhr.onload = function () {
        const resp = JSON.parse(xhr.response) || xhr.response
        if (xhr.status === 200) {
          resolve(resp)
        } else {
          reject(resp)
        }
      }

      xhr.onabort = reject
      xhr.onerror = reject
      xhr.ontimeout = reject

      if (method === METHOD.GET || !data) {
        xhr.send()
      } else {
        if (data instanceof FormData) {
          xhr.send(data)
        } else {
          xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
          xhr.send(JSON.stringify(data))
        }
      }
    })
  }
}

const http = new Http()

export default http
