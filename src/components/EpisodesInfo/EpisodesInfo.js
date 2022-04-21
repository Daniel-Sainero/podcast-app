import React from 'react'
import {
  LogoWrapperStyled,
  InfoStyled,
  TitleStyled,
  AuthorStyled,
  DescriptionStyled,
} from './EpisodesInfo.styled'
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify'


const EpisodesInfoComponent = (props) => {
  const navigate = useNavigate();

  return (
    props.podcast && (
    <InfoStyled>
      <LogoWrapperStyled onClick={() => navigate(-1)} >
        <img alt='podcast logo' src={props.podcast?.image?.url} />
      </LogoWrapperStyled>
      <TitleStyled onClick={() => navigate(-1)}>{props.podcast?.title}</TitleStyled>
      <AuthorStyled onClick={() => navigate(-1)}> by {props.podcast?.itunes?.author}</AuthorStyled>
      <DescriptionStyled>
        <span>Description:</span>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(props.podcast?.description),
          }}
        ></div>
      </DescriptionStyled>
    </InfoStyled>
    )
  )
}

export default EpisodesInfoComponent
