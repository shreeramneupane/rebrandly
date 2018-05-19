class RebrandlyApi {
  static baseUrl = 'https://api.rebrandly.com/v1'

  static get (path, params) {
      const url = RebrandlyApi.baseUrl + path;
      const apikey = sessionStorage.getItem("apikey") || params.headers.apikey;

      return fetch(url, {
        headers: {
          apikey: apikey
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