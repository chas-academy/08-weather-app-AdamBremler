import React from 'react';
import NavContainer from './NavContainer';
import NavSearchForm from './NavSearchForm';

export default function Nav({ mainAlpha }) {
    return (
        <NavContainer>
            <NavSearchForm mainAlpha={mainAlpha} />
        </NavContainer>
    )
}
