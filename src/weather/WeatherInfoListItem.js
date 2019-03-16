import styled from 'styled-components';
import { ListGroupItem } from 'reactstrap';

const WeatherInfoListItem = styled(ListGroupItem).attrs({
    className: 'd-flex flex-row align-items-center'
})`
    justify-content: space-between;
    
    &&& {
        padding-top: ${props => props.day ? '10px' : '0px'};
        padding-bottom: ${props => props.day ? '10px' : '0px'};
        border-color: #eaeaea;
    }

    &&&:first-of-type {
        border-top: 1px solid #eaeaea !important;
    }
`;

export default WeatherInfoListItem;
