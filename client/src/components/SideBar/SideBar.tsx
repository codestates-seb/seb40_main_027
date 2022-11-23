import { useRecoilState } from 'recoil';
import { sideBarFloading } from '../../atoms/index';
import * as S from './SideBar.style';

const SideBar = () => {
  const [isContent, setIsContent] = useRecoilState(sideBarFloading);

  const SelectMenu = ['적성검사', '로드맵', '학원일정', '수료후기', '스터디 모집', '멘토링'];

  const HideHandler = () => {
    setIsContent(!isContent);
  };

  return (
    <div>
      {isContent ? (
        <S.SideBarPage onClick={HideHandler}>
          <div className="side-bar-gray-page">
            <div className="side-bar-content">
              <div className="content-margin-sidebar">
                {SelectMenu.map((el, idx) => (
                  <S.SideBarMenu key={idx}>{el}</S.SideBarMenu>
                ))}
              </div>
              <S.SideBarFooter>
                <button>로그아웃</button>
                <button>고객센터</button>
              </S.SideBarFooter>
            </div>
          </div>
        </S.SideBarPage>
      ) : (
        <S.SideBarPage />
      )}
    </div>
  );
};

export default SideBar;
