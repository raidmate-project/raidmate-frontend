import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 360px;
  height: 100%;
  padding: ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.colors.blue[100]};
`;
