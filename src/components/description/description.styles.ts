import { css } from "@emotion/css";

export const container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0rem 0.5rem;
  box-sizing: border-box;

`;

export const messageTitleDesktop = css`
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 100%;
  color: #212429;
  margin: auto;


`;

export const messageTitleMobile = css`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: #212429;
  margin: auto;
`;

export const message = css`
  position: relative;
  place-self: center;
  justify-self: center;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  color: #212429;
  text-align: start;
`;

export const boxButtons = css`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: 700px) {
    justify-content: center;
    margin: auto;

  }

  button {
    border: solid 1px;
    margin: auto;

    &:hover {
      background-color: #f6b750;
      border: 0;
    }
  }
`;





