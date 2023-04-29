import {css} from '@emotion/css';


export const container = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  margin: 1rem 0rem;


  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;

    div {
      align-self: center;
      text-align: start;
    }
  }
`;

export const h3 = css`

  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #000000;
`;

export const p = css`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  margin: auto;

  @media (min-width: 1024px) {
    all: unset;
  }
`;

export const input = css`
  border: 0.5px solid #b6b6b6;
  border-radius: 48px;
  width: 312px;
  height: 48px;
  padding-left: 10px;

  @media (min-width: 1024px) {
    margin-right: 1rem;
  }
`;

export const button = css`
  margin: 2rem auto 1rem;
  border: solid 1px;
  width: 178px;

  &:hover {
    background-color: #212429;
    color: #ffffff;
    border: 0;
  }

  @media (min-width: 1024px) {
    margin-left: 1rem;
  }
`;



