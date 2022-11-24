import { useRecoilState } from 'recoil';
import { sideBarFloading } from '../../atoms/index';
import Logout from '../Logout';
import * as S from './SideBar.style';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const SideBar = () => {
  const [isContent, setIsContent] = useRecoilState(sideBarFloading);

  const SelectMenu = ['적성검사', '로드맵', '학원일정', '수료후기', '스터디 모집', '멘토링'];

  // useEffect(() => {
  //   document.body.style.cssText = `
  //     position: fixed;
  //     top: -${window.scrollY}px;
  //     overflow-y: scroll;
  //     width: 100%;`;
  //   return () => {
  //     const scrollY = document.body.style.top;
  //     document.body.style.cssText = '';
  //     window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
  //   };
  // }, []);

  function disableScroll() {
    document.body.classList.add('stop-scrolling');
  }
  const HideHandler = () => {
    setIsContent(!isContent);
    disableScroll();
  };

  return (
    <div>
      {isContent ? (
        <S.SideBarPage onClick={HideHandler}>
          <div className="side-bar-gray-page">
            <div className="side-bar-content">
              <div>
                {/* {SelectMenu.map((el, idx) => (
                  <S.SideBarMenu key={idx}>{el}</S.SideBarMenu>
                ))} */}
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
                {/* <Link to={'/test'}>적성검사</Link>
                <Link to={'/'}>로드맵</Link>
                <Link to={'/test'}>학원일정</Link>
                <Link to={'/postscript'}>수료후기</Link>
                <Link to={'/study'}>스터디</Link>
                <Link to={'/mentoring'}>멘토링</Link> */}
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
