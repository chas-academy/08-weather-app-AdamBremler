import styled from 'styled-components';

const WeatherListIconContainer = styled.div`
    margin-left: auto;
    margin-right: ${props => props.horizontal ? 0 : '10px'};
    margin-top: -12px !important;
    margin-bottom: -12px !important;

    > img {
        width: 60px;
        filter: brightness(0.6);
    }
`;

export default WeatherListIconContainer;
