import styled from 'styled-components'

export const HomeStyled = styled.div`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-row-gap: 5rem;
  grid-column-gap: 5rem;
  justify-items: center;
`
export const SearchContainerStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 1rem 1rem 0;
`

export const SearchBarStyled = styled.input`
  border: 1px solid #d6d6d6;
  border-radius: 0.2rem;
  padding: 0.3rem;
`
