import styled from 'styled-components';

export const StyledBorderButton = styled.button`
  border: 1px solid ${({ color }) => (color ? color : 'var(--greenMain)')};
  background-color: var(--whiteBackground);
  color: ${({ color }) => (color ? color : 'var(--greenMain)')};
`;
