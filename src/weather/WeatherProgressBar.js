import styled from 'styled-components';
import { Progress } from 'reactstrap';

const WeatherProgressBar = styled(Progress)`
    > .progress-bar {
        background-color: ${props => props.color} !important;
    }
`;

export default WeatherProgressBar;
