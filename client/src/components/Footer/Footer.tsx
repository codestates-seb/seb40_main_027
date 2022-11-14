import styled from 'styled-components';
import theme from '../../styles/theme';

const FooterWrapper = styled.footer`
  width: 1920px; // 이거 어떻게 불러오지??
  border-top: 1px solid black;
  display: flex;
  justify-content: center;
  .footer_inner {
    width: 1160px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a:first-child {
      margin-right: 1rem;
    }
  }
  @media ${theme.mobile} {
    width: 414px;
    font-size: 10px;
    .footer_inner {
      width: 375px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      a:first-child {
        margin-right: 1rem;
      }
    }
  }
`;

const footerText = [
  { text: '개인정보처리방침', link: 'https://github.com/codestates-seb/seb40_main_027/tree/main' },
  { text: '약관', link: 'https://github.com/codestates-seb/seb40_main_027/tree/main' },
  { text: '수정요청', link: 'https://github.com/codestates-seb/seb40_main_027/tree/main' },
  { text: '깃허브링크(GitHub)', link: 'https://github.com/codestates-seb/seb40_main_027/tree/main' },
];

const Footer: any = () => {
  return (
    <FooterWrapper>
      <div className="footer_inner">
        <div className="inner_left">
          {footerText.map((el, idx) =>
            idx < 2 ? (
              <a key={idx} href={el.link}>
                {el.text}
              </a>
            ) : null
          )}
        </div>
        <div className="inner_rigth">
          {footerText.map((el, idx) =>
            idx > 1 ? (
              <a key={idx} href={el.link}>
                {el.text}
              </a>
            ) : null
          )}
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
