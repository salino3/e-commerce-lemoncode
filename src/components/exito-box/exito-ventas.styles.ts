import {css} from '@emotion/css';


export const container = css`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  height: 100%;

`;

export const h2 = css`

  margin: 2rem 2rem 1rem;
  font-family: Montserrat;
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

  @media (min-width: 725px) {
    display: flex;
    justify-content: space-around;
    width: 100vw;
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
  left: 3rem;
  top: 2rem;

  @media (min-width: 1024px) {
    left: 6rem;
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
    @media (min-width: 725px) {
      width: 100%;
    }

    @media (min-width: 1024px) {
      width: 150%;
    }
  }
`;

export const span = css`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #212429;
`;


export const spangrey = css`
  text-decoration-line: line-through;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.6);
`;

export const spanred = css`
  text-decoration-line: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  color: #ef3c3c;
`;