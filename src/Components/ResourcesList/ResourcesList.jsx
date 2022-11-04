import React from 'react';
import ResourceCard from '../ResourceCard/ResourceCard';
import { CardWrapper } from './Styles';

const ResourcesList = (props) => {

    const resourcesList = props.resources.map((resource) => {
        return <ResourceCard key={resource.id} resource={resource}></ResourceCard>
    })

    return (
        <CardWrapper>
            {resourcesList}
        </CardWrapper>
    )

}

export default ResourcesList;