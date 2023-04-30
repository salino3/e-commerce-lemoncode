import { css } from "@emotion/css";

// export const container = css`
//  padding: 1rem;
// `;



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