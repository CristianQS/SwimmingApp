
export default function ChronometerClient(restClient) {
  function uploadChrono () {
    return restClient.post()
  }
  return {
    uploadChrono
  }
}