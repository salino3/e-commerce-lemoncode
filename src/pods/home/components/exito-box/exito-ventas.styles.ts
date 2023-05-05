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
`;

export const content = css`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  gap: 10px;
  margin: auto;
  padding: 0rem 1rem;
  box-sizing: border-box;


  @media (min-width: 725px) {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none; /* for IE y Edge */
    scrollbar-width: none; /* for Firefox */
  }
`;

export const hearthIcon = css`
  position: relative;
  left: 4rem;
  top: 2rem;

  @media (min-width: 1000px) {
    left: 7rem;
  }
  @media (min-width: 1300px) {
    left: 9rem;
  }
`;

export const hearthRed = css`
  fill: red;
`;

export const item = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  img {

    width: 100%;

  }
`;

export const span = css`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #212429;
`;


export const spangrey = css`
  text-decoration-line: line-through;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.6);
`;

export const spanred = css`
  text-decoration-line: none;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  color: #ef3c3c;
`;
