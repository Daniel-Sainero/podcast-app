import { useNavigate } from 'react-router-dom'
import { HeaderStyled, LoaderStyled } from './Header.styled'
import { useContext } from "react";
import LoadingContext from '../../context/loadingContext'

const HeaderComponent = (props) => {
  const navigate = useNavigate()
  const {loading} = useContext(LoadingContext);

  return (

  <HeaderStyled onClick={() => navigate(`/`)}>
  <p>Podcaster</p>
  {loading && <LoaderStyled />}
  </HeaderStyled>)
}

export default HeaderComponent
