import styled from 'styled-components'

export const InfoStyled = styled.div`
  box-shadow: 0px 0px 3px #808080a8;
  padding: 1rem;
  width: 18rem;
  height: fit-content;
`
export const LogoWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  & img {
    width: 8rem;
  }
`
export const TitleStyled = styled.p`
  border-top: 1px solid #d6d6d6;
  font-weight: bold;
  padding-top: 2rem;
  padding-bottom: 0.2rem;
  margin: 0;
`
export const AuthorStyled = styled.p`
  margin: 0;
  padding-bottom: 2rem;
  font-weight: light;
  font-style: italic;
  font-size: 0.9rem;
`
export const DescriptionStyled = styled.div`
  border-top: 1px solid #d6d6d6;
  padding-top: 2rem;
  & span {
    font-weight: bold;
    diplay: block;
  }

  & p {
    font-weight: light;
    font-style: italic;
    font-size: 0.9rem;
    margin: 0;
    margin-top: 0.2rem;
  }
`
