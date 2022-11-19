import { useRecoilState } from 'recoil';
import { sidebarFloading } from '../../atoms/index';
import * as S from './SideBar.style';

const SideBar = () => {
  const [isContent, setIsContent] = useRecoilState(sidebarFloading);

  const SelectMenu = ['적성검사', '로드맵', '학원일정', '수료후기', '스터디 모집', '멘토링'];

  const HideHandler = () => {
    setIsContent(!isContent);
  };

  return (
    <div>
      {isContent ? (
        <S.SideBarPage onClick={HideHandler}>
          <div className="sidebar-graypage">
            <div className="sidebar-content">
              <div>
                {SelectMenu.map((el, idx) => (
                  <S.SideBarMenu key={idx}>{el}</S.SideBarMenu>
                ))}
              </div>
            </div>
          </div>
        </S.SideBarPage>
      ) : (
        <S.SideBarPage className="hide-menu"></S.SideBarPage>
      )}
    </div>
  );
};

export default SideBar;
