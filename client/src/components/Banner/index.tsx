import styled from 'styled-components';
import icon from '../../image/icon.png';
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
    background-color: var(--grayBanner);
    display: flex;
    justify-content: space-between;
    align-items: end;
    border-radius: 15px;
  }
  .character {
    width: 20%;
    min-width: 225px;
    height: 50%;
  }
  .title {
    height: 50%;
  }
  @media ${theme.mobile} {
    width: 100vw;
    color: red;
    font-size: 13px;
    .banner-inner {
      height: 83px;
    }
    .character {
      min-width: 100px;
      height: 50%;
    }
    .page-img {
      background-image: url();
    }
  }
`;

interface PropType {
  text: string;
}

const Banner = ({ text }: PropType) => {
  return (
    <BannerWrap>
      <div className="banner-inner">
        <img className="character" src={icon} alt="icon" />
        <div className="title">{text}</div>
        <div className="page-img">right column</div>
      </div>
    </BannerWrap>
  );
};
export default Banner;