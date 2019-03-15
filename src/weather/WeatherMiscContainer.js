import styled from 'styled-components';

const WeatherMiscContainer = styled.div.attrs({
    className: 'd-flex flex-column'
})`
    position: absolute;
    left: 14px;
    bottom: 14px;
    font-size: 1.1em;
    text-align: left;

    img {
        margin-right: 6px;
    }
`;

export default WeatherMiscContainer;
