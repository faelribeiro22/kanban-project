import axios, { AxiosInstance } from 'axios'

export class AuthService {
  protected readonly instance: AxiosInstance
  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 3000,
      timeoutErrorMessage: 'Time out!'
    })
  }

  login = (login: string, senha: string) => {
    return this.instance
      .post('/login', {
        login,
        senha
      })
      .then((res) => {
        return {
          accesToken: res.data
        }
      })
  }
}
