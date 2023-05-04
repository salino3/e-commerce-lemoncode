import {css} from '@emotion/css';


export const container = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  hr {
    border: 1px solid #b6b6b6;
    margin-top: 1rem;
  }

`;

export const content = css`

  @media (min-width: 1024px) {
    padding: 0rem 3rem;
  }
`;

export const btnPurchase = css`

  /* @media (min-width: 1300px) {
    padding: 0rem 20rem;
  } */

  @media (min-width: 1024px) {
    //?
    display: none;
  }
`;


export const btn = css`
  font-weight: 500;

  color: #ffffff;
  background: #000000;
  border-radius: 48px;
  width: 100%;
  margin: 2rem auto 3rem;
`;
