import styled from 'styled-components';
import { Col } from 'reactstrap';

const NavUnitSwitchContainer = styled(Col).attrs({
    className: 'col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 px-lg-0 px-xl-4 d-flex align-items-center justify-content-around'
})`
    & > h2 {
        font-size: 1.4em;
        margin: 0;
    }
`;

export default NavUnitSwitchContainer;
