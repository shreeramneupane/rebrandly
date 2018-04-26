class RebrandlyApi {
  static baseUrl = 'https://api.rebrandly.com/v1'

  static get (path, params) {
      const url = RebrandlyApi.baseUrl + path;

      return fetch(url, {
        headers: {
          apikey: params.headers.apikey
        }
      })
      .then(response => {
        if (!response.ok) {
          return Promise.reject(new Error(response.statusText))
        }
        else {
          return response.json()
        }
      })
  }
}

export default RebrandlyApi;