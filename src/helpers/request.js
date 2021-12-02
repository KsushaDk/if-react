const urlWithParams = (urlStr, queryParamsObj) => {
  const url = new URL(urlStr)
  url.searchParams.set('search', `${queryParamsObj.destination}`)

  Object.entries(queryParamsObj).forEach(([key, value]) => {
    return url.searchParams.set(`${key}`, `${value}`)
  })

  return url
}

export const httpGet = (url, queryParams = '', options) => {
  return fetch(urlWithParams(url, queryParams), options)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err))
}
