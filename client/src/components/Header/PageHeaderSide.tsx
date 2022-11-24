import PageHeader from './PageHeader';
import SideBar from '../SideBar/SideBar';
import { useRecoilState } from 'recoil';
import { sideBarFloading } from '../../atoms/index';
import styled from 'styled-components';

// const PageHeaderSideBar = styled.div`
//   height: 100%;
//   overflow-y: hidden;
//   position: fixed;
//   width: 100%;
//   touch-action: none;
// `;

const PageHeaderSide = () => {
  const [isCollapse, setIsCollapse] = useRecoilState(sideBarFloading);

  return (
    <div>
      {isCollapse ? (
        <div>
          <PageHeader />
          <SideBar />
        </div>
      ) : (
        <PageHeader />
      )}
    </div>
  );
};

export default PageHeaderSide;
