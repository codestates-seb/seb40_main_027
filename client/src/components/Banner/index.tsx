import icon from '../../assets/image/icon.png';
import boardimage from '../../assets/image/boardimage.png';
import bootimage from '../../assets/image/bootimage.png';
import * as S from './banner.style';

// height: desktop=150px / mobile=83px

interface PropType {
  text: string;
  pageType: string | null;
}

/** props: text = banner title, pageType = post || other  **/
const Banner = ({ text, pageType }: PropType) => {
  return (
    <S.BannerWrap>
      <S.BannerInner>
        <S.Character>{pageType === 'post' ? <img src={icon} alt="icon" /> : null}</S.Character>
        <S.Title>{text}</S.Title>
        <S.BannerImg>
          <img src={pageType === 'post' ? boardimage : bootimage} alt="right-img" />
        </S.BannerImg>
      </S.BannerInner>
    </S.BannerWrap>
  );
};
export default Banner;
