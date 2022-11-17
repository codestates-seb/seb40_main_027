import { useRecoilState } from 'recoil';
import { sidebarFloading } from '../../atoms/index';
import * as S from './SideBar.style';

const SideBar = () => {
  const [isco, setIsco] = useRecoilState(sidebarFloading);

  const SelectMenu = ['적성검사', '로드맵', '학원일정', '수료후기', '스터디 모집', '멘토링'];

  const HideHandler = () => {
    setIsco(!isco);
  };

  return (
    <div>
      {isco ? (
        <S.SidebarPage onClick={HideHandler}>
          <div className="sidebar-graypage">
            <div className="sidebar-content">
              <div>
                {SelectMenu.map((el, idx) => (
                  <S.SidebarMenu key={idx}>{el}</S.SidebarMenu>
                ))}
              </div>
            </div>
          </div>
        </S.SidebarPage>
      ) : (
        <S.SidebarPage className="hide-menu"></S.SidebarPage>
      )}
    </div>
  );
};

export default SideBar;
