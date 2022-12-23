import { useLogin } from '../../hooks/useLogin'
import { createContext, useContext, useMemo, useState } from 'react'
import * as S from './styles'

export const UserTokenContext = createContext('')

const Main = ({}) => {
  // const [userToken, setUseToken] = useState('')

  const { login } = useLogin()

  const userToken = useMemo(async () => {
    return await login('letscode', 'lets@123')
  }, [login])

  console.log('login 2', userToken)

  return (
    <S.Wrapper>
      <h1>Main</h1>
    </S.Wrapper>
    // <UserTokenContext.Provider value={{ login }}>
    // </UserTokenContext.Provider>
  )
}

export const useUserToken = () => useContext(UserTokenContext)
export default Main
