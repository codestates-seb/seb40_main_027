import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { sidebarFloading } from '../../atoms/index';

// interface Container {
//   size: number | undefined;
//   height: number | undefined;
// }

const SidebarContent = styled.div`
  transition: rgba(235, 4, 4, 0.38) 0.5s ease-in 0.3s;
  -webkit-transition: all 0.25s;
`;
const SidebarPage = styled.div`
  .baov {
    overflow: hidden;
  }
  @media screen and (max-width: 414px) {
    transition: background-color 0.4s, left 0.4s, width 0.4s;
    .baov {
      /* display: flex; */
      transition: all 0.5s;
      position: absolute;
      width: 100%;

      height: 100%;
      background-color: rgba(0, 0, 0, 0.38);
      transition: background-color 0.4s, left 0.4s, width 0.4s;
      z-index: 2;

      -webkit-transition: all 0.25s;

      .aaaaaa1 {
        width: 70%;
        height: 100%;
        position: absolute;
        background-color: var(--whiteBackground);
        transition: all 0.5s;
      }
    }
  }
`;

const SidebarMenu = styled.div`
  @media screen and (max-width: 414px) {
    border: 1px solid var(--grayContentsBorder);
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10% 10% 10% 20%;
    height: 4rem;
  }
`;

// const HideSidebar = styled.div`
//   @media screen and (max-width: 414px) {
//     width: 1rem;
//     height: 1rem;
//     background-color: pink;
//     transition: all 0.25s;

//     position: absolute;
//   }
// `;

const Sidebar = () => {
  const [isco, setIsco] = useRecoilState(sidebarFloading);

  const SelectMenu = ['적성검사', '로드맵', '학원일정', '수료후기', '스터디 모집', '멘토링'];

  return (
    <SidebarContent>
      {isco ? (
        <SidebarPage>
          <div className="baov">
            <div className="aaaaaa1">
              <div>
                {SelectMenu.map((el, idx) => (
                  <SidebarMenu key={idx}>{el}</SidebarMenu>
                ))}
              </div>
            </div>
          </div>
        </SidebarPage>
      ) : (
        // <HideSidebar>a</HideSidebar>
        <SidebarPage></SidebarPage>
      )}
    </SidebarContent>
  );
};

export default Sidebar;
