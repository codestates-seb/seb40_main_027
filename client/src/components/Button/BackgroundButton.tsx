import styled from 'styled-components';

export const StyledBackgroundButton = styled.button`
  border: 1px solid ${({ color }) => (color ? color : 'var(--greenMain)')};
  background-color: ${({ color }) => (color ? color : 'var(--greenMain)')};
  color: ${({ color }) => (color === '#EEEEEE' ? 'var(--blackTextNormal)' : 'var(--whiteBackground)')};
`;
