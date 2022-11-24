import styled from 'styled-components';

export const SideBarPage = styled.div`
  .side-bar-gray-page {
    visibility: hidden;

    transition: all 0.3s;
  }
  .outer::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 414px) {
    .side-bar-gray-page {
      visibility: visible;
      position: absolute;
      overflow-y: hidden;

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
    z-index: 2;
    .side-bar-content {
      width: 70%;
      height: 100%;
      position: absolute;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
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

export const SideBarMenu = styled.div`
  @media screen and (max-width: 414px) {
    border-bottom: 1px solid var(--grayContentsBorder);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 10% 10% 10% 20%; */

    height: 4rem;

    a {
      text-decoration: none;
    }
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

export const ButtonSideContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-top: 1px solid var(--grayContentsBorder);
`;
