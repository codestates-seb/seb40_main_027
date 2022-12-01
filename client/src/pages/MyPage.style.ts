import styled from 'styled-components';

export const PageSize = styled.div`
  overflow-y: auto;
`;

export const MyPageContent = styled.div`
  height: 100vh;
  /* max-height: 1080px; */
  margin: 0rem 18% 0rem 18%;

  .tab-menu {
    height: 10%;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0rem 5rem 0rem 5rem;
  }
  .tab-content-mobile {
    display: none;
  }
  .page-name {
    font-size: 2em;
    margin: 1rem;
  }
  img {
    display: flex;
    align-items: flex-end;
    width: 8rem;
    height: 50%;
  }
  .icon-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    margin-left: 1rem;
  }
  .tab-content {
    width: 10rem;
    display: flex;
    flex-direction: row;
  }
  .tab-body {
    height: 10%;
    background-color: var(--greenMain);
    border-radius: 40px 40px 0px 0px;
  }
  .my-page-body {
    display: flex;
    border: 1px solid var(--grayContentsBorder);
  }

  .my-page-view {
    width: 100%;
  }

  @media screen and (max-width: 414px) {
    margin: 0px;

    .tab-menu {
      display: none;
    }
    .tab-content-mobile {
      display: flex;
      justify-content: flex-end;
      margin-top: 1rem;
    }
    .page-name {
      display: none;
    }
    .icon-wrapper {
      display: none;
    }
    img {
      display: none;
    }
    .tab-body {
      display: none;
    }
    .my-page-body {
      margin: 0px;
      display: flex;
      width: 100vw;

      flex-direction: column;
      justify-content: center;
      border: none;
    }

    .tab-mobile-bar {
      display: flex;
      background-color: var(--greenMain);
      height: 3rem;
      width: 100%;
    }
  }
`;

export const ButtonTab = styled.button`
  border: none;
  height: 3rem;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  background-color: ${(props) => (props.className === 'tab-button' ? 'var(--greenMain)' : 'var(--greenSub)')};
`;
