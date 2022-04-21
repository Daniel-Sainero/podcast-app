import { useNavigate } from 'react-router-dom'
import { HeaderStyled, LoaderStyled } from './Header.styled'

const HeaderComponent = (props) => {
  const navigate = useNavigate()

  return (

  <HeaderStyled onClick={() => navigate(`/`)}>
  <p>Podcaster</p>
  {props.loading && <LoaderStyled />}
  </HeaderStyled>)
}

export default HeaderComponent
