import { PodcastStyled } from './Podcast.styled'
import { TitleStyled } from './Podcast.styled'
import { ImageStyled } from './Podcast.styled'
import { AuthorStyled } from './Podcast.styled'
import { InfoWrapperStyled } from './Podcast.styled'

const PodcastComponent = (props) => {
  return (
    <PodcastStyled>
      <ImageStyled alt='podcast logo' src={props.image}></ImageStyled>
      <InfoWrapperStyled>
        <TitleStyled title={props.podcastName}>{props.podcastName}</TitleStyled>
        <AuthorStyled title={props.author}>Author: {props.author}</AuthorStyled>
      </InfoWrapperStyled>
    </PodcastStyled>
  )
}

export default PodcastComponent
