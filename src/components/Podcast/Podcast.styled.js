import styled from 'styled-components'

export const PodcastStyled = styled.div`
  border-radius: 4px;
  box-shadow: 0 0 5px #80808082;
  cursor: pointer;
  height: 10rem;
  padding: 0 1rem;
  position: relative;
  width: 15rem;
`
export const InfoWrapperStyled= styled.div`
display: flex;
flex-direction: column;
height: 100%;
justify-content: flex-end;
`

export const TitleStyled = styled.p`
  font-size: 0.9rem;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`

export const AuthorStyled = styled.p`
  color: #808080;
  font-size: 0.8rem;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const ImageStyled = styled.img`
  border-radius: 50%;
  box-shadow: 0 0 5px #80808082;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: -30%;
  width: 50%;
`
