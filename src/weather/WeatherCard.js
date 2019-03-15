import styled from 'styled-components';
import { Card } from 'reactstrap';

const WeatherCard = styled(Card)`
    font-weight: 300;
    box-shadow: 1px 1px 30px #ddd;
    text-align: center;
    padding: 35px 40px;
    color: white;
    background-color: #005 !important;
    background-image: linear-gradient(rgba(96, 154, 225, ${props => props.alpha - .1}), rgba(118, 167, 227, ${props => props.alpha + .1}));
`;

export default WeatherCard;
