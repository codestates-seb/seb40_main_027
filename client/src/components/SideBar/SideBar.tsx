import { useRecoilState } from 'recoil';
import { sideBarFloading } from '../../atoms/index';
import Logout from '../Button/Logout';
import * as S from './SideBar.style';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [isContent, setIsContent] = useRecoilState(sideBarFloading);

  const HideHandler = () => {
    setIsContent(!isContent);
  };

  return (
    <div>
      {isContent ? (
        <S.SideBarPage onClick={HideHandler}>
          <div className="side-bar-gray-page">
            <div className="side-bar-content">
              <div>
                <S.SideBarMenu>
                  <Link to={'/test'}>적성검사</Link>
                </S.SideBarMenu>
                <S.SideBarMenu>
                  <Link to={'/'}>로드맵</Link>
                </S.SideBarMenu>
                <S.SideBarMenu>
                  <Link to={'/test'}>학원일정</Link>
                </S.SideBarMenu>
                <S.SideBarMenu>
                  <Link to={'/postscript'}>수료후기</Link>
                </S.SideBarMenu>
                <S.SideBarMenu>
                  <Link to={'/study'}>스터디</Link>
                </S.SideBarMenu>
                <S.SideBarMenu>
                  <Link to={'/mentoring'}>멘토링</Link>
                </S.SideBarMenu>
              </div>
              <S.ButtonSideContent>
                <Logout />
                <button>고객센터</button>
              </S.ButtonSideContent>
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
