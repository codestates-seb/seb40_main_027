import PageHeader from './PageHeader';
import SideBar from '../SideBar/SideBar';
import { useRecoilValue } from 'recoil';
import { sideBarFloading } from '../../atoms/index';

const PageHeaderSide = () => {
  const isCollapse = useRecoilValue(sideBarFloading);

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
