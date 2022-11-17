import styled from 'styled-components';
import icon from '../../assets/image/icon.png';
import boardimage from '../../assets/image/boardimage.png';
import bootimage from '../../assets/image/bootimage.png';
import theme from '../../styles/theme';

// height: desktop=150px / mobile=83px

const BannerWrap = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .banner-inner {
    width: 1160px;
    height: 150px;
    background-color: var(--grayBannerBackground);
    display: flex;
    border-radius: 15px;
    box-sizing: border-box;
  }
  .character {
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;
    justify-content: end;
    > img {
      width: 15%;
      min-width: 225px;
      height: 50%;
    }
  }
  .title {
    width: calc(100% / 3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .banner-img {
    width: calc(100% / 3);
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    > img {
      width: 91px;
      height: 50%;
    }
  }
  @media ${theme.mobile} {
    width: 100vw;
    color: red;
    font-size: 13px;
    .banner-inner {
      height: 83px;
    }
    .character {
      width: calc(100% / 3);
      > img {
        min-width: 100px;
        height: 50%;
      }
    }
    .title {
      width: calc(100% / 3);
    }
    .banner-img {
      width: calc(100% / 3);
      > img {
        width: 40px;
        height: 50%;
      }
    }
  }
`;

interface PropType {
  text: string;
  pageType: string | null;
}

/** props: text = banner title, pageType = post || other  **/
const Banner = ({ text, pageType }: PropType) => {
  return (
    <BannerWrap>
      <div className="banner-inner">
        <div className="character">{pageType === 'post' ? <img src={icon} alt="icon" /> : null}</div>

        <div className="title">{text}</div>
        <div className="banner-img">
          <img src={pageType === 'post' ? boardimage : bootimage} alt="right-img" />
        </div>
      </div>
    </BannerWrap>
  );
};
export default Banner;
