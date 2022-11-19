import styled from 'styled-components';

export const SidebarPage = styled.div`
  .baov {
    visibility: hidden;
    height: 0vh;
    transition: all 0.3s;
  }
  @media screen and (max-width: 414px) {
    .sidebar-graypage {
      visibility: visible;

      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.38);
      animation: setMotion 1s normal;
      @keyframes setMotion {
        from {
          width: 0%;
        }

        to {
          width: 100%;
        }
      }
    }

    z-index: 2;

    .sidebar-content {
      width: 70%;
      height: 100%;
      position: absolute;
      background-color: var(--whiteBackground);
      transition: all 0.5s;
      animation: setMotions 1s normal;
      z-index: 2;
    }
    @keyframes setMotions {
      from {
        width: 0%;
      }

      to {
        width: 70%;
      }
    }
  }
`;

export const SidebarMenu = styled.div`
  @media screen and (max-width: 414px) {
    border: 1px solid var(--grayContentsBorder);
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10% 10% 10% 20%;
    height: 4rem;
  }
`;

export const HideSidebar = styled.div`
  @media screen and (max-width: 414px) {
    width: 1rem;
    height: 1rem;
    background-color: pink;
    transition: all 0.25s;

    position: absolute;
    animation: setMotionhide 1s normal;
  }
  @keyframes setMotionhide {
    from {
      width: 100%;
    }

    to {
      width: 0%;
    }
  }
`;