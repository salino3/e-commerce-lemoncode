import { css } from "@emotion/css";

export const container = css`
  margin: 2rem auto 0rem;
  /* width: 100%; */
`;

export const button = css`
  width: 280px;
  border-radius: 48px;
  height: 48px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  width: 100%;
  border: solid 1px;

  &:hover {
    color: #ffffff;
    background: #212429;
  }

  @media (min-width: 725px) {
    width: 280px;
  }
`;
