import { BASE_API_URL } from 'shared/const/api'
import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

export const api = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
  }
})
