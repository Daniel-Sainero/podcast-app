import styled from 'styled-components'

export const HeaderStyled = styled.div`
  border-bottom: 1px solid #d6d6d6;
  color: #2196f3;
  font-weight: bold;
  padding: 0.5rem 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LoaderStyled = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  background: #2196f3;
  border-radius: 10px;
  -webkit-animation: loading 2s infinite ease;
  animation: loading 2s infinite ease;

  &:after {
    content: "";
    width: 1.5rem;
    height: 1.5rem;
    background: white;
    border-radius: 50%;
    margin: auto;
    -webkit-animation: size 2s infinite ease;
    animation: size 2s infinite ease;
  }

  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes size {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`
