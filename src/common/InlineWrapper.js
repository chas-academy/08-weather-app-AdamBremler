import styled from 'styled-components';

const InlineWrapper = styled.div`
    display: inline-block;
    text-align: ${props => props.right ? 'right' : (props.center ? 'center' : 'left')};
`;

export default InlineWrapper;
