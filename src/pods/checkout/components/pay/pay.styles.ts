import {css} from '@emotion/css';

export const container = css`

  hr {
    display: none;
  }
  
  @media (min-width: 725px) {

    hr {

      display: unset;
      background: #212429;
      border: 1px solid #212429;
      margin: 1rem 0rem;
    }
  }

  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  gap: 10px;
  margin: auto;
  background: #f8f8f8;
  border-radius: 12px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-variant: small-caps;
  color: #000000;

  & :first-child {
    font-weight: 700;
  }

  span {
    font-weight: 700;
    white-space: nowrap;
  }

  @media (min-width: 725px) {
    padding: 1rem 5rem;

    div {
      padding: 0rem 5rem;
      gap: 150px;
    }
  }
`;

export const div = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;
`;

export const lastDiv = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  font-variant: small-caps;
  color: #212429;

  @media (max-width: 725px) {
    display: none;
  }
`;

export const btn = css`
  font-weight: 500;

  color: #ffffff;
  background: #000000;
  border-radius: 48px;
  width: 80%;
  margin: 2rem auto 3rem;

`;

