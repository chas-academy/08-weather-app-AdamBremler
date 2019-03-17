import React, { useState, useEffect } from 'react';
import Color from 'color';
import { FormFeedback } from 'reactstrap';
import NavFormContainer from './NavFormContainer';
import NavSearchFormGroup from './NavSearchFormGroup';
import NavButton from './NavButton';
import NavInput from './NavInput';
import useForwardGeo from '../hooks/useForwardGeo';

export default function NavSearchForm({ mainAlpha, addLocation }) {
    const [input, setInput] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const geoData = useForwardGeo(searchTerm);

    useEffect(() => {
        if (geoData) {
            if (geoData.length) {
                const { lat, lon } = geoData[0];
                const location = `${lat},${lon}`;

                addLocation(location);
            }

            else {
                setErrorMessage('Could not find that location');
            }
        }
    }, [geoData]);

    const handleChange = e => {
        setErrorMessage('');
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        setInput('');

        setSearchTerm(input);
    }

    const buttonColor = Color('#94bae8').darken(Math.abs(1 - mainAlpha) * 0.7);

    return (
        <NavFormContainer onSubmit={handleSubmit} inline>
            <NavSearchFormGroup>
                <NavInput type="text" placeholder='Add a location...' value={input} onChange={handleChange} invalid={errorMessage ? true : false} />
                <FormFeedback>{errorMessage}</FormFeedback>
            </NavSearchFormGroup>
            <NavButton color={buttonColor.string()}>Add</NavButton>
        </NavFormContainer>
    )
}
