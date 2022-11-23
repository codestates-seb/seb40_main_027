import Banner from '../components/Banner';
import { Icon } from '@iconify/react';
import * as S from './BootCampDetail.style';
import DetailTable from '../components/Table/DetailTable';

const BootCampDetail = () => {
  return (
    <>
      <Banner text="코드 스테이츠" pageType="other" />
      <S.PageWrap>
        <S.MiddleSection>
          <S.grayBtn>
            홈 페이지
            <Icon icon="ant-design:home-outlined" color="#1dca89" />
          </S.grayBtn>
          <S.grayBtn>
            찜
            <Icon icon="mdi:cards-heart-outline" color="#f24e1e" />
          </S.grayBtn>
        </S.MiddleSection>
        <section>
          <DetailTable />
        </section>
      </S.PageWrap>
    </>
  );
};

export default BootCampDetail;
