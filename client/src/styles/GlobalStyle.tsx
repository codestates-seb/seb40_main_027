import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }

  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }

  body {
    line-height: 1;
  }

  menu, ol, ul, li {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  button {
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
    color: #000000;
    margin: 0;

    --whiteBackground: #FFFFFF;
    --greenMain: #1DCA89;
    --greenBootDetailBorder: #09CF58;
    --greenSub: #A9DBBD;
    --blackTextNormal: #222222;
    --blackTextTitle: #222222;
    --purpleReview: #B832F8;
    --blueStudy: #39739D;
    --yellowHotPosts: #FFFBD9;
    --redImminentBootCamps: #FBB3B3;
    --redButtonDelete: #CA471D;
    --grayHeaderBorder: #D6D6D6;
    --grayContentsBorder: #B6B6B6;
    --grayBoardAreaBorder: #DDDDDD;
    --grayTableBorder: #A4A4A4;
    --grayBannerBackground: #EBE7E4;
    --grayBootButton: #D9D9D9;
    --grayListFill: #EEEEEE;

    background-color: var(--whiteBackground);

    a, a.logo {
      color: #000000;
    }
  }
`;

export default GlobalStyle;
