import axios from "axios"
export default {
  send: async ({ url, onSuccess, onError, onCompleted }) => {
    try {
      const response = await axios.get(url)
      if (typeof onSuccess === "function") onSuccess(response.data)
    } catch (error) {
      if (typeof onError === "function") onError(error)
      console.error("> error : ", error)
    } finally {
      if (typeof onCompleted === "function") onCompleted()
    }
  },
}
