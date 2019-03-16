import React from 'react';
import NavContainer from './NavContainer';
import NavSearchForm from './NavSearchForm';

export default function Nav(props) {
    return (
        <NavContainer>
            <NavSearchForm {...props} />
        </NavContainer>
    )
}
