import React from 'react';
import Color from 'color';
import NavContainer from './NavContainer';
import NavSearchForm from './NavSearchForm';
import NavUnitSwitch from './NavUnitSwitch';

export default function Nav(props) {
    const weatherColor = Color('#94bae8').darken(Math.abs(1 - props.mainAlpha) * 0.7);

    return (
        <NavContainer>
            <NavSearchForm {...props} weatherColor={weatherColor} />
            <NavUnitSwitch weatherColor={weatherColor} isSiUnits={props.isSiUnits} setSiUnits={props.setSiUnits} />
        </NavContainer>
    )
}
