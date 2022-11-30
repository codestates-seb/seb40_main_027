import Banner from '../components/Banner';
import * as S from './BootCampDetail.style';
import { DetailTable } from '../components/Table/DetailTable';
import { BootDetailButton } from '../components/Button';
import { GREEN_MAIN, RED_BOOT_DETAIL_HEART } from '../assets/constant/COLOR';
import { useGetBootSpecificTable } from '../hooks/useBootTable';
import axios from 'axios';

const BootCampDetail = () => {
  const data = useGetBootSpecificTable();
  console.log(data);
  const dataKeys: Array<string> = Object.keys(data);
  const halfIdx = Math.floor(dataKeys.length / 2);

  // 찜하기 기능 - 11월30일 찜 이후 vote가 수정되는지 체크 필요
  const onClick = () => {
    const likeStatus = data.vote;
    let param = 0;
    likeStatus === 0 ? (param = 1) : (param = 0);
    axios({
      method: 'post',
      url: `/bootcamp/votes/${data.bootcampId}?vote=${param}`,
      headers: {
        Authorization: localStorage.getItem('access'),
      },
    })
      .then(() => alert(param === 1 ? '찜 되었습니다.' : '찜 취소되었습니다.'))
      .catch((err) => alert(err));
  };

  return (
    <>
      <Banner text={`${data.process}`} pageType="other" />
      <S.PageWrap>
        <S.MiddleSection>
          <a href={`https://${data.site}`} target="_blank" rel="noopener noreferrer">
            <BootDetailButton text="홈 페이지" icon="ant-design:home-outlined" iconColor={GREEN_MAIN} />
          </a>
          <BootDetailButton
            text="찜 "
            icon="mdi:cards-heart-outline"
            iconColor={RED_BOOT_DETAIL_HEART}
            onClick={onClick}
          />
        </S.MiddleSection>
        <section>
          <DetailTable data={data} halfIdx={halfIdx} dataKeys={dataKeys} />
        </section>
      </S.PageWrap>
    </>
  );
};

export default BootCampDetail;
