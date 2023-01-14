import { useLogin } from '../../hooks/useLogin'
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'
import * as S from './styles'
import Kanban from 'components/Kanban'
import { Cards } from 'components/Kanban/mock'

export const UserTokenContext = createContext('')

const Main = ({}) => {
  // const [userToken, setUseToken] = useState('')

  const { login } = useLogin()

  const userToken = useMemo(async () => {
    try {
      const token = await login('letscode', 'lets@123')
      return token
    } catch (e) {
      throw new Error('Error to login', { cause: e })
    }
  }, [login])

  console.log('login 2', userToken)

  return (
    <UserTokenContext.Provider value={userToken}>
      <S.Wrapper>
        <Kanban tasks={Cards} />
      </S.Wrapper>
    </UserTokenContext.Provider>
  )
}

export const useUserToken = () => useContext(UserTokenContext)
export default Main
