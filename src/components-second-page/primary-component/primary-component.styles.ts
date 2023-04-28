import { css } from "@emotion/css";



export const boxIcons = css`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0rem 1rem;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;

  div {
    display: flex;
    gap: 1rem;
  }
`;

export const boxIsDesktop = css`
 
 display: grid;
 grid-template-columns: 25% 75%;
`;

export const aside = css`

  padding: 1rem;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;

  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    color: #212429;

  }
`;





