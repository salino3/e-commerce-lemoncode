import { css } from "@emotion/css";

export const container = css`
  margin: 2rem auto 0rem;
  
`;

export const title = css`

font-family: Montserrat;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 120%;
color: #212429;`;

export const reviewsImage = css`
  display: flex;
  flex-direction: column-reverse;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    gap: 20vw;
  }
`;

export const button = css`
  min-width: 280px;
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



export const textReview = css`

 display: flex;
 flex-direction: row;
 gap: 15px;
 align-items: center;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #212429;

  div {

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
    color: #a0a0a0;
  }
`;

export const starsView = css`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;
`;

export const footerReview = css`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;

  color: #878787;
`; 