import styled from 'styled-components';
import { Button } from 'reactstrap';

const NavButton = styled(Button).attrs({
    className: 'ml-0 ml-sm-2 col-12 col-sm-2'
})`
    &&& {
        color: white;
        background-color: ${props => props.color};
        border: none;
    }
`;

export default NavButton;
