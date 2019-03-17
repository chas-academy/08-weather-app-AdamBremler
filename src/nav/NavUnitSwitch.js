import React from 'react';
import Switch from 'react-switch';
import NavUnitSwitchContainer from './NavUnitSwitchContainer';

export default function NavUnitSwitch({ weatherColor, isSiUnits, setSiUnits }) {
    const handleChange = checked => {
        setSiUnits(checked);
    }

    return (
        <NavUnitSwitchContainer>
            <h2>US</h2>
            <label>
                <Switch
                    onChange={handleChange}
                    checked={isSiUnits}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    offColor={weatherColor.hex()}
                    onColor={weatherColor.hex()}
                />
                <small>Unit system</small>
            </label>
            <h2>SI</h2>
        </NavUnitSwitchContainer>
    )
}
