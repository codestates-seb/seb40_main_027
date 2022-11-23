import styled from 'styled-components';

export const SideBarPage = styled.div`
  .side-bar-gray-page {
    visibility: hidden;
    height: 100vh;
    transition: all 0.3s;
  }
  @media screen and (max-width: 414px) {
    .side-bar-gray-page {
      visibility: visible;

      position: absolute;
      width: 100%;
      height: 100vh;
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

    z-index: 5;

    /* .content-margin-sidebar {
      background-color: red;
      height: 100vh-1rem;
    } */

    .side-bar-content {
      width: 70%;
      height: 100vh;
      position: absolute;
      background-color: var(--whiteBackground);
      transition: all 0.5s;
      animation: setMotions 1s normal;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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

export const SideBarMenu = styled.div`
  @media screen and (max-width: 414px) {
    border-bottom: 1px solid var(--grayContentsBorder);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
    animation: setMotionHide 1s normal;
  }
  @keyframes setMotionHide {
    from {
      width: 100%;
    }

    to {
      width: 0%;
    }
  }
`;

export const SideBarFooter = styled.div`
  border-top: 1px solid var(--grayContentsBorder);
  display: flex;
  justify-content: space-between;
  bottom: 0%;

  button {
    border: none;
    height: 2rem;
    background-color: var(--whiteBackground);
  }
`;
