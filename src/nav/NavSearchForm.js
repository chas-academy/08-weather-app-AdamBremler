import React, { useState, useEffect } from 'react';
import Color from 'color';
import NavFormContainer from './NavFormContainer';
import NavButton from './NavButton';
import NavInput from './NavInput';
import useForwardGeo from '../hooks/useForwardGeo';

export default function NavSearchForm({ mainAlpha, addLocation }) {
    const [input, setInput] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const geoData = useForwardGeo(searchTerm);

    useEffect(() => {
        if (geoData) {

            const [lat1, lat2, lon1, lon2] = geoData[0].boundingbox.map(i => parseFloat(i));
            const location = `${(lat1 + lat2) / 2},${(lon1 + lon2) / 2}`;

            addLocation(location);
        }
    }, [geoData]);

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
