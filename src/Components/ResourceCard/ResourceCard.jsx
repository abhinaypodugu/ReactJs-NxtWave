import React from 'react';
import {
    CardBox,
    CardHeader,
    CardHeaderTitle,
    CardTitleWrapper,
    CardImageWrapper,
    CardLink,
    CardDescription,
    CardStyledImg,
    CardTitleDescription,
  } from './Styles'

const ResourceCard = (props) => {
    const { title, icon_url, link, description, category, tag, id } = props.resource

    return (
        <CardBox>
        <CardHeader>
          <CardImageWrapper>
            <CardStyledImg src={icon_url} alt={title} />
          </CardImageWrapper>
          <CardTitleWrapper>
            <CardHeaderTitle>{title}</CardHeaderTitle>
            <CardTitleDescription>{category}</CardTitleDescription>
          </CardTitleWrapper>
        </CardHeader>
        <CardLink href={link}>
          {link}
        </CardLink>
        <CardDescription>{description}</CardDescription>
      </CardBox>
    );
};

export default ResourceCard;

