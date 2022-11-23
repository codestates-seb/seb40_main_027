import styled from 'styled-components';
import theme from '../styles/theme';

export const CardLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
`;

export const Card = styled.div`
  transform-style: preserve-3d;
  width: 80%;
  max-width: 900px;
  height: 80%;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
  @media ${theme.mobile} {
    width: 90vw;
    height: 60vh;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 30%;
  height: 30%;
  object-fit: contain;
  z-index: 2;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  margin-right: 2.7%;
`;

export const ErrorTitle = styled.h1`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 7vw;
  font-style: bold;
  color: #1851fb;
  @media ${theme.mobile} {
    font-size: 18vw;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 3vw;
  margin-bottom: 0.5em;
`;

export const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1vw;
  color: #b7bac6;
  margin: 0;
  @media ${theme.mobile} {
    font-size: 3vw;
  }
`;

export const HomeLink = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  text-transform: uppercase;
  padding-top: 3em;
  display: inline-block;
  color: #000;
  text-decoration: none;
`;
