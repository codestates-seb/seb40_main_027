// import logo from './image/logo.png';
// import Header from './components/Mainheader';
import PageHeader from './components/Header/PageHeader';
import {
  RegisterButton,
  LoginButton,
  BigBorderTagButton,
  SmallBorderTagButton,
  BigBackgroundTagButton,
  SmallBackgroundTagButton,
  WriteButton,
  BorderOtherButton,
  BackgroundOtherButton,
  FilterButton,
} from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <PageHeader />
        </div>
      </header>
      <FilterButton conditions={['최신순', '좋아요순']} />
      <FilterButton conditions={['좋아요순']} />
      <BorderOtherButton text="수정" color="#1DCA89" />
      <BorderOtherButton text="삭제" color="#F76060" />
      <BackgroundOtherButton text="등록" color="#1DCA89" />
      <BackgroundOtherButton text="목록" color="#EEEEEE" />
      <WriteButton />
      <BigBorderTagButton text="부트캠프 후기" color="#B832F8" />
      <SmallBorderTagButton text="부트캠프 후기" color="#B832F8" />
      <BigBorderTagButton text="개발 공부법" color="#39739D" />
      <SmallBorderTagButton text="개발 공부법" color="#39739D" />
      <BigBackgroundTagButton text="모집 중" color="#1DCA89" />
      <SmallBackgroundTagButton text="모집 중" color="#1DCA89" />
      <BigBackgroundTagButton text="모집 완료" color="#B6B6B6" />
      <SmallBackgroundTagButton text="모집 완료" color="#B6B6B6" />
      <RegisterButton />
      <LoginButton />
    </div>
  );
}

export default App;
