import styled from 'styled-components';
import { ListGroupItem } from 'reactstrap';

const WeatherInfoListItem = styled(ListGroupItem).attrs({
    className: 'd-flex flex-row justify-content-between align-items-center'
})`
    &&& {
        border-color: #eaeaea;
    }

    &&&:first-of-type {
        border-top: 1px solid #eaeaea !important;
    }
`;

export default WeatherInfoListItem;
