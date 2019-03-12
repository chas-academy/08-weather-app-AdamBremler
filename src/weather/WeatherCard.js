import styled from 'styled-components';
import { Card } from 'reactstrap';

const WeatherCard = styled(Card)`
    width: 300px;
    text-align: center;
    padding: 30px 40px;
    color: white;
    background-color: #005 !important;
    background-image: linear-gradient(rgba(96, 154, 225, ${props => props.alpha}), rgba(118, 167, 227, ${props => props.alpha + .2}));
`;

export default WeatherCard;
