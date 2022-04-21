import styled from 'styled-components'

export const EpisodesListWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 6rem;
`
export const TableStyled = styled.div`
  box-shadow: 0px 0px 3px #808080a8;
  padding: 1rem;
`
export const HeaderStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 1rem;
  font-weight: bold;

  & :first-child {
    text-align: left;
    width: 100%;
  }

  & .date {
    margin-right: 5.5rem;
    text-align: left;
    width: 4rem;
  }

  & .duration {
    text-align: left;
    width: 6.5rem;
  }
`
export const TitleStyled = styled.p`
  box-shadow: 0px 0px 3px #808080a8;
  padding: 1rem;
  margin: 0 0 1rem 0;
  width: 100%;
  font-weight: bolder;
  font-size: 1.5rem;
`
export const PodcastsList = styled.div`
  max-height: 600px;
  overflow-y: auto;
`
export const EpisodeStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #d6d6d6;
  padding: 0 1rem;

  & .title {
    color: blue;
    cursor: pointer;
    text-align: left;
    width: 100%;
  }

  & .date {
    margin-right: 5rem;
    text-align: left;
    width: 5rem;
  }

  & .duration {
    text-align: left;
    width: 5rem;
  }
`
