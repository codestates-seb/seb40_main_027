import styled from 'styled-components';
import theme from '../../styles/theme';

const FooterWrapper = styled.footer`
  width: 100vw;
  border-top: 1px solid var(--grayHeaderBorder);
  display: flex;
  justify-content: center;
  .footer-inner {
    width: 1160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a:first-child {
      margin-right: 1rem;
    }
  }
  @media ${theme.mobile} {
    width: 100vw;
    font-size: 10px;
    .footer-inner {
      width: 375px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        color: red;
      }
      a:first-child {
        margin-right: 1rem;
      }
    }
  }
`;

const footerText = [
  { text: '개인정보처리방침', link: 'https://github.com/codestates-seb/seb40_main_027/tree/main' },
  { text: '약관', link: 'https://github.com/codestates-seb/seb40_main_027/tree/main' },
  {
    text: '수정요청',
    link: 'https://forms.gle/3iHGo1VEHx58p85a7',
  },
  { text: '깃허브링크(GitHub)', link: 'https://github.com/codestates-seb/seb40_main_027/tree/main' },
];

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-inner">
        <div>
          {footerText.map((el, idx) =>
            idx <= 1 ? (
              <a key={idx} href={el.link} target="_blank" rel="noopener noreferrer">
                {el.text}
              </a>
            ) : null
          )}
        </div>
        <div>
          {footerText.map((el, idx) =>
            idx >= 2 ? (
              <a key={idx} href={el.link} target="_blank" rel="noopener noreferrer">
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
