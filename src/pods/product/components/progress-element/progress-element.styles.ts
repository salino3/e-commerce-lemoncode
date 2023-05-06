import {css} from '@emotion/css';


export const opinions = css`
    display: grid;
    grid-template-areas:
      'num    lines'
      'texto  lines'
      ' .     lines'
      'stars  lines';
    width: 100%;
    margin: 0rem auto 2rem;
    background: #f7f7f7;
    border-radius: 8px;
    padding: 1rem;
    box-sizing: border-box;

  @media (min-width: 745px) {
    max-width: 383px;
    max-height: 200px;

  }
`;

export const numOpinion = css`
  grid-area: num;

  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 64px;
  text-transform: capitalize;
  color: #212429;
`;

export const text = css`
  grid-area: texto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #212429;
`;

export const stars = css`
  grid-area: stars;
`;

export const progressLines = css`
  grid-area: lines;
  display: flex;
  flex-direction: column;

  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 140%;
  color: #212429;
  gap: 10px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: #878787;
  }
`;

export const progressBar = css`
  height: 3px;
  background-color: #d9d9d9;
  border-radius: 18px;
  width: 160px;
`;

export const progressBarInner = css`
  height: 100%;
  width: 50%;
  background: #212429;
  border-radius: 18px;
`;

export const progressBarInnerZero = css`
  height: 100%;
  width: 0%;
  background: #212429;
  border-radius: 18px;
`;


