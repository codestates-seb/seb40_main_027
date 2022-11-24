import Banner from '../components/Banner';
import * as S from './BootCampDetail.style';
import DetailTable from '../components/Table/DetailTable';
import { BootDetailButton } from '../components/Button';
import { GREEN_MAIN, RED_BOOT_DETAIL_HEART } from '../assets/constant/COLOR';

const BootCampDetail = () => {
  return (
    <>
      <Banner text="코드 스테이츠" pageType="other" />
      <S.PageWrap>
        <S.MiddleSection>
          <BootDetailButton text="홈 페이지" icon="ant-design:home-outlined" iconColor={GREEN_MAIN} />
          <BootDetailButton text="찜 " icon="mdi:cards-heart-outline" iconColor={RED_BOOT_DETAIL_HEART} />
        </S.MiddleSection>
        <section>
          <DetailTable />
        </section>
      </S.PageWrap>
    </>
  );
};

export default BootCampDetail;
