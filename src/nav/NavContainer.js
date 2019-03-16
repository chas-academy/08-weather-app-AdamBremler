import styled from 'styled-components';
import { Navbar } from 'reactstrap';

const NavContainer = styled(Navbar)`
    box-shadow: 1px 1px 30px #ddd;
    border-radius: 0 0 5px 5px;
    
    &&& {
        color: #666;
        padding: 15px;
    }
`;

export default NavContainer;
