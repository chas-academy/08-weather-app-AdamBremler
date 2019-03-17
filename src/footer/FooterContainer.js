import styled from 'styled-components';

const WeatherInfoListItem = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #f2f2f2;
    padding: 25px;
    text-align: center;
    color: #666;
    line-height: 2em;

    & > * {
        display: block;
    }

    & > a {
        text-decoration: none;
        color: inherit;
    }
`;

export default WeatherInfoListItem;
