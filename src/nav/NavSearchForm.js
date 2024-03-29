import React, { useState, useEffect } from 'react';
import { FormFeedback } from 'reactstrap';
import NavFormContainer from './NavFormContainer';
import NavSearchFormGroup from './NavSearchFormGroup';
import NavButton from './NavButton';
import NavInput from './NavInput';
import useForwardGeo from '../hooks/useForwardGeo';

export default function NavSearchForm({ weatherColor, addLocation, searchInputError, setSearchInputError, locationList }) {
    const [input, setInput] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const geoData = useForwardGeo(searchTerm);

    useEffect(() => {
        if (geoData) {
            if (geoData.length) {
                setInput('');

                const { lat, lon } = geoData[0];
                const location = `${lat},${lon}`;

                addLocation(location);
            }

            else {
                setSearchInputError('Could not find that location');
            }
        }
    }, [geoData]);

    useEffect(() => {
        setSearchTerm('');
    }, [locationList]);

    const handleChange = e => {
        setSearchInputError('');
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (!input) {
            setSearchInputError('You have to enter a location');
            return;
        }

        if (input === searchTerm) {
            setSearchInputError('You have already added that location');
            return;
        }

        setSearchTerm(input);
    }

    return (
        <NavFormContainer onSubmit={handleSubmit} inline>
            <NavSearchFormGroup>
                <NavInput type="text" placeholder='Add a location...' value={input} onChange={handleChange} invalid={searchInputError ? true : false} />
                <FormFeedback>{searchInputError}</FormFeedback>
            </NavSearchFormGroup>
            <NavButton color={weatherColor.string()}>Add</NavButton>
        </NavFormContainer>
    )
}
