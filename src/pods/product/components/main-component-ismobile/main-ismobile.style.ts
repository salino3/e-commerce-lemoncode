import { css } from "@emotion/css";

export const boxIsMobile = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  `;


export const title = css`
  display: grid;
  grid-template-rows: 1fr auto;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #212429;

  `;

export const boxImages = css`

 display: flex;
 flex-direction: row;
 justify-content: space-between;

 `;

export const boxPrimaryImages = css`

  display: flex;
  flex-direction: column;
  justify-content: center;

  div {

    display: flex;
    flex-direction: row;
    gap: 5px;
  }
`;

export const primaryImg = css`
  /* max-width: 90vw; */
  width: 100%;
  margin: auto;
`;

export const smallImages = css`

 justify-content: space-around;

  img {
    width: 30%;
  }
`;

export const buttons = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem auto;
`;

export const btn = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 5px;
  align-items: center;
  box-sizing: border-box;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  color: #000000;

  width: 152px;
  height: 48px;
  padding: 0rem 0.5rem;

  background: #ffffff;
  border: 1px solid #f7f7f7;
  border-radius: 48px;
`;

export const stylesBtn = css`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  width: 100%;

`;

export const lightButton = css`
  display: flex;
  flex-direction: row;
  place-content: center;
  justify-content: space-around;
  align-items: center;
  width: 176px;
  height: 48px;
  border: 1px solid #212429;
  border-radius: 48px;

  img {
    max-width: 10px;
  }
`;

export const price = css`
  margin-right: 3rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  text-align: right;
  color: #000000;

`;

export const darkButton = css`
  width: 296px;
  height: 48px;
  background: #212429;
  border-radius: 48px;
  margin: 1rem 0rem;
  margin: 1rem auto;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;

  img {
    max-width: 19px;
  }
`;
