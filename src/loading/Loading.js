import React from 'react';
import icon from '../img/loading.gif';
import LoadingContainer from './LoadingContainer';

export default function Loading() {
    return (
        <LoadingContainer>
            <img src={icon} alt='Loading' title='Loading...' />
        </LoadingContainer>
    )
}
