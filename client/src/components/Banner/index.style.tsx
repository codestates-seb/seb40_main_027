import styled from 'styled-components';
import theme from '../../styles/theme';

export const BannerWrap = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${theme.mobile} {
    width: 100vw;
    color: red;
    font-size: 13px;
  }
`;

export const BannerInner = styled.div`
  width: 1160px;
  height: 150px;
  background-color: var(--grayBannerBackground);
  display: flex;
  border-radius: 15px;
  box-sizing: border-box;
  @media ${theme.mobile} {
    height: 83px;
  }
`;

export const Character = styled.div`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: end;
  > img {
    width: 15%;
    min-width: 225px;
    height: 50%;
  }
  @media ${theme.mobile} {
    width: calc(100% / 3);
    > img {
      min-width: 100px;
      height: 50%;
    }
  }
`;

export const Title = styled.h2`
  width: calc(100% / 3);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;

  @media ${theme.mobile} {
    width: calc(100% / 3);
  }
`;

export const BannerImg = styled.div`
  width: calc(100% / 3);
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  > img {
    width: 91px;
    height: 50%;
  }
  @media ${theme.mobile} {
    width: calc(100% / 3);
    > img {
      width: 40px;
      height: 50%;
    }
  }
`;
