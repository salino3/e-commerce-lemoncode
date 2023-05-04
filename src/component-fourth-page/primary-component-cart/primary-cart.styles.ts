import { css } from "@emotion/css";

export const container = css`
  padding: 1rem;

  h2 {
    padding-bottom: 1rem;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    color: #212429;
  }
`;

export const content = css`
  width: 100%;


  @media (min-width: 1024px) {

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10%;
  }
`;



export const boxForm = css`
  display: flex;
  flex-direction: column;
  width: 70%;

  form {
    display: flex;
    flex-direction: column;

    div:first-child {
      margin: auto;

    }
  }

  hr {
    width: 100%;
    margin: 1rem auto;
  }

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  font-variant: small-caps;
  color: #212429;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const boxInput = css`

 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;

  box-sizing: border-box;
  padding: 0.5rem 1rem;

  background: #ffffff;
  border: 2px solid #dbe5f1;
  border-radius: 48px;
  height: 48px;
`;


export const input = css`
  margin: 1rem 0rem;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;
  outline: none;
`;

export const btn = css`
  width: 36px;
  height: 36px;
  background: #212429;
  border: 0.5px solid #ececec;
  border-radius: 24px;

  &:active {
    border: 2px solid #ececec;
  }
`;

export const text = css`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-variant: small-caps;
  color: #212429;
  margin-top: 1rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem 0rem;
  }

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    font-variant: small-caps;
    color: #212429;
  }

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    font-variant: small-caps;
    color: #212429;
  }
`;

export const totalImport = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0rem;
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
  `;
