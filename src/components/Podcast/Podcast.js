import { useNavigate } from 'react-router-dom'
import {
  PodcastStyled,
  TitleStyled,
  ImageStyled,
  AuthorStyled,
  InfoWrapperStyled,
} from './Podcast.styled'

const PodcastComponent = (props) => {
  const navigate = useNavigate()

  return (
    <PodcastStyled onClick={() => navigate(`/podcast/${props.id}`)}>
      <ImageStyled alt='podcast logo' src={props.image}></ImageStyled>
      <InfoWrapperStyled>
        <TitleStyled title={props.podcastName}>{props.podcastName}</TitleStyled>
        <AuthorStyled title={props.author}>Author: {props.author}</AuthorStyled>
      </InfoWrapperStyled>
    </PodcastStyled>
  )
}

export default PodcastComponent
