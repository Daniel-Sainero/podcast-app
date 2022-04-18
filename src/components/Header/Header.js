import { useNavigate } from 'react-router-dom'
import { HeaderStyled } from './Header.styled'

const HeaderComponent = (props) => {
  const navigate = useNavigate()

  return <HeaderStyled onClick={() => navigate(`/`)}>Podcaster</HeaderStyled>
}

export default HeaderComponent
