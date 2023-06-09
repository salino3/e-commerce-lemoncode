import {css} from '@emotion/css';


export const grid = css`

  margin-top: 60px;
  padding: 0rem 1rem;
  
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: auto auto;
  }

`;

export const txtRoute = css`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: rgba(33, 36, 41, 0.64);
`;

export const container = css`


  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;

  #img {
    width: 16px;
    @media (min-width: 1024px) {
    display: none;
    }
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    font-variant: small-caps;
    color: #000000;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #212429;
  }

  @media (min-width: 1024px) {
    padding: 1rem 0rem;
  }
`;

export const boxInputs = css`
  display: grid;
  grid-template-rows: repeat(4, auto);
  justify-content: center;
  gap: 20px;

  input {
    width: 312px;
    height: 48px;
    border: 1px solid #dbe5f1;
    border-radius: 24px;
    padding-left: 0.3rem;

    & :focus {
      border: 1px solid #212429;
    }
  }

  @media (min-width: 1024px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(2, auto);
    justify-content: unset;
  }
`;

export const text = css`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #999999;
`;

export const buttons = css`
  padding: 2rem 0rem 3rem;

  div {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    margin: 1rem 0rem;

    @media (min-width: 1024px) {
      justify-content: unset;
    }
  }

  button {
    width: 152px;
    height: 48px;
    background: #f8f8f8;
    border: 1px solid #212429;
    border-radius: 48px;

    &:hover {
      background: #000000;
      color: #f8f8f8;
    }

    @media (min-width: 1024px) {
      width: 176px;
    }
  }
`;
