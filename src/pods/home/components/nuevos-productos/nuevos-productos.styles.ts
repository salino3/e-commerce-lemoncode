import {css} from '@emotion/css';


export const container = css`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  height: 100%;

`;

export const h2 = css`
  margin: 2rem 2rem 1rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #212429;
`;


export const containerLinks = css`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-left: 2rem;

  a {
    color: #212429;
  }
`;

export const content = css`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: repeat(3, auto);
  margin: auto;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
  }
`;

export const item = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  box-sizing: border-box;
  padding: 1rem;
  width: 46vw;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
  }

  img {
    width: 100%;

  }

  @media (min-width: 1024px) {

    width: 20vw;
    box-sizing: content-box;

  }
`;

export const item2 = css`


  @media (max-width: 1024px) {
    display: none;
  }
`;

export const hearthIcon = css`
  position: relative;
  left: 1rem;
  bottom: -2em;

`;

export const hearthRed = css`
  fill: red;
`;

