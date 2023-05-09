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
    text-decoration: none;
    color: #212429;
  }
`;

export const content = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, auto);
  margin: auto;
  padding: 0rem 0.5rem;
  justify-self: center;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
    padding: 0rem;

  }
`;

export const item = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  box-sizing: border-box;
  justify-content: center;


  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;

  height: 100%;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const item2 = css`
  @media (max-width: 1024px) {
    display: none;
  }
`;

