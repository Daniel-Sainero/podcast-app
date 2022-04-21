import EpisodesInfoComponent from '../../components/EpisodesInfo/EpisodesInfo'
import {
  DetailWrapperStyled,
  AudioWrapperStyled,
  AudioTitle,
  AudioDescription,
  AudioStyled,
} from './podcast-detail.styled'
import DOMPurify from 'dompurify'

const PodcastDetail = () => {
 const feed = JSON.parse(localStorage.getItem('feed'));
 const podcast = JSON.parse(localStorage.getItem('podcast'));

  return (
    feed && (
      <DetailWrapperStyled>
        <EpisodesInfoComponent
          podcast={feed}
        ></EpisodesInfoComponent>

        <AudioWrapperStyled>
          <AudioTitle>{podcast.title}</AudioTitle>
           <AudioDescription
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(podcast.content),
            }}
          ></AudioDescription>
          <AudioStyled controls>
            <source src={podcast.enclosure.url} type='audio/mpeg'></source>
          </AudioStyled>
        </AudioWrapperStyled>
      </DetailWrapperStyled>
    )
  )
}

export default PodcastDetail
