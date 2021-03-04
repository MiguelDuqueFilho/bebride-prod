import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

export const ContainerMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 18;
`;

export const MyMenuIcon = styled(MenuIcon)`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;

  border-radius: 50%;
  z-index: 17;
  cursor: pointer;
  color: ${props => props.theme.palette.text.primary};

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

export const MyMenuOpenIcon = styled(MenuOpenIcon)`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;

  border-radius: 50%;
  z-index: 17;
  cursor: pointer;
  color: ${props => props.theme.color.white};

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

export const ContainerToggle = styled.div`
  display: none;
  background-color: ${props => props.theme.color.toggle};
  @media (max-width: 870px) {
    display: block;
  }
`;

// export const Toggler = styled.input`
//   position: absolute;
//   top: 0.5rem;
//   left: 0.5rem;
//   width: 45px;
//   height: 45px;
//   border-radius: 50%;
//   opacity: 0;
//   z-index: 17;
//   cursor: pointer;
// `;

// export const Hamburger = styled.div`
//   position: absolute;
//   top: 0.5rem;
//   left: 0.5rem;
//   width: 45px;
//   height: 45px;
//   border-radius: 50%;
//   background-color: ${props => props.theme.color.toggle};
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   transition: 0.4s;
//   z-index: 13;

//   > div {
//     position: absolute;
//     width: 50%;
//     height: 3px;
//     border-radius: 1.5px;
//     background-color: ${props => props.theme.color.white};
//     transition: 0.4s;
//   }

//   > div:before,
//   > div:after {
//     content: '';
//     position: absolute;
//     width: 100%;
//     height: 3px;
//     border-radius: 1.5px;
//     background-color: ${props => props.theme.color.white};
//     transition: 0.4s;
//   }

//   > div:before {
//     top: -8px;
//     transition: 0.4s;
//   }

//   > div:after {
//     top: 8px;
//     transition: 0.4s;
//   }
//   @media (max-width: 870px) {
//     &.checked {
//       transform: rotate(135deg);

//       > div:before,
//       > div:after {
//         transform: rotate(90deg);
//         top: 0;
//       }
//     }
//   }
// `;

export const MenuData = styled.div`
  @media (max-width: 870px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    visibility: hidden;
    transition: 0.6s;

    &.checked {
      visibility: visible;
    }
  }
`;

export const MenuItens = styled.div`
  position: absolute;
  top: 0;
  height: 40px;
  @media (min-width: 870px) {
    background-color: ${props => props.theme.color.toggle};
    width: 100vw;
    opacity: 0.8;
    > div {
      > ul {
        position: absolute;
        top: 0;
        margin-top: 11px;
        margin-left: 40px;
        width: 70vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        > li {
          list-style: none;
          > a {
            font-family: 'Roboto', Times, serif;
            color: ${props => props.theme.color.white};
            font-size: 1.1rem;
            font-weight: 500;
            line-height: 1rem;
            text-decoration: none;
            /* text-transform: uppercase; */
          }
        }
      }
    }
  }
  @media (max-width: 870px) {
    position: absolute;
    width: 2400px;
    height: 1600px;
    width: 1400px;
    height: 1250px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translateX(-150%) translateY(-50%);
    -webkit-transform: translate3d(-150%, -50%, 0);
    background: linear-gradient(
      135deg,
      ${props => props.theme.color.gradientStart} 0%,
      ${props => props.theme.color.gradientEnd} 100%
    );

    transition: 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      max-width: 90vw;
      max-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      opacity: 0;
      transition: 0.6s;
    }

    &.checked {
      transform: translateX(-50%) translateY(-50%);
      -webkit-transform: translate3d(-50%, -50%, 0);
    }

    &.checked > div {
      opacity: 1;
    }

    > div > ul > li {
      list-style: none;
    }

    > div > ul > li > a {
      text-decoration: none;
      margin: 0.5rem;
      display: inline-block;
      font-size: 1.2rem;
      font-weight: 550;
      /* text-transform: uppercase; */
      color: #fff;
      transition: 0.3s;
    }

    > div > ul > li > a:hover {
      color: ${props => props.theme.color.black};
    }
  }
`;
