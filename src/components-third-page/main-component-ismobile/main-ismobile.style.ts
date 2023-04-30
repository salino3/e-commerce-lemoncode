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
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  
  color: #212429;
  `;

export const boxImages = css`
 
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 `;

export const boxPrimaryImages = css`
  margin: auto;

  div {
    margin: 0.5rem 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;



export const btn = css`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  border: solid;
  box-sizing: border-box;

  font-family: Montserrat;
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
`;

export const price = css`

  margin-right: 3rem; 
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  text-align: right;
  color: #000000;
  padding-right:  2rem;
`;

export const darkButton = css`
  width: 296px;
  height: 48px;
  background: #212429;
  border-radius: 48px;
  width: 100%;
  margin: 1rem 0rem;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
`;
