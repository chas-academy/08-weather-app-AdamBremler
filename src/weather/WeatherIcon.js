import React from 'react';

export default function WeatherIcon({ icon }) {
    const imageName = (icon.charAt(0).toUpperCase() + icon.slice(1)).replace(/-/g, ' ');

    return (
        <img src={require(`../img/${icon}.svg`)} title={imageName} alt={imageName} />
    )
}
