import styled from 'styled-components';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

export const IconLight = styled(Brightness7Icon)`
  position: absolute;
  top: 0.5rem;
  left: calc(100vw - 0.5rem - 60px);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 0;
  opacity: 0;
  z-index: 17;
  cursor: pointer;

  color: ${props => props.theme.color.white};
  /* color: ${props => props.theme.color.toggle}; */
  opacity: 0;
  transition: 0.4s;
  &.checked {
    opacity: 1;
    z-index: 19;
    &:hover {
      transition: 0.4s;
      background-color: ${props => props.theme.color.toggle};
    }
  }
`;
export const IconDark = styled(Brightness4Icon)`
  position: absolute;
  top: 0.5rem;
  left: calc(100vw - 0.5rem - 60px);
  border-radius: 50%;
  border: 0;
  opacity: 0;
  z-index: 17;
  cursor: pointer;
  color: ${props => props.theme.color.white};
  /* background-color: ${props => props.theme.color.white}; */
  &.checked {
    opacity: 1;
    z-index: 19;
    &:hover {
      transition: 0.4s;
      background-color: ${props => props.theme.color.toggle};
    }
  }
`;

export const ContainerTheme = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;
