import styled from 'styled-components';
import { Button } from 'reactstrap';

const NavButton = styled(Button)`
    &&& {
        color: white;
        background-color: hsl(213, 65%, 53%);
        border: none;
        margin-left: 8px;
    }
`;

export default NavButton;
