import { css } from "@emotion/css";


export const container = css`
  box-sizing: content-box;
  display: grid;
  grid-template-rows: auto auto;
  overflow-x: auto;
  height: 100%;
`; 

export const h2 = css`
  position: relative;
  left: 7rem;
  bottom: 1rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #212429;
  margin-top: 2rem;

`;

export const content = css`
  display: flex;
  place-content: center;
  gap: 20px;

`;

export const item = css`

  width: 176px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;










