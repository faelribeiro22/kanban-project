import { authService } from '../services'

export const useLogin = () => {
  const login = async (login: string, senha: string) => {
    const token = await authService.login(login, senha)
    return token.accesToken
  }

  return { login }
}
