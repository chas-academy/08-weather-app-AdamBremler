import React, { useState } from 'react';
import Color from 'color';
import NavFormContainer from './NavFormContainer';
import NavButton from './NavButton';
import NavInput from './NavInput';

export default function NavSearchForm({ mainAlpha }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setSearchTerm(input);
    }

    const buttonColor = Color('#94bae8').darken(Math.abs(1 - mainAlpha) * 0.7);

    return (
        <NavFormContainer onSubmit={handleSubmit} inline>
            <NavInput type="text" placeholder='Add a location...' value={input} onChange={handleChange} />
            <NavButton color={buttonColor.string()}>Add</NavButton>
        </NavFormContainer>
    )
}
