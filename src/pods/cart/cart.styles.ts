import {css} from '@emotion/css';


export const content = css`
  margin-top: 60px;

  hr {
    border: 1px solid #b6b6b6;
  }

  @media (min-width: 1024px) {
    padding: 0rem 3rem;
  }
`;

export const btnPurchase = css`
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const btn = css`
  font-weight: 500;
  margin: 2rem auto 3rem;
  width: 100%;
  border-radius: 48px;
  cursor: pointer;
  border: 1px solid #212429;
  border-radius: 48px;
  color: #ffffff;
   background: #212429;

`;

