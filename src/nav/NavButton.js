import styled from 'styled-components';
import { Button } from 'reactstrap';

const NavButton = styled(Button)`
    &&& {
        color: white;
        background-color: ${props => props.color};
        border: none;
        margin-left: 8px;
    }
`;

export default NavButton;
