import * as S from './index.style';
import icon from '../../assets/image/icon.png';
import boardimage from '../../assets/image/boardimage.png';
import bootimage from '../../assets/image/bootimage.png';
import roadmapleft from '../../assets/image/RoadMapLeft.png';
import roadmapright from '../../assets/image/RoadMapRight.png';

// height: desktop=150px / mobile=83px

interface PropType {
  text: string;
  pageType: string | null;
}

/** props: text = banner title, pageType = post OR road OR boot  **/
const Banner = ({ text, pageType }: PropType) => {
  return (
    <S.BannerWrap>
      <S.BannerInner>
        <S.Character>
          {pageType === 'post' ? (
            <img src={icon} alt="icon" />
          ) : pageType === 'road' ? (
            <img src={roadmapleft} alt="icon" />
          ) : null}
        </S.Character>
        <S.Title>{text}</S.Title>
        {pageType === 'road' ? (
          <S.RoadRight>
            <img src={roadmapright} alt="right-img" />
          </S.RoadRight>
        ) : (
          <S.BannerImg>
            <img src={pageType === 'post' ? boardimage : bootimage} alt="right-img" />
          </S.BannerImg>
        )}
      </S.BannerInner>
    </S.BannerWrap>
  );
};
export default Banner;
